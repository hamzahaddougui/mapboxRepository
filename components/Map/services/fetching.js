import area from '@turf/area';
import center from '@turf/center';
import bbox from '@turf/bbox';

module.exports.getFeatures = (allFeatures, source, from=null) => {
    
  let feature;
  switch (source) {
    case 'region':
      feature= allFeatures.filter(f => f.properties.polygonId.split('_').length== 1);
      feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
      
      
        if(from!= null){
          feature= feature.filter(f => f.properties.polygonId== from);
        }
      
      break;
    case 'county':
        feature= allFeatures.filter(f => f.properties.polygonId.split('_').length== 2);
        feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
        


        if(from!= null){
          feature= feature.filter(f => f.properties.polygonId== from);
        }

        
        break;
      case 'city':
          feature= allFeatures.filter(f => f.properties.polygonId.split('_').length== 3);
          feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});

          
          if(from!= null){
            feature= feature.filter(f => f.properties.polygonId== from);
          }
          
        break;
      case 'neighborhood':
          feature= allFeatures.filter(f => f.properties.polygonId.split('_').length== 4);
          
          feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
          if(from!= null){
            feature= feature.filter(f => f.properties.polygonId== from);
          }
          
        break;

      case 'cityNeighb':
          feature= allFeatures.filter(f => f.properties.polygonId.split('_').length== 3 || f.properties.polygonId.split('_').length== 4);
          
          feature.forEach(f => f.properties= {...f.properties, surface: area(f), center: center(f), bounds: bbox(f)});
          if(from!= null){
            feature= feature.filter(f => f.properties.polygonId== from);
          }
          
        break;
        
        default:
      break;
  }
  
  
  return feature;

};
