import React, { Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import styles from "./map.module.css";
import HouseData from "./data/houses.json";
import PoiCard from "./components/card/card";
import axios from "axios";
import {REGION, COUNTY, CITY, NEIGHBORHOOD} from "./polygon/layer/config";
import draw from "./polygon/draw";
import showPoi from "./poi";
import showHouses from "./houses";
import scores from "./services/scores";
import favourites from "./services/favourites";
import flipped from "./services/flipped";
import filters from "./services/filters";
import { loadStarted, LoadEnded } from "../../services/actions/map.actions";
import {showCurrent, NeighborhoodOnMove} from "../../services/actions/neighborhood.actions";
import Loader from "./components/loader/loader";
import mapEvents from "./mapEvents";
import neighborhood from "./services/neighborhood";
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
    cityProps: "",
    neighborhoods: ""
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
    let { popup} = this.state;
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

    let {city_neighbPolygons}= this.state;
    mapEvents.events(map, allInOneData.data, popup, this.props, city_neighbPolygons);  

    
  }

  componentDidUpdate(prevProps, prevState){
    const {mapObject, city_neighbPolygons, polygonsScore, loaderState, neighborhoods}= this.state;
    
    if(prevProps.scores!= this.props.scores){
      scores.setScores(mapObject, this.props.scores, city_neighbPolygons); 
      let properties= neighborhood.getNeighborhoods(city_neighbPolygons);
      this.props.Neighb_CityMove(properties);

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