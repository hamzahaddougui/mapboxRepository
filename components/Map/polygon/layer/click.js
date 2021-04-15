import flyTo from '../../flyingTo';
import service from '../../services/fetching';
import draw from '../draw';
import fitBounds from '../../fitBounds';
module.exports.handleLayerClick= (
    map, data, e, flyToOptions, { sourceLayer, from }, targetLayer ) => {
    let {flyMinZoom, flyMaxZoom, flyDuration, flySpeed}= flyToOptions;
    flyTo.handleFlyTo(map, flyMinZoom, flyMaxZoom, flyDuration, flySpeed, e, '');
    
    if(e.features[0].properties.id.split('-').length== 4){
      fitBounds.fitBounds(map, e.features[0], 5000, 0.5)
    }
    
    let features = [];
    features = service.getFeatures(data.features, sourceLayer, from);

    draw.drawPolygon( 
      e.target, data, targetLayer, features
    );
    
  };