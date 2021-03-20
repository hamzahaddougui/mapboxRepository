import layerShape from './services/layerShape';

module.exports.houses= (e, features) => {
    e.target.addSource("houses", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features
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
      e.target.addLayer(circleLayer);
}