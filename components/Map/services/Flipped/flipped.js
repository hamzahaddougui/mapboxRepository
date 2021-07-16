import flyTo from "../../FlyTo/flyingTo";

module.exports.setFlipped= (flipped, map, data)=> {
    let neighborhood= data.features.filter(f => f.properties.Neighborhood == flipped.Neighborhood);
    if(neighborhood[0]== undefined){
      let city= data.features.filter(f => f.properties.City== flipped.City || f.properties.City.includes(flipped.City));
      city[0].properties.Score= flipped.Score;
      city[0].properties.flipped= true;
      
    }
    else{
      neighborhood[0].properties.flipped= true;
      
      
  }
  let cityNeighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3 || f.properties.polygonId.split('_').length== 4);
  let cityNeighbGeojson= {
    type: "FeatureCollection",
    features: cityNeighbFeatures
  }

  map.getSource('cityNeighb_bis').setData(cityNeighbGeojson);
  console.log("flipped")
  
}
        
   
  
  
module.exports.checkFlipped= (map, data)=> {
    let flippedFeature= data.features.filter(f => f.properties.flipped== true);
    if(flippedFeature[0].properties.polygonId.split('_').length== 3){
          flippedFeature[0].properties.flipped= false;
          
      }
      if(flippedFeature[0].properties.polygonId.split('_').length== 4){
          flippedFeature[0].properties.flipped= false;
         }
      let cityNeighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3 || f.properties.polygonId.split('_').length== 4);
        let cityNeighbGeojson= {
          type: "FeatureCollection",
          features: cityNeighbFeatures
        }

        map.getSource('cityNeighb_bis').setData(cityNeighbGeojson);
         
    console.log("unflipped")
  }

  module.exports.handleFlipped= (map, layerName)=> {
    map.on("click", layerName, e => {
      if(layerName== 'flipped_layer' || layerName== 'favourite_layer'){
        flyTo.handleFlyTo(map, '', 11.9, 8000, 0.1, '', JSON.parse(e.features[0].properties.center).geometry.coordinates);
       }
      
    })
  }
    
    
  