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
import fetching from "./services/fetching";
import { loadStarted, LoadEnded } from "../../services/actions/map.actions";
import {showCurrent, NeighborhoodOnMove} from "../../services/actions/neighborhood.actions";
import flyTo from "./flyingTo";
import fitBounds from "./fitBounds";
import Loader from "./components/loader/loader";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw";

class Map extends Component {
  state = {
    openCard: false,
    // scores: [
    //   { id: "house 5", score: 100 },
    //   { id: "house 4", score: 80 },
    //   { id: "house 3", score: 60 },
    //   { id: "house 2", score: 40 },
    //   { id: "house 1", score: 20 },
    // ],
    mapObject: "",
    image: "",
    cardObject: { name: "", county: "", city: "", adress: "", phone: "", type: "" },
    popup: new mapboxgl.Popup({ closeButton: false, offset: 20 }),
    city_neighbPolygons: "",
    neighborhoodCard: { display: "none", name: "" },
    loaderState: "none",
    cityProps: ""
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

    draw.drawPolygon(map, allInOneData.data, REGION);
    draw.drawPolygon(map, allInOneData.data, COUNTY);
    draw.drawPolygon(map, allInOneData.data, CITY);
    draw.drawPolygon(map, allInOneData.data, NEIGHBORHOOD);
    draw.drawScores(map, "city_score_marker", "city_score_layer", "city");
    draw.drawScores(map, "neighborhood_score_marker", "neighborhood_score_layer", "neighborhood");
    draw.drawFlipped(map);
    draw.drawFavourite(map);

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

      

    map.on("mousemove", "region-layer", e => {
      move.mouseMove(allInOneData.data, e, "region", REGION_HIGHLIGHTED);
      this.handlePopup(e, "Region", e.features[0].properties.polygonId);
      
    });

    map.on("mouseleave", "region-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, REGION_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "region-highlighted-layer", e => {
      layerClick.click(map, allInOneData.data, e, REGION_HIGHLIGHTED, "region", e.features[0].properties.polygonId,
        REGION_CLICKED)});

    map.on("mousemove", "county-layer", e => {
      move.mouseMove(allInOneData.data, e, "county", COUNTY_HIGHLIGHTED);
      this.handlePopup(e, "County", e.features[0].properties.polygonId.split('_')[1]);
      });

    map.on("click", "county-layer", e => {
      let result = e.features[0].properties.polygonId.split("_");
      layerClick.click(map, allInOneData.data, e, COUNTY, "region", result[0], REGION_CLICKED);
      layerClick.click(map, allInOneData.data, e, COUNTY_HIGHLIGHTED, "county", e.features[0].properties.polygonId,
        COUNTY_CLICKED)});

    map.on("mouseleave", "county-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, COUNTY_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "county-clicked-layer", e => {
      layerClick.click(map, allInOneData.data, e, COUNTY_CLICKED, "county", e.features[0].properties.polygonId,
        COUNTY_BORDERED);
      });

    map.on("mousemove", "city-layer", e => {
      move.mouseMove(allInOneData.data, e, "city", CITY_OTHER);
      this.handlePopup(e, "City", e.features[0].properties.polygonId.split('_')[2]);
      });

    map.on("mouseleave", "city-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, CITY_OTHER, []);
      leave.mouseLeave(e, popup);
    });

    // map.on("moveend", "city-layer", e => {
    //   let neighbProps= [];
    //   let neighbs= fetching.getFeatures(allInOneData.data.features, "neighborhood", e.features[0].properties.polygonId);
    //   neighbs.forEach(f => neighbProps.push(f.properties));
    //   if(neighbs[0] && neighbs[0].properties.hasOwnProperty('Score') && JSON.stringify(neighbProps)!= JSON.stringify(this.props.neighborhoods))
    //     this.props.Neighb_CityMove(neighbProps);
    // })

    map.on("click", "city-other-layer", e => {
      let id = e.features[0].properties.polygonId.split("_");
      layerClick.click(map, allInOneData.data, e, CITY_OTHER, "city", e.features[0].properties.polygonId,
        CURRENT_CITY);
      layerClick.click(map, allInOneData.data, e, CITY_OTHER, "county", id[0] + "_" + id[1], COUNTY_BORDERED);
    });

    map.on("click", "current-city-layer", e => {
      layerClick.click(map, allInOneData.data, e, CURRENT_CITY_CLICKED, "city", e.features[0].properties.polygonId,
        CITY_BORDERED);
    });

    map.on("mouseleave", "current-city-layer", e => {
      leave.mouseLeave(e, popup);
    });

    map.on("mousemove", "neighborhood-layer", e => {
      move.mouseMove(allInOneData.data, e, "neighborhood", NEIGHBORHOOD_HIGHLIGHTED);
      this.handlePopup(e, "Neighborhood", e.features[0].properties.polygonId.split('_')[3]);
      });

    // map.on("moveend", "neighborhood-layer", e => {
    //     let neighbProps= [];
    //     let id= e.features[0].properties.polygonId.split('_');
    //     let cityId= id[0]+'_'+id[1]+'_'+id[2];
    //     let neighbs= fetching.getFeatures(allInOneData.data.features, 'neighborhood', cityId);
    //     neighbs.forEach(n => neighbProps.push(n.properties));
    //     neighbProps.sort((a, b)=> b.Score - a.Score);
    //     if(neighbProps[0] && neighbProps[0].hasOwnProperty('Score') && JSON.stringify(neighbProps)!= JSON.stringify(this.props.neighborhoods))
    //       this.props.Neighb_CityMove(neighbProps);
    // })

    map.on("click", "neighborhood-layer", e => {
      let id = e.features[0].properties.polygonId.split("_");
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "neighborhood", e.features[0].properties.polygonId,
        CURRENT_NEIGHBORHOOD);
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "city", id[0] + "_" + id[1] + "_" + id[2],
        CITY_BORDERED);
    });

    map.on("click", "current-neighborhood-layer", e => {
      let id = e.features[0].properties.polygonId.split("_");
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "city", id[0] + "_" + id[1] + "_" + id[2],
        CITY_BORDERED);
      this.props.showCurrent(e.features[0].properties);
      });

    map.on("mouseleave", "neighborhood-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, NEIGHBORHOOD_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("mouseleave", "current-neighborhood-layer", e => {
      leave.mouseLeave(e, popup);
    });

    map.on("zoomend", "city_score_layer", e =>{
      let cities= [], cityProps= [];
      if(e.target.getZoom()>= 7){
        cities= fetching.getFeatures(allInOneData.data.features, "city");
        cities= cities.filter(c => c.properties.Score>= 60 && c.properties.Score< 80);
      }
      if(e.target.getZoom()>= 9){
        cities= fetching.getFeatures(allInOneData.data.features, "city");
        cities= cities.filter(c => c.properties.Score>= 40 && c.properties.Score< 60);
      }
      if(e.target.getZoom()>= 12){
        cities= fetching.getFeatures(allInOneData.data.features, "city");
        cities= cities.filter(c => c.properties.Score< 40);
      }
      cities.forEach(c => cityProps.push(c.properties));
      this.setState({cityProps});
    })

    map.on("zoomend", "neighborhood_score_layer", e =>{
      let {cityProps}= this.state;
      let neighbs= [], neighbProps= [];
      if(e.target.getZoom()>= 7){
        neighbs= fetching.getFeatures(allInOneData.data.features, "neighborhood");
        neighbs= neighbs.filter(c => c.properties.Score>= 60 && c.properties.Score< 80);
      }
      if(e.target.getZoom()>= 9){
        neighbs= fetching.getFeatures(allInOneData.data.features, "neighborhood");
        neighbs= neighbs.filter(c => c.properties.Score>= 40 && c.properties.Score< 60);
      }
      if(e.target.getZoom()>= 12){
        neighbs= fetching.getFeatures(allInOneData.data.features, "neighborhood");
        neighbs= neighbs.filter(c => c.properties.Score< 40);
      }
      neighbs.forEach(c => neighbProps.push(c.properties));
      cityProps.forEach(c => neighbProps.push(c));
      neighbProps.sort((a, b)=> b.Score - a.Score);
      if(neighbProps[0] && JSON.stringify(neighbProps)!= JSON.stringify(this.props.neighborhoods))
        this.props.Neighb_CityMove(neighbProps);
    })

    this.handleFlipped_Favourite(map, "city_flipped_layer");
    this.handleFlipped_Favourite(map, "city_favourite_layer");
    this.handleFlipped_Favourite(map, "neighborhood_flipped_layer");
    this.handleFlipped_Favourite(map, "neighborhood_favourite_layer");

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

  componentDidUpdate(prevProps, prevState){
    const {mapObject, city_neighbPolygons, polygonsScore, loaderState, neighborhoods}= this.state;
    
    if(prevProps.scores!= this.props.scores){
      scores.setScores(mapObject, this.props.scores, city_neighbPolygons); 
      this.getNeighborhoods();

    }
    
    if(prevProps.filter.selectedFilter!= this.props.filter.selectedFilter){
      // this.setState({loaderState: 'block'});
      filters.setFilters(this.props.filter, mapObject, city_neighbPolygons);
    }

    // if(prevState.loaderState!= loaderState){
    //     console.log("loader state changes");
    //     this.setState({loaderState: 'none'});
    //   }
    
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
    popup.setLngLat(e.lngLat).setHTML("<span class='popup_heading'>"+key+"</span> "+id).addTo(e.target);
    let popupTip= document.getElementsByClassName('mapboxgl-popup-tip');
    popupTip[0].style.display= "none";
    let popupContent= document.getElementsByClassName('mapboxgl-popup-content');
    popupContent[0].style.borderRadius= "14px";
    popupContent[0].style.padding= "6px 11px 5px 12px";
    popupContent[0].style.backgroundColor= "#ffffff";
    popupContent[0].style.boxShadow= "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
    let popupHeading= document.getElementsByClassName('popup_heading');
    popupHeading[0].style.color= "#4346f7";
    popupHeading[0].style.display= "block";
    popupHeading[0].style.font= "normal 600 10px Poppins";
    
    popup.addClassName(styles.popup);
  }

  getNeighborhoods= ()=> {
   let {city_neighbPolygons}= this.state;
   let city_neighbProps= [];
   let cities= fetching.getFeatures(city_neighbPolygons.features, "city");
   let citiesFiltered= cities.filter(c => c.properties.Score>= 80);
   citiesFiltered.forEach(c => city_neighbProps.push(c.properties));
   let neighbs= fetching.getFeatures(city_neighbPolygons.features, "neighborhood");
   let neighbsFiltered= neighbs.filter(n => n.properties.Score>= 80);
   neighbsFiltered.forEach(n => city_neighbProps.push(n.properties));
   city_neighbProps.sort((a, b)=> b.Score - a.Score);
   this.props.Neighb_CityMove(city_neighbProps);
     
  }

  handleFlipped_Favourite= (map, layerName)=> {
    map.on("click", layerName, e => {
      if(layerName== 'city_flipped_layer' || layerName== 'city_favourite_layer'){
        flyTo.handleFlyTo(map, '', 11.9, 8000, 0.1, '', JSON.parse(e.features[0].properties.center).geometry.coordinates);
       }
      if(layerName== 'neighborhood_flipped_layer' || layerName== 'neighborhood_favourite_layer'){
        fitBounds.fitBounds(map, e.features[0], 12000, 0.1, 15);
      }
    })}

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

  render() {
    const {loaderState}= this.state;
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
          <div className={styles.loader} style={{display: loaderState}}>
            <Loader></Loader>
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
    flipped: state.modules.neighborhood.flipped,
    neighborhoods: state.modules.neighborhood.NbList
  };
};

const mapActionsToProps = dispatch => ({
  loadStarted: () => dispatch(loadStarted()),
  LoadEnded: () => dispatch(LoadEnded()),
  showCurrent: (currentNeighb) => dispatch(showCurrent(currentNeighb)),
  Neighb_CityMove: (neighb_city) => dispatch(NeighborhoodOnMove(neighb_city))
});

export default connect(mapStateToProps, mapActionsToProps)(Map);