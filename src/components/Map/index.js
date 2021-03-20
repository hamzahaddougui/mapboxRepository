import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./map.module.css";
import HouseData from "./data/houses.json";
import PoiCard from "./components/card/card";
import axios from "axios";
import {
  REGION,
  REGION_HIGHLIGHTED,
  REGION_CLICKED,
  COUNTY,
  COUNTY_HIGHLIGHTED,
  COUNTY_CLICKED,
  CITY,
  CITY_OTHER,
  CURRENT_CITY,
  CURRENT_CITY_CLICKED,
  NEIGHBORHOOD,
  NEIGHBORHOOD_HIGHLIGHTED,
  CURRENT_NEIGHBORHOOD,
} from "./polygon/layer/config";

import draw from "./polygon/draw";
import move from "./polygon/polygonEvents/mousemove";
import leave from "./polygon/polygonEvents/mouseleave";
import layerClick from "./polygon/polygonEvents/click";
import showPoi from "./poi";
import showHouses from "./houses";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw";

const image = "/map/schools.png";
const marker = "/map/marker.png";

class Map extends Component {
  state = {
    openCard: false,
    highlightedElements: [],
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
    allInOne: "",
  };

  handleClose = () => {
    this.setState({ ...this.state, openCard: false });
  };

  async componentDidMount() {
    // get all_in_one : /api/filter/static/All_In_One.json
    let map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/hamzahad/ckm6lqb38f5ev17ljx1v8jxgp", // style URL
      center: [-83.30318241957815, 27.863450414180377], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });
    let { popup } = this.state;
    this.setState({ mapObject: map });
    let allInOneData = await this.getAllInOne();
    if (this.props.scores.length > 0) {
      allInOneData.data.features.forEach(feature => {
        let neighborhood = this.props.scores.data.filter(
          s => s.Neighborhood == feature.properties.neighborhood,
        );
        feature.properties = { ...feature.properties, score: neighborhood[0].Score };
      });
    }

    map.on("load", e => {
      // showPoi.showPoi(e);
      draw.drawPolygon(e.target, allInOneData.data, REGION);
      draw.drawPolygon(e.target, allInOneData.data, COUNTY);
      draw.drawPolygon(e.target, allInOneData.data, CITY);
      draw.drawPolygon(e.target, allInOneData.data, NEIGHBORHOOD);
      this.showHouses(e);
    });

    map.on("mousemove", "region-layer", e =>
      move.mouseMove(allInOneData.data, e, "region", REGION_HIGHLIGHTED, popup),
    );

    map.on("mouseleave", "region-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, REGION_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "region-highlighted-layer", e => {
      layerClick.click(
        allInOneData.data,
        e,
        REGION_HIGHLIGHTED,
        "region",
        e.features[0].properties.id,
        REGION_CLICKED,
      );
    });

    map.on("mousemove", "county-layer", e => {
      move.mouseMove(allInOneData.data, e, "county", COUNTY_HIGHLIGHTED, popup);
      this.handlePopup(e).mapbox.addTo(e.target);
    });

    map.on("click", "county-layer", e => {
      let result = e.features[0].properties.id.split("-");
      layerClick.click(allInOneData.data, e, COUNTY, "region", result[0], REGION_CLICKED);
      layerClick.click(
        allInOneData.data,
        e,
        COUNTY_HIGHLIGHTED,
        "county",
        e.features[0].properties.id,
        COUNTY_CLICKED,
      );
    });

    map.on("mouseleave", "county-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, COUNTY_HIGHLIGHTED, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "county-clicked-layer", e =>
      layerClick.click(
        allInOneData.data,
        e,
        COUNTY_CLICKED,
        "city",
        e.features[0].properties.id,
        CURRENT_CITY,
      ),
    );

    map.on("mousemove", "city-layer", e =>
      move.mouseMove(allInOneData.data, e, "city", CITY_OTHER, popup),
    );

    map.on("mouseleave", "city-layer", e => {
      draw.drawPolygon(e.target, allInOneData.data, CITY_OTHER, []);
      leave.mouseLeave(e, popup);
    });

    map.on("click", "city-other-layer", e =>
      layerClick.click(
        allInOneData.data,
        e,
        CITY_OTHER,
        "city",
        e.features[0].properties.id,
        CURRENT_CITY,
      ),
    );

    map.on("click", "current-city-layer", e =>
      layerClick.click(
        allInOneData.data,
        e,
        CURRENT_CITY_CLICKED,
        "neighborhood",
        e.features[0].properties.id,
        CURRENT_NEIGHBORHOOD,
      ),
    );

    map.on("mouseleave", "current-city-layer", e => {
      leave.mouseLeave(e, popup);
    });

    map.on("mousemove", "neighborhood-layer", e =>
      move.mouseMove(allInOneData.data, e, "neighborhood", NEIGHBORHOOD_HIGHLIGHTED, popup),
    );

    map.on("click", "neighborhood-layer", e =>
      layerClick.click(
        allInOneData.data,
        e,
        NEIGHBORHOOD,
        "neighborhood",
        e.features[0].properties.id,
        CURRENT_NEIGHBORHOOD,
      ),
    );

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

  handlePopup = e => {
    const { popup } = this.state;
    return {
      mapbox: popup.setLngLat(e.lngLat).setHTML(e.features[0].properties.id),
      id: e.features[0].properties.id,
    };
  };

  showHouses = e => {
    const { scores } = this.state;
    HouseData.features.forEach(f => {
      let score = scores.filter(s => s.id == f.properties.id);
      f.properties = { ...f.properties, score: score[0].score };
    });
    showHouses.houses(e, HouseData.features);
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

export default connect(mapStateToProps)(Map);
