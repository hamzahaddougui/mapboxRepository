import service from "../services/fetching";
import layerShape from "../services/layerShape";
import fetchFeatures from './fetchFeatures';
const marker = "/map/marker_one.png";
// import marker from "../../../../public/map/marker_one.png";


module.exports.drawPolygon = (
    map,
    data,
    element,
    features = null,
  ) => {
    let geojson = {
      type: "FeatureCollection",
      features: [],
    };
    let {id, source, color, opacity, minZoom, maxZoom}= element;
    if (features == null) {
      features = fetchFeatures.getPolygonFeatures(data, service.getFeatures(data.features, source));
      geojson.features = features;
    }
    if (!map.getSource(id)) {
      map.addSource(id, {
        type: "geojson",
        data: geojson
      });

      let fillLayer = {};
      if (id == "neighborhood") {
        fillLayer = layerShape.fillLayer(
          id + "-layer",
          id,
          "#E2E3F0",
          // [
          //   "interpolate",
          //   ["linear"],
          //   ["zoom"],
          //   11,
          //   ["case", ["<=", ["get", "position"], 20], 0.4, 0],
          //   11.2,
          //   ["case", ["<=", ["get", "position"], 40], 0.4, 0],
          //   11.4,
          //   ["case", ["<=", ["get", "position"], 60], 0.4, 0],
          //   11.6,
          //   ["case", ["<=", ["get", "score"], 80], 0.4, 0],
          //   11.8,
          //   ["case", ["<=", ["get", "score"], 100], 0.4, 0],
          // ],
          0.4,
          minZoom,
          maxZoom,
          ["==", "$type", "Polygon"],
        );
        map.addLayer(fillLayer);

        map.loadImage(marker, (error, image) => {
          if (error) throw error;
          map.addImage("score-marker", image, { sdf: true });
          const result = map.addLayer(
            layerShape.symbolLayer(
              "scores-layer",
              id,
              "score-marker",
              0.05,
              ["get", "score"],
              ["Open Sans Semibold", "Arial Unicode MS Bold"],
              [0, 0],
              "top",
              12,
              [
                "case",
<<<<<<< HEAD:components/Map/polygon/draw.js
                ["==", ["get", "score"], 20],
                "#cb3e0b",
                ["==", ["get", "score"], 40],
                "#de0d0d",
                ["==", ["get", "score"], 60],
                "#d06139",
                ["==", ["get", "score"], 80],
                "#319220",
                ["==", ["get", "score"], 100],
=======
                ["<=", ["get", "score"], 20],
                "#cb3e0b",
                ["<=", ["get", "score"], 40],
                "#de0d0d",
                ["<=", ["get", "score"], 60],
                "#d06139",
                ["<=", ["get", "score"], 80],
                "#319220",
                [">", ["get", "score"], 80],
>>>>>>> 28e2f56b524142cbc609fc056e90e5d771d0cbcb:src/components/Map/polygon/draw.js
                "#15450d",

                "black",
              ],
              "white",
<<<<<<< HEAD:components/Map/polygon/draw.js
              ["has", "id"]
=======
              ["has", "score"]
>>>>>>> 28e2f56b524142cbc609fc056e90e5d771d0cbcb:src/components/Map/polygon/draw.js
            ),
          );
          // map.moveLayer("neighborhood-layer", "scores-layer");
        });
      } else {
        fillLayer = layerShape.fillLayer(
          id + "-layer",
          id,
          color,
          opacity,
          minZoom,
          maxZoom,
          ["==", "$type", "Polygon"],
        );
        map.addLayer(fillLayer);
      }

      let lineLayer = layerShape.lineLayer(
        id + "-layer-outline",
        id,
        "#575FF9",
        1,
        [
          "case",
          ["==", id, "region"],
          2,
          ["==", id, "region-highlighted"],
          3,
          ["==", id, "region-clicked"],
          4,
          ["==", id, "current-county"],
          2,
          ["==", id, "current-city"],
          2,
          ["==", id, "current-neighborhood"],
          2,
          0.5,
        ],
        minZoom,
        maxZoom,
        ["==", "$type", "Polygon"],
      );
      map.addLayer(lineLayer);
    } else {
      geojson.features = features;
      map.getSource(id).setData(geojson);
    }
  };