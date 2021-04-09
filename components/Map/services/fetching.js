import area from '@turf/area';
import center from '@turf/center';
import bbox from '@turf/bbox';
import draw from '../polygon/draw';
import {CITY, NEIGHBORHOOD} from '../polygon/layer/config';
import flyTo from "../flyingTo";
import fitBounds from "../fitBounds";
module.exports.getFeatures = (allFeatures, source, from=null) => {
    
  let feature;
  let elements= [];
  let ids= [];
  switch (source) {
    case 'region':
      feature= allFeatures.filter(f => f.properties.id.split('-').length== 1);
      feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
      
      let min= feature[0].properties.surface;
      let max= min;
      feature.forEach(f => {
        if(f.properties.surface< min) min= f.properties.surface;
        if(f.properties.surface> max) max= f.properties.surface;
        })

      feature.forEach(f =>  f.properties= {...f.properties, min, max})
      
        if(from!= null){
          feature= feature.filter(f => f.properties.id== from);
        }
      
      feature.forEach(f => {
        elements.push({id: 'region', value: f.properties.id});
        ids.push(f.properties.id);
      });
      feature= {elements,
      style:{
        id: ids,
        color: '#c81414',
        opacity: 0.2
      }
      }
      break;
    case 'county':
        feature= allFeatures.filter(f => f.properties.id.split('-').length== 2);
        feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});

        if(from!= null){
          feature= feature.filter(f => f.properties.id.startsWith(from));
        }
        feature.forEach(f => {
          elements.push({id: 'county', value: f.properties.id});
          ids.push(f.properties.id);
        });
        feature= {elements,
        style:{
          id: ids,
          color: '#555555',
          opacity: 0.2
        }
        }
        break;
      case 'city':
          feature= allFeatures.filter(f => f.properties.id.split('-').length== 3);
          feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});

          if(from!= null){
            feature= feature.filter(f => f.properties.id.startsWith(from));
          }
          feature.forEach(f => {
            elements.push({id: 'city', value: f.properties.id});
            ids.push(f.properties.id);
          });
          feature= {elements,
          style:{
            id: ids,
            color: '#116530',
            opacity: 0.2
          }
          }
        break;
      case 'neighborhood':
          feature= allFeatures.filter(f => f.properties.id.split('-').length== 4);
          feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
          if(from!= null){
            feature= feature.filter(f => f.properties.id.startsWith(from));
          }
          // let featureLength= feature.length;
          // feature.forEach(f => {
          //   let position= (feature.indexOf(f)/ featureLength)* 100;
          //   if(position<= 20){
          //     f.properties= {...f.properties, score: 100, position};
              
          //   }
          //   if(position> 20 && position<=40){
          //     f.properties= {...f.properties, score: 80, position};
              
          //   }
          //   if(position> 40 && position<=60){
          //     f.properties= {...f.properties, score: 60, position};
              
          //   }
          //   if(position> 60 && position<=80){
          //     f.properties= {...f.properties, score: 40, position};
              
          //   }
          //   if(position> 80 && position<=100){
          //     f.properties= {...f.properties, score: 20, position};
              
          //   }
            
            
          // });
          // feature= feature.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0));
          
          feature.forEach(f => {
            elements.push({id: 'neighborhood', value: f.properties.id});
            ids.push(f.properties.id);
          });
          feature= {elements,
          style:{
            id: ids,
            color: '#21B6A8',
            opacity: 0.2
          }
          }
        break;
    default:
      break;
  }
  
  
  return feature;

};

module.exports.setScores= (map, scores, data) => {
  if(scores.hasOwnProperty('data')){
    data.features.forEach(feature => {
        let neighborhood= scores.data.filter(s => s.Neighborhood== feature.properties.Neighborhood);
        if(neighborhood[0]== undefined){
          let city= scores.data.filter(s => s.City== feature.properties.City);
          if(city[0]== undefined){
            feature.properties= {...feature.properties, score: 0, favourite: false}

          }
          else{
            feature.properties= {...feature.properties, score: city[0].Score, favourite: false}

          }
        
        }
        else{
         feature.properties= {...feature.properties, score: neighborhood[0].Score, favourite: false}
 
        }
     
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

module.exports.setFavourites= (favourites, map, data)=> {
  if(favourites.length> 0){
      let favourite= favourites[favourites.length-1];
      let neighborhood= data.features.filter(f => f.properties.Neighborhood == favourite.Neighborhood);
      if(neighborhood[0]== undefined){
        let city= data.features.filter(f => f.properties.City== favourite.City || f.properties.City.includes(favourite.City));
        flyTo.handleFlyTo(map, '', 13, 8000, 0.3, '', city[0].properties.center.geometry.coordinates);
        city[0].properties.score= favourite.Score;
        city[0].properties.favourite= true;
        draw.drawPolygon(map, data, CITY);
      }
      else{
        fitBounds.fitBounds(map, neighborhood[0], "favourite");
        neighborhood[0].properties.favourite= true;
        draw.drawPolygon(map, data, NEIGHBORHOOD);
}     
  }
 
}

module.exports.checkFavourites= (favourites, map, data)=> {
  let favFeatures= data.features.filter(f => f.properties.favourite== true);
  let element;
  favFeatures.forEach(feature => {
    if(feature.properties.id.split('-').length== 3){
      element= favourites.filter(fav => fav.City== feature.properties.City);
      if(element[0]== undefined){
        feature.properties.favourite= false;
        // flyTo.handleFlyTo(map, '', 14, 8000, 0.3, '', feature.properties.center.geometry.coordinates);
        draw.drawPolygon(map, data, CITY);
  
      }    
    }
    if(feature.properties.id.split('-').length== 4){
      element= favourites.filter(fav => fav.Neighborhood== feature.properties.Neighborhood);
      if(element[0]== undefined){
        feature.properties.favourite= false;
        // fitBounds.fitBounds(map, feature, "favourite");
        draw.drawPolygon(map, data, NEIGHBORHOOD);

      }
    }
    
    
  })
  
}
