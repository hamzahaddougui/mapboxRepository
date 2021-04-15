import service from "../services/fetching";
import layerShape from "../services/layerShape";
const score = "/map/pin.png";
const favourite = "/map/pin.png";

module.exports.drawPolygon = (
    map,
    data,
    element,
    features = null,
  ) => {
    let geojson = {
      type: "FeatureCollection",
      features
    };
    let {id, source, color, opacity, minZoom, maxZoom}= element;

    if (features == null) {
      features = service.getFeatures(data.features, source);
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

        map.loadImage(favourite, (error, image) => {
          if (error) throw error;
          map.addImage("city_favourite_marker", image, { sdf: true });
          let result = map.addLayer(
            layerShape.symbolLayer(
              "city_favourite_layer",
              "city",
              "city_favourite_marker",
              0.1,
              ["concat", ["get", "score"], "%"],
              ["Open Sans Semibold", "Arial Unicode MS Bold"],
              [0, -1],
              "top",
              12,
              "#ff0061",
              "white",
              ["==", ["get", "favourite"], true]
            ),
          );
      
        });

        map.loadImage(favourite, (error, image) => {
          if (error) throw error;
          map.addImage("neighborhood_favourite_marker", image, { sdf: true });
          let result = map.addLayer(
            layerShape.symbolLayer(
              "neighborhood_favourite_layer",
              "neighborhood",
              "neighborhood_favourite_marker",
              0.1,
              ["concat", ["get", "score"], "%"],
              ["Open Sans Semibold", "Arial Unicode MS Bold"],
              [0, -1],
              "top",
              12,
              "#ff0061",
              "white",
              ["==", ["get", "favourite"], true]
            ),
          );
      
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
          ["==", id, "current-county"],
          2,
          ["==", id, "current-city"],
          2,
          ["==", id, "current-neighborhood"],
          2,
          ["==", id, "region-clicked"],
          4,
          ["==", id, "county-bordered"],
          4,
          ["==", id, "city-bordered"],
          4,
          0.5
        ],
        minZoom,
        maxZoom,
        ["==", "$type", "Polygon"],
      );
      map.addLayer(lineLayer);
      
      if(map.getLayer("city_score_layer")){
        map.moveLayer(id + "-layer", "city_score_layer");
        map.moveLayer(id + "-layer-outline", "city_score_layer");

      }
      if(map.getLayer("neighborhood_score_layer")){
        map.moveLayer(id + "-layer", "neighborhood_score_layer");
        map.moveLayer(id + "-layer-outline", "neighborhood_score_layer");

      }
      if(map.getLayer("city_favourite_layer")){
        map.moveLayer(id + "-layer", "city_favourite_layer");
        map.moveLayer(id + "-layer-outline", "city_favourite_layer");
        
      }
      if(map.getLayer("neighborhood_favourite_layer")){
        map.moveLayer(id + "-layer", "neighborhood_favourite_layer");
        map.moveLayer(id + "-layer-outline", "neighborhood_favourite_layer");
        
      }
      

    } else {
      geojson.features = features;
      map.getSource(id).setData(geojson);
    }
    
};


module.exports.drawScores= (map, imageName, layerName, source)=> {
  map.loadImage(score, (error, image) => {
    if (error) throw error;
    map.addImage(imageName, image, { sdf: true });
    let result = map.addLayer(
      layerShape.symbolLayer(
        layerName,
        source,
        imageName,
        0.1,
        ["concat", ["get", "score"], "%"],
        ["Open Sans Semibold", "Arial Unicode MS Bold"],
        [0, -1],
        "top",
        12,
        [
          "case",
          ["<=", ["get", "score"], 20],
          "#C8CAF2",
          ["<=", ["get", "score"], 40],
          "#B2B6F5",
          ["<=", ["get", "score"], 60],
          "#969CF6",
          ["<=", ["get", "score"], 80],
          "#777EFA",
          [">", ["get", "score"], 80],
          "#5D66FA",

          "black",
        ],
        "white",
        ["==", ["get", "favourite"], false]
      ),
    );
  });
}


