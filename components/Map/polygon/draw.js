import service from "../services/fetching";
import layerShape from "../services/layerShape";
const score_marker = "/map/score.png";
const favourite = "/map/favorite.png";
const flipped = "/map/pin.png";

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
      // if (id == "neighborhood") {
      //   fillLayer = layerShape.fillLayer(
      //     id + "-layer",
      //     id,
      //     "#E2E3F0",
      //     0.4,
      //     minZoom,
      //     maxZoom,
      //     ["==", "$type", "Polygon"],
      //   );
      //   map.addLayer(fillLayer);

      // } else {
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
      // }


      let lineLayer = layerShape.lineLayer(
        id + "-layer-outline",
        id,
        "#575ff9",
        1,
        [
          "case",
          ["==", id, "region-clicked"],
          4,
          ["==", id, "county-bordered"],
          4,
          ["==", id, "city-bordered"],
          4,
          2
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


module.exports.drawScores= (data, map, imageName, layerName, source)=> {
  // let sourceLayer;
  // if(source== 'city') sourceLayer= 'city-dhmtj5';
  // if(source== 'neighborhood') sourceLayer= 'neighb-9sq7jo';

  let geojson= {
    type: "FeatureCollection",
    features
  }

  let features= service.getFeatures(data.features, source);
  geojson.features= features;

  if(map.addSource(source+'_bis',{
    type: "geojson",
    data: geojson
  }))

  
  map.loadImage(score_marker, (error, image) => {
    if (error) throw error;
    map.addImage(imageName, image);
    map.addLayer(
      layerShape.symbolLayer(
        layerName,
        source+'_bis',
        // sourceLayer,
        imageName,
        0.068,
        ["concat", ["get", "Score"], "%"],
        ["Open Sans Semibold", "Arial Unicode MS Bold"],
        [0, -1],
        "top",
        11,
        "#5D66FA",
        "white",
        ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false]]

        
      )
    );
  });
}


module.exports.drawFlipped= (map)=> {
  // city level
  map.loadImage(flipped, (error, image) => {
    if (error) throw error;
    map.addImage("city_flipped_marker", image, { sdf: true });
    let result = map.addLayer(
      layerShape.symbolLayer(
        "city_flipped_layer",
        "city_bis",
        // 'city-dhmtj5',
        "city_flipped_marker",
        0.1,
        ["concat", ["get", "Score"], ["get", "unity"]],
        ["Open Sans Semibold", "Arial Unicode MS Bold"],
        [0, -1.5],
        "top",
        12,
        "white",
        "#575ff9",
        
        ["==", ["get", "flipped"], true]
      ),
    );

  });

  // neighborhood level
  map.loadImage(flipped, (error, image) => {
    if (error) throw error;
    map.addImage("neighborhood_flipped_marker", image, { sdf: true });
    let result = map.addLayer(
      layerShape.symbolLayer(
        "neighborhood_flipped_layer",
        "neighborhood_bis",
        // 'neighb-9sq7jo',
        "neighborhood_flipped_marker",
        0.1,
        ["concat", ["get", "Score"], ["get", "unity"]],
        ["Open Sans Semibold", "Arial Unicode MS Bold"],
        [0, -1.5],
        "top",
        12,
        "white",
        "#575ff9",
        ["==", ["get", "flipped"], true]
      ),
    );

  });
}

module.exports.drawFavourite= (map)=> {
  // city level
  map.loadImage(favourite, (error, image) => {
    if (error) throw error;
    map.addImage("city_favourite_marker", image);
    let result = map.addLayer(
      layerShape.symbolLayer(
        "city_favourite_layer",
        "city_bis",
        // 'city-dhmtj5',
        "city_favourite_marker",
        0.068,
        ["concat", ["get", "Score"], ["get", "unity"]],
        ["Open Sans Semibold", "Arial Unicode MS Bold"],
        [0, -1],
        "top",
        11,
        "#ff0061",
        "white",
        ["==", ["get", "favourite"], true]
      ),
    );

  });

  // neighborhood level
  map.loadImage(favourite, (error, image) => {
    if (error) throw error;
    map.addImage("neighborhood_favourite_marker", image);
    let result = map.addLayer(
      layerShape.symbolLayer(
        "neighborhood_favourite_layer",
        "neighborhood_bis",
        // 'neighb-9sq7jo',
        "neighborhood_favourite_marker",
        0.068,
        ["concat", ["get", "Score"], ["get", "unity"]],
        ["Open Sans Semibold", "Arial Unicode MS Bold"],
        [0, -1],
        "top",
        11,
        "#ff0061",
        "white",
        ["==", ["get", "favourite"], true]
      ),
    );

  });
}

