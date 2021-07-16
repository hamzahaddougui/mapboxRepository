
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
        let cityNeighbFeatures= data.features.filter(f => f.properties.polygonId.split('_').length== 3 || f.properties.polygonId.split('_').length== 4);
        let cityNeighbGeojson= {
          type: "FeatureCollection",
          features: cityNeighbFeatures
        }

        map.getSource('cityNeighb_bis').setData(cityNeighbGeojson);
      }
     
    else{
        let geojson= {
          type: "FeatureCollection",
          features: ""
        }
        
        let cityNeighbFeatures= data.features.filter(f => (f.properties.polygonId.split('_').length== 4 ||
        f.properties.polygonId.split('_').length== 3) && f.properties.favourite== false && f.properties.flipped== false);
        cityNeighbFeatures.forEach(feature => {
          feature.properties.Score= 0;
        })
        geojson.features= cityNeighbFeatures;
        map.getSource('cityNeighb_bis').setData(geojson);

      }


      
    return data;
  }