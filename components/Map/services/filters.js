import {CITY, NEIGHBORHOOD, CITY_NEIGHBORHOOD} from "../polygon/layer/config";
import draw from "../polygon/draw";

module.exports.setFilters= (filter, map, data)=> {

  // console.time('set scores');

  data.features.forEach(feature => {
          let neighborhood= filter.filtersData.filter(s => s.Neighborhood== feature.properties.Neighborhood);
          let city= filter.filtersData.filter(s => s.City== feature.properties.City);

          if(neighborhood[0]== undefined){
            
            feature.properties.score = (city[0]== undefined) ? 0 : parseInt(city[0].filters[filter.selectedFilter]);
            
          }
          else{
           feature.properties.score= parseInt(neighborhood[0].filters[filter.selectedFilter]) 
          
          }
       
     })
    
    // console.timeEnd('set scores');

    //  data.features.sort((a, b)=> b.properties.score - a.properties.score);
    //  let length= data.features.length;
    //  data.features.forEach(f => {
    //         let position= (data.features.indexOf(f)/ length)* 100;
    //         f.properties= {...f.properties, position}
    //       })

    // console.time('set data');

    draw.drawPolygon(map, data, CITY);
    draw.drawPolygon(map, data, NEIGHBORHOOD);
    
    // console.timeEnd('set data');
       
}