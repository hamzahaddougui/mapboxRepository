import flyTo from '../../flyingTo';
import fetchFeatures from '../fetchFeatures';
import service from '../../services/fetching';
import draw from '../draw';

module.exports.handleLayerClick= (
    data, e, flyToOptions, { sourceLayer, from }, targetLayer ) => {
    let {flyMinZoom, flyMaxZoom, flyDuration, flySpeed}= flyToOptions;
    flyTo.handleFlyTo(e, flyMinZoom, flyMaxZoom, flyDuration, flySpeed);
    
    let features = [];
    features = fetchFeatures.getPolygonFeatures(data, service.getFeatures(data.features, sourceLayer, from));
    // console.log(features);
    draw.drawPolygon( 
      e.target, data, targetLayer, features
    );
  };