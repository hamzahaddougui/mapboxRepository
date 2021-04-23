import {CITY, NEIGHBORHOOD} from "../polygon/layer/config";
import draw from "../polygon/draw";

module.exports.setFilters= (filter, map, data)=> {


  data.features.forEach(feature => {
          let neighborhood= filter.filtersData.filter(s => s.Neighborhood== feature.properties.Neighborhood);
          if(neighborhood[0]== undefined){
            let city= filter.filtersData.filter(s => s.City== feature.properties.City);
            if(city[0]== undefined){
              feature.properties= {...feature.properties, score: 0, unity: "%"}
  
            }
            else{
              feature.properties= {...feature.properties, score: city[0].filters[filter.selectedFilter], unity: "%"}
  
            }
          
          }
          else{
           feature.properties= {...feature.properties, score: neighborhood[0].filters[filter.selectedFilter], unity: "%"}
   
          }
       
     })
     
     data.features.sort((a, b)=> b.properties.score - a.properties.score);
     let length= data.features.length;
     data.features.forEach(f => {
            let position= (data.features.indexOf(f)/ length)* 100;
            f.properties= {...f.properties, position}
          })
    draw.drawPolygon(map, data, CITY);
    draw.drawPolygon(map, data, NEIGHBORHOOD);
    
    map.setPaintProperty("city_score_layer", "icon-color", [
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

      "#5D66FA",
    ]);

    map.setPaintProperty("neighborhood_score_layer", "icon-color", [
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

      "#5D66FA",
    ]);
    
}