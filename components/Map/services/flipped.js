import flyTo from "../flyingTo";
import draw from "../polygon/draw";
import fitBounds from "../fitBounds";
import {CITY, NEIGHBORHOOD, CITY_NEIGHBORHOOD} from "../polygon/layer/config";

module.exports.setFlipped= (flipped, map, data)=> {
    let cityFeatures, neighbFeatures;
    let neighborhood= data.features.filter(f => f.properties.Neighborhood == flipped.Neighborhood);
    if(neighborhood[0]== undefined){
      let city= data.features.filter(f => f.properties.City== flipped.City || f.properties.City.includes(flipped.City));
      city[0].properties.Score= flipped.Score;
      city[0].properties.flipped= true;
      
      
      cityFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3);
        let cityGeojson= {
          type: "FeatureCollection",
          features: cityFeatures
        }
      map.getSource('city_bis').setData(cityGeojson);
      // draw.drawPolygon(map, data, CITY);
      
    }
    else{
      neighborhood[0].properties.flipped= true;
      
      neighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 4);
        let neighbGeojson= {
          type: "FeatureCollection",
          features: neighbFeatures
      }
      map.getSource('neighborhood_bis').setData(neighbGeojson);
      
      // draw.drawPolygon(map, data, NEIGHBORHOOD);
      
  }  
    console.log("flipped")
  
}
        
   
  
  
module.exports.checkFlipped= (map, data)=> {
    let cityFeatures, neighbFeatures;
    let flippedFeature= data.features.filter(f => f.properties.flipped== true);
    if(flippedFeature[0].properties.polygonId.split('_').length== 3){
          flippedFeature[0].properties.flipped= false;
          // flyTo.handleFlyTo(map, '', 14, 8000, 0.3, '', flippedFeature[0].properties.center.geometry.coordinates);
          
          cityFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3);
          let cityGeojson= {
          type: "FeatureCollection",
          features: cityFeatures
          }
          map.getSource('city_bis').setData(cityGeojson);
          // draw.drawPolygon(map, data, CITY);
    
            
      }
      if(flippedFeature[0].properties.polygonId.split('_').length== 4){
          flippedFeature[0].properties.flipped= false;
          // fitBounds.fitBounds(map, flippedFeature[0], "favourite");
          // draw.drawPolygon(map, data, NEIGHBORHOOD);
          
          neighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 4);
          let neighbGeojson= {
          type: "FeatureCollection",
          features: neighbFeatures
          }
         map.getSource('neighborhood_bis').setData(neighbGeojson);
        
      }
         
    console.log("unflipped")
  }

  module.exports.handleFlipped= (map, layerName)=> {
    map.on("click", layerName, e => {
      if(layerName== 'city_flipped_layer' || layerName== 'city_favourite_layer'){
        flyTo.handleFlyTo(map, '', 11.9, 8000, 0.1, '', JSON.parse(e.features[0].properties.center).geometry.coordinates);
       }
      
    })
  }
    
    
  