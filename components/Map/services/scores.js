import draw from "../polygon/draw";
import {CITY, NEIGHBORHOOD, CITY_NEIGHBORHOOD} from "../polygon/layer/config";

module.exports.setScores= (map, scores, data) => {
    let cityFeatures, neighbFeatures;
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
            
              
          
       
     
     
    //  data.features.sort((a, b)=> b.properties.Score - a.properties.Score);
    //  let length= data.features.length;
    //  data.features.forEach(f => {
    //         let position= (data.features.indexOf(f)/ length)* 100;
    //         f.properties= {...f.properties, position}
    //       })
    
     
        })
        cityFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3);
        let cityGeojson= {
          type: "FeatureCollection",
          features: cityFeatures
        }

        neighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 4);
        let neighbGeojson= {
          type: "FeatureCollection",
          features: neighbFeatures
        }

        map.getSource('city_bis').setData(cityGeojson);
        map.getSource('neighborhood_bis').setData(neighbGeojson);
        // draw.drawPolygon(map, data, CITY);
        // draw.drawPolygon(map, data, NEIGHBORHOOD);
    }
     
    else{
        let geojson= {
          type: "FeatureCollection",
          features: ""
        }
        let cityFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3 && f.properties.favourite== false && f.properties.flipped== false);
        cityFeatures.forEach(feature => {
          feature.properties.Score= 0;
        })

        geojson.features= cityFeatures
        map.getSource('city_bis').setData(geojson);

        let neighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 4 && f.properties.favourite== false && f.properties.flipped== false);
        neighbFeatures.forEach(feature => {
          feature.properties.Score= 0;
        })
        geojson.features= neighbFeatures;
        map.getSource('neighborhood_bis').setData(geojson);

      }
    return data;
  }