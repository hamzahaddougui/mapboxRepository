import flyTo from "../../FlyTo/flyingTo";
import draw from "../../polygon/draw";
import fitBounds from "../../FitBounds/fitBounds";
import {CITY, NEIGHBORHOOD, CITY_NEIGHBORHOOD} from "../../polygon/layer/config";

module.exports.setFavourites= (favourites, map, data)=> {
  let cityFeatures, neighbFeatures;
    if(favourites.length> 0){
        let favourite= favourites[favourites.length-1];
        let neighborhood= data.features.filter(f => f.properties.Neighborhood == favourite.Neighborhood);
        if(neighborhood[0]== undefined){
          let city= data.features.filter(f => f.properties.City== favourite.City || f.properties.City.includes(favourite.City));
          city[0].properties.Score= favourite.Score;
          city[0].properties.favourite= true;
          
          cityFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3);
          let cityGeojson= {
           type: "FeatureCollection",
           features: cityFeatures
          }
          map.getSource('city_bis').setData(cityGeojson);
          // draw.drawPolygon(map, data, CITY);
          
        }
        else{
          neighborhood[0].properties.favourite= true;
          
          neighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 4);
          let neighbGeojson= {
            type: "FeatureCollection",
            features: neighbFeatures
          }
          map.getSource('neighborhood_bis').setData(neighbGeojson);

          // draw.drawPolygon(map, data, NEIGHBORHOOD);
          
  }  
      // console.log(data.features);  
          // draw.drawPolygon(map, data, CITY_NEIGHBORHOOD);

    }
   console.log("favorite")
  }
  
module.exports.checkFavourites= (favourites, map, data)=> {
  let cityFeatures, neighbFeatures;
    let favFeatures= data.features.filter(f => f.properties.favourite== true);
    let element;
    favFeatures.forEach(feature => {
      if(feature.properties.polygonId.split('_').length== 3){
        element= favourites.filter(fav => fav.City== feature.properties.City);
        if(element[0]== undefined){
          feature.properties.favourite= false;
          // flyTo.handleFlyTo(map, '', 14, 8000, 0.3, '', feature.properties.center.geometry.coordinates);
        
        cityFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3);
        let cityGeojson= {
          type: "FeatureCollection",
          features: cityFeatures
        }
        map.getSource('city_bis').setData(cityGeojson);
          // draw.drawPolygon(map, data, CITY);
    
        }    
      }
      if(feature.properties.polygonId.split('_').length== 4){
        element= favourites.filter(fav => fav.Neighborhood== feature.properties.Neighborhood);
        if(element[0]== undefined){
          feature.properties.favourite= false;
          // fitBounds.fitBounds(map, feature, "favourite");
          
          neighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 4);
          let neighbGeojson= {
            type: "FeatureCollection",
            features: neighbFeatures
          }
          map.getSource('neighborhood_bis').setData(neighbGeojson);

          // draw.drawPolygon(map, data, NEIGHBORHOOD);
  
        }
      }
      
      
    })
          // draw.drawPolygon(map, data, CITY_NEIGHBORHOOD);
    console.log("unfavorite")
  }

module.exports.handleFavourite= (map, layerName)=> {
  map.on("click", layerName, e => {
    if(layerName== 'neighborhood_flipped_layer' || layerName== 'neighborhood_favourite_layer'){
      fitBounds.fitBounds(map, e.features[0], 12000, 0.1, 15);
    }
  })
}