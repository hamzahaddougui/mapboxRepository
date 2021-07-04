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

    let symbolLayertextField, polygonId;
    if(features && features[0]){
      polygonId= features[0].properties.polygonId.split('_');
      switch (polygonId.length) {
        case 1:
          symbolLayertextField= polygonId[0];
          break;
        case 2:
          symbolLayertextField= polygonId[1];
          break;
        case 3:
          symbolLayertextField= polygonId[2];
          break;
        case 4:
          symbolLayertextField= polygonId[3];
          break;
      
        default:
          break;
      }
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
          1.5,
          ["==", id, "county-bordered"],
          1.5,
          ["==", id, "city-bordered"],
          1.5,
          1
        ],
        minZoom,
        maxZoom,
        ["==", "$type", "Polygon"],
      );
      map.addLayer(lineLayer);

      map.addLayer({
        id: id+"_layer_outline_name",
        type: "symbol",
        source: id,
        layout:{
          "symbol-placement": "line",
          "symbol-spacing": 2,
          "text-field": symbolLayertextField,
          "text-anchor": "center",
          "text-rotation-alignment": "map",
          "text-keep-upright": true,
          "text-size": 22
        }
        ,
        paint: {
          "text-opacity":[
                           "interpolate",
                              ["linear"],
                              ["zoom"],
                              7,
                              ["case", ["==", polygonId.length, 1], 1, 0],
                              9,
                              ["case", ["==", polygonId.length, 2], 1, 0],
                              12,
                              ["case", ["==", polygonId.length, 3], 1, 0],
                              13,
                              ["case", ["==", polygonId.length, 4], 1, 0]
                              
                              
                          ]
        }
      })
      
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
      map.setLayoutProperty(id+"_layer_outline_name", "text-field", symbolLayertextField)
    }
    
};


module.exports.drawScores= (data, map)=> {
  // let sourceLayer;
  // if(source== 'city') sourceLayer= 'city-dhmtj5';
  // if(source== 'neighborhood') sourceLayer= 'neighb-9sq7jo';

  let scoresOptions= [
    {imageName: "city_70_marker", layerName: "city_70_layer", source: 'city', range: 100,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 70]]},
    {imageName: "city_50_marker", layerName: "city_50_layer", source: 'city', range: 70,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 50]]},
    {imageName: "city_30_marker", layerName: "city_30_layer", source: 'city', range: 50,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 30]]},
    {imageName: "city_last_marker", layerName: "city_last_layer", source: 'city', range: 30,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], ["<", ["get", "Score"], 30]]},
    {imageName: "neighborhood_70_marker", layerName: "neighborhood_70_layer", source: 'neighborhood', range: 100,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 70]]},
    {imageName: "neighborhood_50_marker", layerName: "neighborhood_50_layer", source: 'neighborhood', range: 70,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 50]]},
    {imageName: "neighborhood_30_marker", layerName: "neighborhood_30_layer", source: 'neighborhood', range: 50,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 30]]},
    {imageName: "neighborhood_last_marker", layerName: "neighborhood_last_layer", source: 'neighborhood', range: 30,
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], ["<", ["get", "Score"], 30]]}
  ];

  let sources= [
    {source: 'city'},
    {source: 'neighborhood'}];
  
  sources.forEach(s => {
    let geojson= {
      type: "FeatureCollection",
      features
    }
  
    let features= service.getFeatures(data.features, s.source);
    geojson.features= features;
  
    
    if(!map.getSource(s.source+'_bis')){
      map.addSource(s.source+'_bis',{
        type: "geojson",
        data: geojson
      })
    }
    
  })  
  

  scoresOptions.forEach(option => {
    let {imageName, layerName, source, filter, range}= option;

    
  
    
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
          filter
  
          
        )
      );
    });
  })
  

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

