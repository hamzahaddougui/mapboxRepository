import React, { Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { connect } from "react-redux";
import styles from "./map.module.css";
import HouseData from "./data/houses.json";
import PoiCard from "./components/card/card";
import axios from "axios";
import {REGION, COUNTY, CITY, NEIGHBORHOOD, CITY_BORDERED, CURRENT_NEIGHBORHOOD} from "./polygon/layer/config";
import draw from "./polygon/draw";
import showPoi from "./poi";
import showHouses from "./houses";
import scores from "./services/scores";
import favourites from "./services/favourites";
import flipped from "./services/flipped";
import filters from "./services/Filters/filters";
import filters_update from "./services/Filters/filters_updated_version";
import { loadStarted, LoadEnded } from "../../services/actions/map.actions";
import {showCurrent, NeighborhoodOnMove, flipCard} from "../../services/actions/neighborhood.actions";
import mapEvents from "./mapEvents";
import neighborhood from "./services/neighborhood";
import "mapillary-js/dist/mapillary.min.css";
import {Viewer} from "mapillary-js";
import mapillarySrvc from "./services/mapillaryService";
import layerClick from "./polygon/polygonEvents/click";
import basics from "./polygon/draw_basic_polygons";
import drawFilters from "./services/Filters/draw";
// import tileDecorator from '@mapbox/tile-decorator';
// const VectorTile= require('ol/source/VectorTile');
// import VectorTile from 'ol/source/VectorTile';
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const marker = "/map/marker_one.png";

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
    cityProps: "",
    currentZoom: 5.3028243761363125,
    filterClicked: false
    };

  handleClose = () => {
    this.setState({ ...this.state, openCard: false });
  };

  getMapObject= () => {
    let map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/hamzahad/ckm6lqb38f5ev17ljx1v8jxgp", // style URL
      center: [-85.80603438080203, 26.471118388804214], // starting position [lng, lat]
      zoom: 5.3028243761363125, // starting zoom
    });
   
    return map;
  }

  async componentDidMount(prevProps) {
    let map= this.getMapObject();

    let clientId= "aXRBSzN4MGlhbnZEcDBXNk1LTkFicDo2YjZmZGQyZmZiZmJlMWFj";

    const viewer = new Viewer({
      apiClient: clientId,
      container: "mly",
      imageKey: "ftYOspJRzEUZ63otES5R7O",
      component: { cover: false }
    });

    let { popup} = this.state;
    let allInOneData = await this.getAllInOne();
    
    basics.drawBasics(map, REGION);
    basics.drawBasics(map, COUNTY);
    basics.drawBasics(map, CITY);
    basics.drawBasics(map, NEIGHBORHOOD);
    drawFilters.drawFilterLayers(map);
    // draw.drawScores(map, "city_score_marker", "city_score_layer", "city");
    // draw.drawScores(map, "neighborhood_score_marker", "neighborhood_score_layer", "neighborhood");
    // draw.drawFlipped(map);
    // draw.drawFavourite(map);

    let vectorTile= (await import('ol/source/VectorTile')).default;
    let mvtFormat= (await import('ol/format/MVT')).default;
    let test= new vectorTile({
      url: 'mapbox://hamzahad.a0j93o6v',
      format: new mvtFormat(),
      tileLoadFunction: async function(tile, url){
        const response= await fetch(url);
        const data= await response.json();
        console.log(data);
      }
    })

    console.log(test)

    let features= allInOneData.data.features.filter(f => f.properties.hasOwnProperty('City') || f.properties.hasOwnProperty('Neighborhood'));
    let geojson = {
      type: "FeatureCollection",
      features
    };
   
    
    // map.on("load", e => {
    //   // showPoi.showPoi(e);
    //   // this.showHouses(e);
    // });

    mapEvents.events(map, allInOneData.data, popup, this.props, geojson);  
    
    map.on("click", "neighborhood-layer", async (e) => {
      let neighb= e.features[0].properties;
      if(neighb.flipped){
        this.props.flippingCard(neighb);

      }
      let id = e.features[0].properties.polygonId.split("_");
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "neighborhood", e.features[0].properties.polygonId,
        CURRENT_NEIGHBORHOOD);
      layerClick.click(map, allInOneData.data, e, NEIGHBORHOOD, "city", id[0] + "_" + id[1] + "_" + id[2],
        CITY_BORDERED);
      // let center= JSON.parse(e.features[0].properties.center);
      // let coordinates= center.geometry.coordinates;
      let lngLat= e.lngLat;
      let json= await mapillarySrvc.getImageKey(clientId, e.features[0]);
      let feature= json.data.features[0];
      if (feature){
        let key= feature.properties.key;
        viewer.moveToKey(key);
        
        let markerSource = {
          type: 'geojson',
          data: {
              type: 'Feature',
              geometry: {
                  type: 'Point',
                  coordinates: [lngLat.lng, lngLat.lat]
              }
              }};
              if(!map.getSource('markers')){
                map.addSource('markers', markerSource);
                map.loadImage(marker, (error, image) => {
                  if (error) throw error;
                  map.addImage("mapillary_marker", image);
                  map.addLayer(
                    {
                      id: 'markers_layer',
                      type: 'symbol',
                      source: 'markers',
                      layout: {
                          'icon-image': "mapillary_marker",
                          'icon-size': 0.06
                      }
                  });
                });
              }
        
          if(map.getSource('markers')){
          viewer.on(Viewer.nodechanged, function(node){
            let lngLat = [node.latLon.lon, node.latLon.lat];

            let data = {
              type: 'Feature',
              geometry: {
                         type: 'Point',
                         coordinates: lngLat}
            };

          map.getSource('markers').setData(data);
          map.flyTo({ center: lngLat });
          })
        }
     }  
    });

    map.on('zoom', e => {
      this.setState({currentZoom: e.target.getZoom()})
    })

    this.setState({ mapObject: map, city_neighbPolygons: geojson });

  }

  componentDidUpdate(prevProps, prevState){
    const {mapObject, city_neighbPolygons, currentZoom, filterClicked}= this.state;
    
    // if(prevProps.scores!= this.props.scores){
    //   scores.setScores(mapObject, this.props.scores, city_neighbPolygons); 
    //   let properties= neighborhood.getNeighborhoods(city_neighbPolygons);
    //   this.props.Neighb_CityMove(properties);

    // }
    
    
    if(prevProps.filter.selectedFilter!= this.props.filter.selectedFilter || 
      (prevState.currentZoom!= currentZoom && filterClicked== true)){
      // filters.setFilters(this.props.filter, mapObject, city_neighbPolygons);
      filters_update.setFilters(mapObject, currentZoom, this.props.filter);
      this.setState({filterClicked: true});
    }
    
    // if(this.props.flipped && prevProps.flipped!= this.props.flipped && Object.keys(this.props.flipped).length > 0){
    //   flipped.setFlipped(this.props.flipped, mapObject, city_neighbPolygons); }

    // if(this.props.flipped && prevProps.flipped!= this.props.flipped &&
    //   Object.keys(this.props.flipped).length === 0 && this.props.flipped.constructor === Object){
    //   flipped.checkFlipped(mapObject, city_neighbPolygons); }

    // if(prevProps.favourites!= this.props.favourites && this.props.favourites.length> prevProps.favourites.length){
    //   favourites.setFavourites(this.props.favourites, mapObject, city_neighbPolygons); }

    // if(prevProps.favourites!= this.props.favourites && this.props.favourites.length<= prevProps.favourites.length){
    //   favourites.checkFavourites(this.props.favourites, mapObject, city_neighbPolygons); }
 
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

  loadVectorUrl= async () => {
    let json = await axios.get("mapbox://hamzahad.3yut0uak");
    return json;
  }

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
          <div className={styles.viewer} id="mly"/>
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