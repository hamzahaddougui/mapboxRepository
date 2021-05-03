import flyTo from "../flyingTo";
import draw from "../polygon/draw";
import fitBounds from "../fitBounds";
import {CITY, NEIGHBORHOOD, CITY_NEIGHBORHOOD} from "../polygon/layer/config";

module.exports.setFlipped= (flipped, map, data)=> {
    let neighborhood= data.features.filter(f => f.properties.Neighborhood == flipped.Neighborhood);
    if(neighborhood[0]== undefined){
      let city= data.features.filter(f => f.properties.City== flipped.City || f.properties.City.includes(flipped.City));
      city[0].properties.Score= flipped.Score;
      city[0].properties.flipped= true;
      
      flyTo.handleFlyTo(map, '', 11.9, 8000, 0.1, '', city[0].properties.center.geometry.coordinates);

      let index= data.features.indexOf(city[0]);
      for(let i=0; i<index; i++){
        data.features[i+1].properties.position= data.features[i].properties.position;
      }
  
      // data.features[0]= city[0];
      city[0].properties.position= 0;
      // console.log(city[0])
      draw.drawPolygon(map, data, CITY);
      
    }
    else{
      neighborhood[0].properties.flipped= true;
      fitBounds.fitBounds(map, neighborhood[0], 12000, 0.1, 15, "favourite");
      
      
      let index= data.features.indexOf(neighborhood[0]);
      for(let i=0; i<index; i++){
        data.features[i+1].properties.position= data.features[i].properties.position;
      }
  
      // data.features[0]= neighborhood[0];
      neighborhood[0].properties.position= 0;
      // console.log(neighborhood[0])
      draw.drawPolygon(map, data, NEIGHBORHOOD);
      
  }  
  // console.log(data.features);   
          // draw.drawPolygon(map, data, CITY_NEIGHBORHOOD);

  }
        
   
  
  
module.exports.checkFlipped= (map, data)=> {
    let flippedFeature= data.features.filter(f => f.properties.flipped== true);
    if(flippedFeature[0].properties.polygonId.split('_').length== 3){
          flippedFeature[0].properties.flipped= false;
          // flyTo.handleFlyTo(map, '', 14, 8000, 0.3, '', flippedFeature[0].properties.center.geometry.coordinates);
          draw.drawPolygon(map, data, CITY);
    
            
      }
      if(flippedFeature[0].properties.polygonId.split('_').length== 4){
          flippedFeature[0].properties.flipped= false;
          // fitBounds.fitBounds(map, flippedFeature[0], "favourite");
          draw.drawPolygon(map, data, NEIGHBORHOOD);
  
        
      }
      
          // draw.drawPolygon(map, data, CITY_NEIGHBORHOOD);
      
    
  }
    
    
  