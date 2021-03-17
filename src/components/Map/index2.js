import React, { Component } from "react";

import { connect } from "react-redux";
import styles from "./map.module.css";
import POI from "./data/POI.json";
import HouseData from "./data/houses.json";
import PoiCard from "./components/card/card";
import service from "./services/fetching";
import layerShape from "./services/layerShape";
import axios from "axios";

import { createPolygons, drawPolygons } from "./services/polygonsDrawer";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw";

const image = "/map/schools.png";
const marker = "/map/marker.png";

class BaseMap extends Component {
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
    popup: new mapboxgl.Popup({ closeButton: false }),
    polygons: "",
  };

  handleClose = () => {
    this.setState({ ...this.state, openCard: false });
  };

  async componentDidMount() {
    let map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/hamzahad/ckm6lqb38f5ev17ljx1v8jxgp", // style URL
      center: [-83.12740247113558, 29.26252966640054], // starting position [lng, lat]
      zoom: 5, // starting zoom
    });

    let polygonsData = await this.getAllInOne();
    this.setState({ mapObject: map, polygons: polygonsData.data });
    let features = [];
    map.on("load", e => {
      console.log("Event", e.target);
      createPolygons(polygonsData, map, "region", "#E2E3F0", 0.2, 5, 7);
      createPolygons(polygonsData, map, "county", "#E2E3F0", 0.2, 7, 9);
      createPolygons(polygonsData, map, "city", "#E2E3F0", 0.2, 9, 11);
      createPolygons(polygonsData, map, "neighborhood", "#E2E3F0", 0.2, 11, 15);
      this.showHouses();
    });

    map.on("mousemove", "region-layer", e => {
      features = [];
      features = drawPolygons(
        service.getFeatures(polygonsData.data.features, "region", e.features[0].properties.id),
      );
      console.log(features);
      createPolygons(polygonsData, map, "region-highlighted", "#858585", 0.4, 5, 7, features);
      // map.moveLayer("region-highlighted-layer", "scores-layer");
    });

    map.on("mouseleave", "region-layer", e => {
      createPolygons(polygonsData, map, "region-highlighted", "#858585", 0.4, 5, 7, []);
    });

    map.on("click", "region-highlighted-layer", e => {
      this.handleMapboxLayerClick(
        map,
        e,
        { flyToMinZoom: 5, flyToMaxZoom: 7, flyToDuration: 10000, flyToSpeed: 0.4 },
        { sourceLayer: "region", id: e.features[0].properties.id },
        {
          targetLayerName: "region-clicked",
          targetLayerColor: "#858585",
          targetLayerOpacity: 0,
          targetLayerMinZoom: 7,
          targetLayerMaxZoom: 9,
        },
      );
      // map.moveLayer("region-clicked-layer", "scores-layer");
    });
    this.handleMapboxMouseEventPolygon(map, "mousemove", "region-layer");
    this.handleMapboxMouseEventPolygon(map, "mouseleave", "region-layer");

    map.on("mousemove", "county-layer", e => {
      features = [];
      features = drawPolygons(
        service.getFeatures(polygonsData.data.features, "county", e.features[0].properties.id),
      );
      createPolygons(polygonsData, map, "county-highlighted", "#858585", 0.4, 7, 9, features);
      this.handleMapboxPopup(e).mapbox.addTo(map);
      // map.moveLayer("county-highlighted-layer", "scores-layer");
    });

    map.on("click", "county-layer", e => {
      let result = e.features[0].properties.id.split("-");
      this.handleMapboxLayerClick(
        map,
        e,
        { flyToMinZoom: 7, flyToMaxZoom: 9, flyToDuration: 10000, flyToSpeed: 0.4 },
        { sourceLayer: "region", id: result[0] },
        {
          targetLayerName: "region-clicked",
          targetLayerColor: "#858585",
          targetLayerOpacity: 0,
          targetLayerMinZoom: 7,
          targetLayerMaxZoom: 9,
        },
      );
      // map.moveLayer("region-clicked-layer", "scores-layer");
    });

    map.on("mouseleave", "county-layer", e => {
      createPolygons(polygonsData, map, "county-other", "#858585", 0.1, 7, 9, []);
    });

    this.handleMapboxMouseEventPolygon(map, "mouseleave", "county-layer");

    map.on("click", "county-highlighted-layer", e => {
      this.handleMapboxLayerClick(
        map,
        e,
        { flyToMinZoom: 7, flyToMaxZoom: 7, flyToDuration: 10000, flyToSpeed: 0.2 },
        { sourceLayer: "county", id: e.features[0].properties.id },
        {
          targetLayerName: "county-clicked",
          targetLayerColor: "#858585",
          targetLayerOpacity: 0.4,
          targetLayerMinZoom: 7,
          targetLayerMaxZoom: 9,
        },
      );
      // map.moveLayer("county-clicked-layer", "scores-layer");
    });

    map.on("click", "county-clicked-layer", e => {
      this.handleMapboxLayerClick(
        map,
        e,
        { flyToMinZoom: 7, flyToMaxZoom: 9, flyToDuration: 10000, flyToSpeed: 0.2 },
        { sourceLayer: "city", id: e.features[0].properties.id },
        {
          targetLayerName: "current-city",
          targetLayerColor: "#858585",
          targetLayerOpacity: 0.4,
          targetLayerMinZoom: 9,
          targetLayerMaxZoom: 11,
        },
      );
      // map.moveLayer("current-city-layer", "scores-layer");
    });

    map.on("mouseover", "city-layer", e => {
      features = [];
      features = drawPolygons(
        service.getFeatures(polygonsData.data.features, "city", e.features[0].properties.id),
      );
      createPolygons(polygonsData, map, "city-other", "#858585", 0.4, 9, 11, features);
      // map.moveLayer("city-other-layer", "scores-layer");
    });

    map.on("mouseleave", "city-layer", e => {
      createPolygons(polygonsData, map, "city-other", "#858585", 0.4, 9, 11, []);
    });

    this.handleMapboxMouseEventPolygon(map, "mousemove", "city-layer");
    this.handleMapboxMouseEventPolygon(map, "mouseleave", "city-layer");

    map.on("click", "city-other-layer", e => {
      this.handleMapboxLayerClick(
        map,
        e,
        { flyToMinZoom: 8, flyToMaxZoom: 9, flyToDuration: 10000, flyToSpeed: 0.4 },
        { sourceLayer: "city", id: e.features[0].properties.id },
        {
          targetLayerName: "current-city",
          targetLayerColor: "#858585",
          targetLayerOpacity: 0.6,
          targetLayerMinZoom: 9,
          targetLayerMaxZoom: 11,
        },
      );
      // map.moveLayer("current-city-layer", "scores-layer");
    });

    map.on("click", "current-city-layer", e => {
      this.handleMapboxLayerClick(
        map,
        e,
        { flyToMinZoom: 11, flyToMaxZoom: 12, flyToDuration: 10000, flyToSpeed: 0.4 },
        { sourceLayer: "neighborhood", id: e.features[0].properties.id },
        {
          targetLayerName: "current-neighborhood",
          targetLayerColor: "#858585",
          targetLayerOpacity: 0.4,
          targetLayerMinZoom: 11,
          targetLayerMaxZoom: 15,
        },
      );
      // map.moveLayer("current-neighborhood-layer", "scores-layer");
    });

    this.handleMapboxMouseEventPolygon(map, "mousemove", "current-city-layer");
    this.handleMapboxMouseEventPolygon(map, "mouseleave", "current-city-layer");

    map.on("mousemove", "neighborhood-layer", e => {
      features = drawPolygons(
        service.getFeatures(
          polygonsData.data.features,
          "neighborhood",
          e.features[0].properties.id,
        ),
      );
      createPolygons(
        polygonsData,
        map,
        "neighborhood-highlighted",
        "#858585",
        0.4,
        11,
        15,
        features,
      );
      // map.moveLayer("neighborhood-highlighted-layer", "scores-layer");
    });

    map.on("click", "neighborhood-layer", e => {
      this.handleMapboxLayerClick(
        map,
        e,
        { flyToMinZoom: 11, flyToMaxZoom: 12, flyToDuration: 10000, flyToSpeed: 0.4 },
        { sourceLayer: "neighborhood", id: e.features[0].properties.id },
        {
          targetLayerName: "current-neighborhood",
          targetLayerColor: "#858585",
          targetLayerOpacity: 0.2,
          targetLayerMinZoom: 11,
          targetLayerMaxZoom: 15,
        },
      );
      // map.moveLayer("current-neighborhood-layer", "scores-layer");
    });

    this.handleMapboxMouseEventPolygon(map, "mousemove", "neighborhood-layer");
    this.handleMapboxMouseEventPolygon(map, "mouseleave", "neighborhood-layer");
    this.handleMapboxMouseEventPolygon(map, "mousemove", "current-neighborhood-layer");
    this.handleMapboxMouseEventPolygon(map, "mouseleave", "current-neighborhood-layer");

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
        cardObject: {
          name,
          county: "test",
          city: "test",
          address: "test",
          phone: "test",
          type: "house",
        },
      });
    });

    map.on("mouseleave", "houses-layer", e => {
      map.getCanvas().style.cursor = "";
      this.setState({ openCard: false });
    });
  }

  handleMapboxFlyTo = (map, e, minZoom, maxZoom, duration, speed) => {
    map.flyTo({
      center: e.lngLat,
      minZoom,
      maxDuration: duration,
      zoom: maxZoom,
      curve: 1,
      easing: function (t) {
        return t;
      },
      speed,
      essential: true,
    });
  };

  handleMapboxPopup = e => {
    const { popup } = this.state;
    return {
      mapbox: popup.setLngLat(e.lngLat).setHTML(e.features[0].properties.id),
      id: e.features[0].properties.id,
    };
  };

  handleMapboxMouseEventPolygon = (map, mouseEvent, layerName) => {
    let { popup } = this.state;
    switch (mouseEvent) {
      case "mousemove":
        map.on(mouseEvent, layerName, e => {
          map.getCanvas().style.cursor = "pointer";
          popup.setLngLat(e.lngLat).setHTML(e.features[0].properties.id).addTo(map);
        });
        break;
      case "mouseleave":
        map.on(mouseEvent, layerName, e => {
          map.getCanvas().style.cursor = "";
          popup.remove();
        });

      default:
        break;
    }
  };

  handleMapboxLayerClick = async (
    map,
    e,
    { flyToMinZoom = null, flyToMaxZoom = null, flyToDuration = null, flyToSpeed = null },
    { sourceLayer, id },
    {
      targetLayerName,
      targetLayerColor,
      targetLayerOpacity,
      targetLayerMinZoom,
      targetLayerMaxZoom,
    },
  ) => {
    this.handleMapboxFlyTo(map, e, flyToMinZoom, flyToMaxZoom, flyToDuration, flyToSpeed);
    let features = [];
    let polygons = await this.getAllInOne();
    features = drawPolygons(service.getFeatures(polygons.data.features, sourceLayer, id));
    createPolygons(
      polygonsData,
      map,
      targetLayerName,
      targetLayerColor,
      targetLayerOpacity,
      targetLayerMinZoom,
      targetLayerMaxZoom,
      features,
    );
  };

  showPoiMarkers = () => {
    const { mapObject } = this.state;
    // let test= PoiService.filterPOIs(POI.features, 'Speedway');
    POI.features.forEach(f => f.properties.subCategory.replace(/\//g, "_"));
    let subCategories = [];
    POI.features.forEach(f => {
      if (!subCategories.includes(f.properties.subCategory))
        subCategories.push(f.properties.subCategory);
    });
    let subCategory = "Speedway";
    let features = POI.features.filter(f => f.properties.subCategory == "Speedway");
    const image = "/map/POI/Speed&way.png";
    mapObject.loadImage(image.default, (error, image) => {
      if (error) throw error;

      mapObject.addImage("custom-marker", image);

      mapObject.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: features,
        },
      });
      mapObject.addLayer({
        id: "points-layer",
        type: "symbol",
        source: "points",
        paint: {
          "icon-opacity": {
            stops: [
              [11, 0],
              [12, 1],
            ],
          },
          "text-opacity": {
            stops: [
              [11, 0],
              [12, 1],
            ],
          },
        },
        layout: {
          "icon-image": "custom-marker",
          "icon-size": 0.02,
          "text-field": ["get", "Name"],
          "text-size": 8,
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.5],
          "text-anchor": "top",
        },
      });
    });
  };

  showHouses = () => {
    const { mapObject, scores } = this.state;
    HouseData.features.forEach(f => {
      let score = scores.filter(s => s.id == f.properties.id);
      f.properties = { ...f.properties, score: score[0].score };
    });

    mapObject.addSource("houses", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: HouseData.features,
      },
    });

    let circleLayer = layerShape.circleLayer(
      "houses-layer",
      "houses",
      [
        "case",
        ["==", ["get", "score"], 20],
        "#cb3e0b",
        ["==", ["get", "score"], 40],
        "#de0d0d",
        ["==", ["get", "score"], 60],
        "#d06139",
        ["==", ["get", "score"], 80],
        "#319220",
        ["==", ["get", "score"], 100],
        "#15450d",

        "black",
      ],
      [
        "case",
        ["==", ["get", "score"], 20],
        3,
        ["==", ["get", "score"], 40],
        4,
        ["==", ["get", "score"], 60],
        5,
        ["==", ["get", "score"], 80],
        6,
        ["==", ["get", "score"], 100],
        7,
        2,
      ],
      [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        ["case", ["==", ["get", "score"], 100], 1, 0],
        7,
        ["case", ["==", ["get", "score"], 80], 1, ["==", ["get", "score"], 100], 1, 0],
        8,
        [
          "case",
          ["==", ["get", "score"], 60],
          1,
          ["==", ["get", "score"], 80],
          1,
          ["==", ["get", "score"], 100],
          1,
          0,
        ],
        9,
        [
          "case",
          ["==", ["get", "score"], 40],
          1,
          ["==", ["get", "score"], 60],
          1,
          ["==", ["get", "score"], 80],
          1,
          ["==", ["get", "score"], 100],
          1,
          0,
        ],
        10,
        [
          "case",
          ["==", ["get", "score"], 20],
          1,
          ["==", ["get", "score"], 40],
          1,
          ["==", ["get", "score"], 60],
          1,
          ["==", ["get", "score"], 80],
          1,
          ["==", ["get", "score"], 100],
          1,
          0,
        ],
      ],
    );
    mapObject.addLayer(circleLayer);
  };

  getAllInOne = async () => {
    // get all_in_one : /api/filter/static/All_In_One.json
    let json = await axios.get("http://www.nomadville.xyz/api/filter/static/All_In_One.json");
    return json;
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
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    scores: state.modules.neighborhood.matched,
  };
};

export default connect(mapStateToProps)(BaseMap);
