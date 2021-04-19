import draw from "../polygon/draw";
import {CITY, NEIGHBORHOOD} from "../polygon/layer/config";

module.exports.setScores= (map, scores, data) => {
    if(scores.hasOwnProperty('data')){
      data.features.forEach(feature => {
          let neighborhood= scores.data.filter(s => s.Neighborhood== feature.properties.Neighborhood);
          if(neighborhood[0]== undefined){
            let city= scores.data.filter(s => s.City== feature.properties.City);
            if(city[0]== undefined){
              feature.properties= {...feature.properties, score: 0, unity: "%", favourite: false}
  
            }
            else{
              feature.properties= {...feature.properties, score: city[0].Score, unity: "%", favourite: false}
  
            }
          
          }
          else{
           feature.properties= {...feature.properties, score: neighborhood[0].Score, unity: "%", favourite: false}
   
          }
       
     })
     
     data.features.sort((a, b)=> b.properties.score - a.properties.score);
     let length= data.features.length;
     data.features.forEach(f => {
            let position= (data.features.indexOf(f)/ length)* 100;
            f.properties= {...f.properties, position}
          })
    
     draw.drawPolygon(map, data, CITY);
     draw.drawScores(map, "city_score_marker", "city_score_layer", "city");
     draw.drawPolygon(map, data, NEIGHBORHOOD);
     draw.drawScores(map, "neighborhood_score_marker", "neighborhood_score_layer", "neighborhood");
      }
     else{
        let cityFeatures= data.features.filter(f => f.properties.id.split('-').length== 3 && f.properties.favourite== false);
        cityFeatures.forEach(feature => {
          feature.properties.score= 0;
        })
        let neighbFeatures= data.features.filter(f => f.properties.id.split('-').length== 4 && f.properties.favourite== false);
        neighbFeatures.forEach(feature => {
          feature.properties.score= 0;
        })
        draw.drawPolygon(map, data, CITY);
        draw.drawPolygon(map, data, NEIGHBORHOOD);
      }
    return true;
  }