import React, { Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import styles from "./map.module.css";
import HouseData from "./data/houses.json";
import PoiCard from "./components/card/card";
import axios from "axios";
import {
  REGION, REGION_HIGHLIGHTED, REGION_CLICKED,
  COUNTY, COUNTY_HIGHLIGHTED, COUNTY_CLICKED, COUNTY_BORDERED,
  CITY, CITY_OTHER, CURRENT_CITY, CURRENT_CITY_CLICKED, CITY_BORDERED,
  NEIGHBORHOOD, NEIGHBORHOOD_HIGHLIGHTED, CURRENT_NEIGHBORHOOD
} from "./polygon/layer/config";

import draw from "./polygon/draw";
import move from "./polygon/polygonEvents/mousemove";
import leave from "./polygon/polygonEvents/mouseleave";
import layerClick from "./polygon/polygonEvents/click";
import showPoi from "./poi";
import showHouses from "./houses";
import scores from "./services/scores";
import favourites from "./services/favourites";
import flipped from "./services/flipped";
import filters from "./services/filters";
import { loadStarted, LoadEnded } from "../../services/actions/map.actions";
import NeighborhoodDetail from "../NbDetail/NbDetail";
import {showCurrent} from "../../services/actions/neighborhood.actions";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const score = "/map/pin.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw";

class Map extends Component {
  state = {
    openCard: false,
    scores: [
      { id: "house 5", score: 100 },
      { id: "house 4", score: 80 },
      { id: "house 3", score: 60 },
      { id: "house 2", score: 40 },
      { id: "house 1", score: 20 },
    ],
    mapObject: "",
    image: "",
    cardObject: { name: "", county: "", city: "", adress: "", phone: "", type: "" },
    popup: new mapboxgl.Popup({ closeButton: false, anchor: 'right', offset: 16 }),
    city_neighbPolygons: "",
    neighborhoodCard: { display: "none", name: "" }
  };

  handleClose = () => {
    this.setState({ ...this.state, openCard: false });
  };

  async componentDidMount() {
    let map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/hamzahad/ckm6lqb38f5ev17ljx1v8jxgp", // style URL
      center: [-84.13814338407742, 26.573880643027238], // starting position [lng, lat]
      zoom: 5, // starting zoom
    });
    let { popup } = this.state;
    let allInOneData = await this.getAllInOne();
    let features= allInOneData.data.features.filter(f => f.properties.hasOwnProperty('City') || f.properties.hasOwnProperty('Neighborhood'));
    let geojson = {
      type: "FeatureCollection",
      features
    };

    this.setState({ mapObject: map, city_neighbPolygons: geojson });
    
    // map.on("load", e => {
    //   // showPoi.showPoi(e);
    //   // this.showHouses(e);
    // });

      draw.drawPolygon(map, allInOneData.data, REGION);
      draw.drawPolygon(map, allInOneData.data, COUNTY);
      draw.drawPolygon(map, allInOneData.data, CITY);
      draw.drawPolygon(map, allInOneData.data, NEIGHBORHOOD);

    map.on("mousemove", "region-layer", e => {
      move.mouseMove(allInOneData.data, e, "region", REGION_HIGHLIGHTED);
      this.handlePopup(e, "Region", e.features[0].properties.id);
      
    });

    map.on("mouseleave", "region-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, REGION_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "region-highlighted-layer", e => {
      layerClick.click(map, allInOneData.data, e, REGION_HIGHLIGHTED, "region", e.features[0].properties.id,
        REGION_CLICKED)});

    map.on("mousemove", "county-layer", e => {
      move.mouseMove(allInOneData.data, e, "county", COUNTY_HIGHLIGHTED);
      this.handlePopup(e, "County", e.features[0].properties.id.split('-')[1]);
      });

    map.on("click", "county-layer", e => {
      let result = e.features[0].properties.id.split("-");
      layerClick.click(map, allInOneData.data, e, COUNTY, "region", result[0], REGION_CLICKED);
      layerClick.click(map, allInOneData.data, e, COUNTY_HIGHLIGHTED, "county", e.features[0].properties.id,
        COUNTY_CLICKED)});

    map.on("mouseleave", "county-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, COUNTY_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "county-clicked-layer", e => {
      layerClick.click(map, allInOneData.data, e, COUNTY_CLICKED, "county", e.features[0].properties.id,
        COUNTY_BORDERED);
      });

    map.on("mousemove", "city-layer", e => {
      move.mouseMove(allInOneData.data, e, "city", CITY_OTHER);
      this.handlePopup(e, "City", e.features[0].properties.id.split('-')[2]);
      });

    map.on("mouseleave", "city-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, CITY_OTHER, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "city-other-layer", e => {
      let id = e.features[0].properties.id.split("-");
      layerClick.click(map, allInOneData.data, e, CITY_OTHER, "city", e.features[0].properties.id,
        CURRENT_CITY);
      layerClick.click(map, allInOneData.data, e, CITY_OTHER, "county", id[0] + "-" + id[1], COUNTY_BORDERED);
    });

    map.on("click", "current-city-layer", e => {
      layerClick.click(map, allInOneData.data, e, CURRENT_CITY_CLICKED, "city", e.features[0].properties.id,
        CITY_BORDERED);
    });

    map.on("mouseleave", "current-city-layer", e => {
      leave.mouseLeave(e, popup);
    });

    map.on("mousemove", "neighborhood-layer", e => {
      move.mouseMove(allInOneData.data, e, "neighborhood", NEIGHBORHOOD_HIGHLIGHTED);
      this.handlePopup(e, "Neighborhood", e.features[0].properties.id.split('-')[3]);
      });

    map.on("click", "neighborhood-layer", e => {
      let id = e.features[0].properties.id.split("-");
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "neighborhood", e.features[0].properties.id,
        CURRENT_NEIGHBORHOOD);
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "city", id[0] + "-" + id[1] + "-" + id[2],
        CITY_BORDERED);
    });

    map.on("click", "current-neighborhood-layer", e => {
      let id = e.features[0].properties.id.split("-");
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "city", id[0] + "-" + id[1] + "-" + id[2],
        CITY_BORDERED);
      this.props.showCurrent(e.features[0].properties);
      // this.setState({ neighborhoodCard: { display: "block", name: id[3] } });
    });

    map.on("mouseleave", "neighborhood-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, NEIGHBORHOOD_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("mouseleave", "current-neighborhood-layer", e => {
      leave.mouseLeave(e, popup);
    });

    map.on("click", "points-layer", e => {
      const { mapObject } = this.state;
      let feature = mapObject.queryRenderedFeatures(e.point, { layers: ["points-layer"] });
      if (!feature.length) return;
      let { name, county, city, address, phone, type } = feature[0].properties;
      this.setState({ openCard: true, cardObject: { name, county, city, address, phone, type } });
    });

    map.on("mouseover", "houses-layer", e => {
      let { name } = e.features[0].properties;
      this.setState({
        openCard: true,
        cardObject: {name, county: "test", city: "test", address: "test", phone: "test", type: "house" }});
    });

    map.on("mouseleave", "houses-layer", e => {
      map.getCanvas().style.cursor = "";
      this.setState({ openCard: false });
    });
  }

  componentDidUpdate(prevProps){
    const {mapObject, city_neighbPolygons}= this.state;
    
    if(prevProps.scores!= this.props.scores){
      scores.setScores(mapObject, this.props.scores, city_neighbPolygons); }

    if(prevProps.filter.selectedFilter!= this.props.filter.selectedFilter){
      filters.setFilters(this.props.filter, mapObject, city_neighbPolygons);

    }
    
    if(this.props.flipped && prevProps.flipped!= this.props.flipped && Object.keys(this.props.flipped).length > 0){
      flipped.setFlipped(this.props.flipped, mapObject, city_neighbPolygons); }

    if(this.props.flipped && prevProps.flipped!= this.props.flipped &&
      Object.keys(this.props.flipped).length === 0 && this.props.flipped.constructor === Object){
      flipped.checkFlipped(mapObject, city_neighbPolygons); }

    if(prevProps.favourites!= this.props.favourites && this.props.favourites.length> prevProps.favourites.length){
      favourites.setFavourites(this.props.favourites, mapObject, city_neighbPolygons); }

    if(prevProps.favourites!= this.props.favourites && this.props.favourites.length<= prevProps.favourites.length){
      favourites.checkFavourites(this.props.favourites, mapObject, city_neighbPolygons); }
 
  }
  
  handlePopup = (e, key, id) => {
    const { popup } = this.state;
    popup.setLngLat(e.lngLat).setHTML("<img class='popup_img'></img><h4 class='popup_heading'>"+key+"</h4>: "+id).addTo(e.target);
    let popupTip= document.getElementsByClassName('mapboxgl-popup-tip');
    popupTip[0].style.display= "none";
    let popupContent= document.getElementsByClassName('mapboxgl-popup-content');
    popupContent[0].style.borderRadius= "15px";
    popupContent[0].style.padding= "8px 16px";
    let popupHeading= document.getElementsByClassName('popup_heading');
    popupHeading[0].style.color= "black";
    popupHeading[0].style.display= "inline";
    popup.addClassName(styles.popup);
  }

  showHouses = e => {
    const { scores } = this.state;
    HouseData.features.forEach(f => {
      let score = scores.filter(s => s.id == f.properties.id);
      f.properties = { ...f.properties, score: score[0].score };
    });
    showHouses.houses(e, HouseData.features);
  };

  getAllInOne = async () => {
    let json = await axios.get("http://www.nomadville.xyz/api/filter/static/All_In_One.json");
    return json;
  };

  
  handleNeighborhoodDetailClick = () => {
    this.setState({ neighborhoodCard: { display: "none" } });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.container} id="container">
          <div className={styles.map} id="map" />
          <div className={styles.card_div} id="card-div">
            <PoiCard
              details={this.state.cardObject}
              open={this.state.openCard}
              handleClose={this.handleClose}
            ></PoiCard>
          </div>
          <div
            style={{ display: this.state.neighborhoodCard.display }}
            className={styles.neighborhood_detail}
            onClick={this.handleNeighborhoodDetailClick}>
            <NeighborhoodDetail detail={this.state.neighborhoodCard}></NeighborhoodDetail>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    map: state.modules.map.map,
    scores: state.modules.neighborhood.matched,
    filter: state.modules.filter,
    favourites: state.modules.neighborhood.favorites,
    flipped: state.modules.neighborhood.flipped
  };
};

const mapActionsToProps = dispatch => ({
  loadStarted: () => dispatch(loadStarted()),
  LoadEnded: () => dispatch(LoadEnded()),
  showCurrent: (currentNeighb) => dispatch(showCurrent(currentNeighb))
});

export default connect(mapStateToProps, mapActionsToProps)(Map);