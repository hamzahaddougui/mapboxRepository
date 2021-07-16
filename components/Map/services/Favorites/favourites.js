import fitBounds from "../../FitBounds/fitBounds";

module.exports.setFavourites= (favourites, map, data)=> {
  if(favourites.length> 0){
        let favourite= favourites[favourites.length-1];
        let neighborhood= data.features.filter(f => f.properties.Neighborhood == favourite.Neighborhood);
        if(neighborhood[0]== undefined){
          let city= data.features.filter(f => f.properties.City== favourite.City || f.properties.City.includes(favourite.City));
          city[0].properties.Score= favourite.Score;
          city[0].properties.favourite= true;
          
            
        }
        else{
          neighborhood[0].properties.favourite= true;
          
        }  
          
          let cityNeighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3 || f.properties.polygonId.split('_').length== 4);
          let cityNeighbGeojson= {
            type: "FeatureCollection",
            features: cityNeighbFeatures
          }
  
          map.getSource('cityNeighb_bis').setData(cityNeighbGeojson);
    }
   console.log("favorite")
  }
  
module.exports.checkFavourites= (favourites, map, data)=> {
    let favFeatures= data.features.filter(f => f.properties.favourite== true);
    let element;
    favFeatures.forEach(feature => {
      if(feature.properties.polygonId.split('_').length== 3){
        element= favourites.filter(fav => fav.City== feature.properties.City);
        if(element[0]== undefined){
          feature.properties.favourite= false;
        }    
      }

      if(feature.properties.polygonId.split('_').length== 4){
        element= favourites.filter(fav => fav.Neighborhood== feature.properties.Neighborhood);
        if(element[0]== undefined){
          feature.properties.favourite= false;
        
        }
      }
      
      
    })
    let cityNeighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3 || f.properties.polygonId.split('_').length== 4);
        let cityNeighbGeojson= {
          type: "FeatureCollection",
          features: cityNeighbFeatures
        }

        map.getSource('cityNeighb_bis').setData(cityNeighbGeojson);
        console.log("unfavorite")
  }

module.exports.handleFavourite= (map, layerName)=> {
  map.on("click", layerName, e => {
    if(layerName== 'flipped_layer' || layerName== 'favourite_layer'){
      fitBounds.fitBounds(map, e.features[0], 12000, 0.1, 15);
    }
  })
}