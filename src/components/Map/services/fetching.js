module.exports.getFeatures = (allFeatures, source, from=null) => {
    
  let feature;
  let elements= [];
  let ids= [];
  switch (source) {
    case 'region':
      feature= allFeatures.filter(f => f.properties.id.split('-').length== 1);
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
          if(from!= null){
            feature= feature.filter(f => f.properties.id.startsWith(from));
          }
          let featureLength= feature.length;
          feature.forEach(f => {
            let position= (feature.indexOf(f)/ featureLength)* 100;
            if(position<= 20){
              f.properties= {...f.properties, score: 100, position};
              
            }
            if(position> 20 && position<=40){
              f.properties= {...f.properties, score: 80, position};
              
            }
            if(position> 40 && position<=60){
              f.properties= {...f.properties, score: 60, position};
              
            }
            if(position> 60 && position<=80){
              f.properties= {...f.properties, score: 40, position};
              
            }
            if(position> 80 && position<=100){
              f.properties= {...f.properties, score: 20, position};
              
            }
            
            
          });
          feature= feature.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0));
          
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