import flyTo from "../flyingTo";
import draw from "../polygon/draw";
import fitBounds from "../fitBounds";
import {CITY, NEIGHBORHOOD, CITY_NEIGHBORHOOD} from "../polygon/layer/config";

module.exports.setFavourites= (favourites, map, data)=> {
    if(favourites.length> 0){
        let favourite= favourites[favourites.length-1];
        let neighborhood= data.features.filter(f => f.properties.Neighborhood == favourite.Neighborhood);
        if(neighborhood[0]== undefined){
          let city= data.features.filter(f => f.properties.City== favourite.City || f.properties.City.includes(favourite.City));
          city[0].properties.Score= favourite.Score;
          city[0].properties.favourite= true;
          flyTo.handleFlyTo(map, '', 11.9, 8000, 0.1, '', city[0].properties.center.geometry.coordinates);

          let index= data.features.indexOf(city[0]);
          for(let i=0; i<index; i++){
            data.features[i+1].properties.position= data.features[i].properties.position;
          }
      
          // data.features[0]= city[0];
          city[0].properties.position= 0;

          draw.drawPolygon(map, data, CITY);
          
        }
        else{
          neighborhood[0].properties.favourite= true;
          fitBounds.fitBounds(map, neighborhood[0], 12000, 0.1, 15, "favourite");
          
          let index= data.features.indexOf(neighborhood[0]);
          for(let i=0; i<index; i++){
            data.features[i+1].properties.position= data.features[i].properties.position;
          }
      
          // data.features[0]= neighborhood[0];
          neighborhood[0].properties.position= 0;

          draw.drawPolygon(map, data, NEIGHBORHOOD);
          
  }  
      // console.log(data.features);  
          // draw.drawPolygon(map, data, CITY_NEIGHBORHOOD);

    }
   
  }
  
module.exports.checkFavourites= (favourites, map, data)=> {
    let favFeatures= data.features.filter(f => f.properties.favourite== true);
    let element;
    favFeatures.forEach(feature => {
      if(feature.properties.polygonId.split('_').length== 3){
        element= favourites.filter(fav => fav.City== feature.properties.City);
        if(element[0]== undefined){
          feature.properties.favourite= false;
          // flyTo.handleFlyTo(map, '', 14, 8000, 0.3, '', feature.properties.center.geometry.coordinates);
          draw.drawPolygon(map, data, CITY);
    
        }    
      }
      if(feature.properties.polygonId.split('_').length== 4){
        element= favourites.filter(fav => fav.Neighborhood== feature.properties.Neighborhood);
        if(element[0]== undefined){
          feature.properties.favourite= false;
          // fitBounds.fitBounds(map, feature, "favourite");
          draw.drawPolygon(map, data, NEIGHBORHOOD);
  
        }
      }
      
      
    })
          // draw.drawPolygon(map, data, CITY_NEIGHBORHOOD);
    
  }