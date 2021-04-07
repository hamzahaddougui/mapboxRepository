import flyTo from '../../flyingTo';
import fetchFeatures from '../fetchFeatures';
import service from '../../services/fetching';
import draw from '../draw';

module.exports.handleLayerClick= (
    map, data, e, flyToOptions, { sourceLayer, from }, targetLayer ) => {
    let {flyMinZoom, flyMaxZoom, flyDuration, flySpeed}= flyToOptions;
    flyTo.handleFlyTo(map, flyMinZoom, flyMaxZoom, flyDuration, flySpeed, e, '');
    
    let features = [];
    features = fetchFeatures.getPolygonFeatures(data, service.getFeatures(data.features, sourceLayer, from));
    draw.drawPolygon( 
      e.target, data, targetLayer, features
    );
  };