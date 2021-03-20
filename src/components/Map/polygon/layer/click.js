import flyTo from '../../flyingTo';
import fetchFeatures from '../fetchFeatures';
import service from '../../services/fetching';
import data from '../../data/All_In_One.json';
import draw from '../draw';

module.exports.handleLayerClick= (
    e, flyToOptions, { sourceLayer, from }, targetLayer ) => {
    let {flyMinZoom, flyMaxZoom, flyDuration, flySpeed}= flyToOptions;
    flyTo.handleFlyTo(e, flyMinZoom, flyMaxZoom, flyDuration, flySpeed);
    let features = [];
    features = fetchFeatures.getPolygonFeatures(service.getFeatures(data.features, sourceLayer, from));
    draw.drawPolygon( 
      e.target, targetLayer, features
    );
  };