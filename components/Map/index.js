import React, { Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import styles from "./map.module.css";
import PoiCard from "./components/card/card";
import axios from "axios";
import {NEIGHBORHOOD, CITY_BORDERED, CURRENT_NEIGHBORHOOD} from "./polygon/layer/config";
import draw from "./polygon/draw";
import scores from "./services/Scores/scores";
import favourites from "./services/Favorites/favourites";
import flipped from "./services/Flipped/flipped";
import filters_update from "./services/Filters/filters_updated_version";
import { loadStarted, LoadEnded } from "../../services/actions/map.actions";
import {showCurrent, NeighborhoodOnMove, flipCard} from "../../services/actions/neighborhood.actions";
import mapEvents from "./Events/mapEvents";
import neighborhood from "./services/NeighborhoodService/neighborhood";
import "mapillary-js/dist/mapillary.min.css";
import {Viewer} from "mapillary-js";
import mapillarySrvc from "./services/Mapillary/mapillaryService";
import layerClick from "./polygon/events/click";
import basics from "./polygon/drawBasics";
import drawFilters from "./services/Filters/draw";
import homes from "./Homes/homes_updated";
import cityNeighbsPoints from "./data/cityNeighb_points.json";

import geocoding from "./services/Geocoding/geocoding";
import poi from "./POI/poi";
import fetching from "./services/fetching";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");


mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw";

class Map extends Component {
  state = {
    openCard: false,
    mapObject: "",
    image: "",
    cardObject: { name: "", county: "", city: "", adress: "", phone: "", type: "" },
    popup: new mapboxgl.Popup({ closeButton: false, offset: 20 }),
    city_neighbPolygons: "",
    neighborhoodCard: { display: "none", name: "" },
    cityProps: "",
    currentZoom: 5.3028243761363125,
    filterClicked: false,
    pitchSet: false
    };

  handleClose = () => {
    this.setState({ ...this.state, openCard: false });
  };

    
  // center: [-85.80603438080203, 26.471118388804214], // starting position [lng, lat]
      // zoom: 5.3028243761363125, // starting zoom
  getMapObject= () => {
    let map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/hamzahad/ckm6lqb38f5ev17ljx1v8jxgp", // style URL
      center: [-84.35197064842352, 26.87489125816589], // starting position [lng, lat]
      zoom: 5.5, // starting zoom
  
  
    });
   
    return map;
  }

  async componentDidMount(prevProps) {

    
    let map= this.getMapObject();

    
    // let clientId= "aXRBSzN4MGlhbnZEcDBXNk1LTkFicDo2YjZmZGQyZmZiZmJlMWFj";

    // const viewer = new Viewer({
    //   apiClient: clientId,
    //   container: "mly",
    //   imageKey: "ftYOspJRzEUZ63otES5R7O",
    //   component: { cover: false }
    // });

    let { popup} = this.state;
    
    let allInOneData = await this.getAllInOne();
    
    basics.drawBasics(map);
    draw.drawScores(allInOneData.data, map);
    draw.drawFlipped(map);
    draw.drawFavourite(map);
    drawFilters.drawFilterLayers(map);

    poi.displayPoi(map);

    homes.drawHomes(map);

    
    mapEvents.events(map, allInOneData.data, popup, this.props, cityNeighbsPoints);
    
    
    map.on("click", "neighborhood-layer", async (e) => {
      let neighb= fetching.getFeatures(cityNeighbsPoints.features, 'cityNeighb', e.features[0].properties.polygonId);

      let {properties}= neighb[0];

      if(properties.hasOwnProperty('flipped') && properties.Score>0){
        let {City, Neighborhood, Score, id}= properties;
        this.props.flippingCard({City, Neighborhood, Score, id});
      }

      let id = e.features[0].properties.polygonId.split("_");

      geocoding.getCenter(map, id[2]);
      
      if(id[2]== "Jacksonville") NEIGHBORHOOD.flyMaxZoom= 13.5;
      else NEIGHBORHOOD.flyMaxZoom= 14;

      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "neighborhood", e.features[0].properties.polygonId,
        CURRENT_NEIGHBORHOOD);
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "city", id[0] + "_" + id[1] + "_" + id[2],
        CITY_BORDERED);
      // let center= JSON.parse(e.features[0].properties.center);
      // let coordinates= center.geometry.coordinates;
    //   let lngLat= e.lngLat;
    //   let json= await mapillarySrvc.getImageKey(clientId, e.features[0]);
    //   let feature= json.data.features[0];
    //   if (feature){
    //     let key= feature.properties.key;
    //     viewer.moveToKey(key);
        
    //     let markerSource = {
    //       type: 'geojson',
    //       data: {
    //           type: 'Feature',
    //           geometry: {
    //               type: 'Point',
    //               coordinates: [lngLat.lng, lngLat.lat]
    //           }
    //           }};
    //           if(!map.getSource('markers')){
    //             map.addSource('markers', markerSource);
    //             map.loadImage(marker, (error, image) => {
    //               if (error) throw error;
    //               map.addImage("mapillary_marker", image);
    //               map.addLayer(
    //                 {
    //                   id: 'markers_layer',
    //                   type: 'symbol',
    //                   source: 'markers',
    //                   layout: {
    //                       'icon-image': "mapillary_marker",
    //                       'icon-size': 0.06
    //                   }
    //               });
    //             });
    //           }
        
    //       if(map.getSource('markers')){
    //       viewer.on(Viewer.nodechanged, function(node){
    //         let lngLat = [node.latLon.lon, node.latLon.lat];

    //         let data = {
    //           type: 'Feature',
    //           geometry: {
    //                      type: 'Point',
    //                      coordinates: lngLat}
    //         };

    //       map.getSource('markers').setData(data);
    //       map.flyTo({ center: lngLat });
    //       })
    //     }
    //  }  
    
    });

    map.on('zoom', e => {
      this.setState({currentZoom: e.target.getZoom()})
    })

    this.setState({ mapObject: map, city_neighbPolygons: cityNeighbsPoints });

  }

  componentDidUpdate(prevProps, prevState){
    const {mapObject, city_neighbPolygons, currentZoom, filterClicked}= this.state;
    
    if(prevProps.scores!= this.props.scores){
      scores.setScores(mapObject, this.props.scores, city_neighbPolygons); 
      let properties= neighborhood.getNeighborhoods(city_neighbPolygons);
      this.props.Neighb_CityMove(properties);

    }

    
    if(prevProps.filter.selectedFilter!= this.props.filter.selectedFilter || 
      (prevState.currentZoom!= currentZoom && filterClicked== true)){
      // filters.setFilters(this.props.filter, mapObject, city_neighbPolygons);
      this.setState({filterClicked: true });
      filters_update.setFilters(mapObject, currentZoom, this.props.filter);
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
  

  getAllInOne = async () => {
    let json = await axios.get("http://www.nomadville.xyz/api/filter/static/All_In_One.json");
    return json;
  };

  setPrice= () => {
    const {mapObject}= this.state;
    mapObject.setLayoutProperty("homes_layer", "visibility", "none");
    mapObject.setLayoutProperty("homes_filter_layer", "visibility", "visible");
    mapObject.setLayoutProperty("homes_filter_layer", "text-field", ["concat", ["get", "listPrice"], " $"]);
  }

  setBathroom= () => {
    const {mapObject}= this.state;
    mapObject.setLayoutProperty("homes_filter_layer", "text-field", ["get", "bathroomsTotal"]);
  }

  withoutFilter= () => {
    const {mapObject}= this.state;
    mapObject.setLayoutProperty("homes_layer", "visibility", "visible");
    mapObject.setLayoutProperty("homes_filter_layer", "visibility", "none");
  }

  setPitch= ()=> {
    let {mapObject, pitchSet}= this.state;
    if(pitchSet== false) {
       mapObject.setPitch(60)
       }
    else{
       mapObject.setPitch(0)
       }
       this.setState({pitchSet: !pitchSet})
    
  }
  
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
          <div className={styles.viewer} id="mly"/>
          <div className= {styles.homeFilters}>
            <button onClick={this.setPrice}>Set price</button>
            <button onClick={this.setBathroom}>Set bathroom</button>
            <button onClick={this.withoutFilter}>without filter</button>
          </div>
          <div className={styles.pitch}>
            <button onClick={this.setPitch}>3D</button>
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
  Neighb_CityMove: (neighb_city) => dispatch(NeighborhoodOnMove(neighb_city)),
  flippingCard: (neighborhood) => dispatch(flipCard(neighborhood))
});

export default connect(mapStateToProps, mapActionsToProps)(Map);