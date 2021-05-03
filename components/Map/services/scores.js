import draw from "../polygon/draw";
import {CITY, NEIGHBORHOOD, CITY_NEIGHBORHOOD} from "../polygon/layer/config";

module.exports.setScores= (map, scores, data) => {
    if(scores.hasOwnProperty('data')){
      data.features.forEach(feature => {
          let neighborhood= scores.data.filter(s => s.Neighborhood== feature.properties.Neighborhood);
          if(neighborhood[0]== undefined){
            let city= scores.data.filter(s => s.City== feature.properties.City);
            if(city[0]== undefined){
              feature.properties= {...feature.properties, Score: 0, unity: "%", id: 0, flipped: false, favourite: false}
  
            }
            else{
              feature.properties= {...feature.properties, Score: city[0].Score, unity: "%", id: city[0].id, flipped: false, favourite: false}
  
            }
          
          }
          else{
           feature.properties= {...feature.properties, Score: neighborhood[0].Score, unity: "%", id: neighborhood[0].id, flipped: false, favourite: false}
   
          }
       
     })
     
     data.features.sort((a, b)=> b.properties.Score - a.properties.Score);
     let length= data.features.length;
     data.features.forEach(f => {
            let position= (data.features.indexOf(f)/ length)* 100;
            f.properties= {...f.properties, position}
          })
    
     draw.drawPolygon(map, data, CITY);
    //  draw.drawScores(map, "city_score_marker", "city_score_layer", "city");
     draw.drawPolygon(map, data, NEIGHBORHOOD);
    //  draw.drawScores(map, "neighborhood_score_marker", "neighborhood_score_layer", "neighborhood");
      }
     else{
        let cityFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3 && f.properties.favourite== false);
        cityFeatures.forEach(feature => {
          feature.properties.Score= 0;
        })
        let neighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 4 && f.properties.favourite== false);
        neighbFeatures.forEach(feature => {
          feature.properties.Score= 0;
        })
        draw.drawPolygon(map, data, CITY);
        draw.drawPolygon(map, data, NEIGHBORHOOD);
      }
    return data;
  }