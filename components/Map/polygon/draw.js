import service from "../services/fetching";
import layerShape from "../services/layerShape";
const score_marker = "/map/score.png";
const favourite = "/map/favorite.png";
const flipped = "/map/pin.png";
import symbol from "../layers/symbol/list";

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
          "symbol-spacing": 80,
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
                              8.8,
                              ["case", ["==", polygonId.length, 2], 1, 0],
                              10,
                              ["case", ["==", polygonId.length, 3], 1, 0],
                              11,
                              ["case", ["==", polygonId.length, 4], 1, 0]
                              
                              
                          ]
        }
      })
      

    } else {
      geojson.features = features;
      map.getSource(id).setData(geojson);
      map.setLayoutProperty(id+"_layer_outline_name", "text-field", symbolLayertextField)
    }
    
};


module.exports.drawScores= (data, map)=> {
  let scoresOptions= [
    // {imageName: "cityNeighb_last_marker", layerName: "cityNeighb_last_layer", source: 'cityNeighb', visibility: 'visible',
    //  filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], ["<", ["get", "Score"], 40]]},
    // {imageName: "cityNeighb_40_marker", layerName: "cityNeighb_40_layer", source: 'cityNeighb', visibility: 'visible',
    //  filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 40]]},
    // {imageName: "cityNeighb_60_marker", layerName: "cityNeighb_60_layer", source: 'cityNeighb', visibility: 'visible',
    //  filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false], [">=", ["get", "Score"], 60]]},
    {imageName: "cityNeighb_marker", layerName: "cityNeighb_layer", source: 'cityNeighb', visibility: 'visible',
     filter: ["all", ["==", ["get", "favourite"], false], ["==", ["get", "flipped"], false]]}
    
    ];

  let sources= [
    {source: 'cityNeighb'}
  ];
  
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
    let {imageName, layerName, source, filter, visibility}= option;

    
  
    
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
          filter,
          visibility
        )
        );
    });
  })
  
  

}


module.exports.drawFlipped= (map)=> {
  map.loadImage(flipped, (error, image) => {
    if (error) throw error;
    map.addImage("flipped_marker", image, { sdf: true });
    let result = map.addLayer(
      layerShape.symbolLayer(
        "flipped_layer",
        "cityNeighb_bis",
        "flipped_marker",
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

  if(map.getLayer('flipped_layer')){
    let layers= symbol.symbolLayers.splice(0, 4)
    layers.forEach(layer => map.moveLayer('flipped_layer', layer.layerName))
    
  } 
}

module.exports.drawFavourite= (map)=> {
  map.loadImage(favourite, (error, image) => {
    if (error) throw error;
    map.addImage("favourite_marker", image);
    let result = map.addLayer(
      layerShape.symbolLayer(
        "favourite_layer",
        "cityNeighb_bis",
        // 'neighb-9sq7jo',
        "favourite_marker",
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

  if(map.getLayer('favourite_layer')){
    let layers= symbol.symbolLayers.splice(0, 5);
    layers.forEach(layer => map.moveLayer('favourite_layer', layer.layerName))
    // map.moveLayer('favourite_layer', 'flipped_layer')
  }
}

