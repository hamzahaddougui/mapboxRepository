import area from '@turf/area';
import center from '@turf/center';
import bbox from '@turf/bbox';

module.exports.getFeatures = (allFeatures, source, from=null) => {
    
  let feature;
  switch (source) {
    case 'region':
      feature= allFeatures.filter(f => f.properties.id.split('-').length== 1);
      feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
      
      
        if(from!= null){
          feature= feature.filter(f => f.properties.id== from);
        }
      
      break;
    case 'county':
        feature= allFeatures.filter(f => f.properties.id.split('-').length== 2);
        feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
        
        let min= feature[0].properties.surface;
        let max= min;
        feature.forEach(f => {
          if(f.properties.surface< min) min= f.properties.surface;
          if(f.properties.surface> max) max= f.properties.surface;
          })

        feature.forEach(f =>  f.properties= {...f.properties, min, max})
      
        if(from!= null){
          feature= feature.filter(f => f.properties.id.startsWith(from));
        }

        break;
      case 'city':
          feature= allFeatures.filter(f => f.properties.id.split('-').length== 3);
          feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});

          if(from!= null){
            feature= feature.filter(f => f.properties.id.startsWith(from));
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
          
          
        break;
    default:
      break;
  }
  
  
  return feature;

};
