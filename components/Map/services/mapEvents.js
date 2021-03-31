import React, { Component } from "react";

import { createPolygons, drawPolygons } from "./services/polygonsDrawer";

class MapEvents extends Component {
  load = e => {
    createPolygons(this.state.allInOneData, e.target, "region", "#E2E3F0", 0.2, 5, 7);
    createPolygons(this.state.allInOneData, e.target, "county", "#E2E3F0", 0.2, 7, 9);
    createPolygons(this.polygons, e.target, "city", "#E2E3F0", 0.2, 9, 11);
    createPolygons(this.polygons, e.target, "neighborhood", "#E2E3F0", 0.2, 11, 15);
    this.showHouses();
  };
}
