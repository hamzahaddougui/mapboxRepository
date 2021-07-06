import flyTo from '../../FlyTo/flyingTo';
import service from '../../services/fetching';
import draw from '../draw';
import fitBounds from '../../FitBounds/fitBounds';
import {COUNTY_HIGHLIGHTED, CITY_OTHER, CURRENT_CITY_CLICKED} from "./config";

module.exports.handleLayerClick= (
    map, data, e, flyToOptions, { sourceLayer, from }, targetLayer ) => {
    let features = [];
    let {flyMinZoom, flyMaxZoom, flyDuration, flySpeed, maxZoom, id}= flyToOptions;
    let polygonId= e.features[0].properties.polygonId.split('_');
    
    features = service.getFeatures(data.features, sourceLayer, from);
    
    draw.drawPolygon( 
      e.target, data, targetLayer, features
    );

    
    flyTo.handleFlyTo(map, flyMinZoom, flyMaxZoom, flyDuration, flySpeed, e, '');
    
    if(polygonId.length== 1 || polygonId.length== 4){
      fitBounds.fitBounds(map, e.features[0], 3000, 0.5, flyMaxZoom)
    }

    if(polygonId.length== 2 && flyToOptions== COUNTY_HIGHLIGHTED){
      fitBounds.fitBounds(map, e.features[0], 3000, 0.5, flyMaxZoom)
    }

    if(polygonId.length== 3 && flyToOptions== CITY_OTHER){
      fitBounds.fitBounds(map, e.features[0], 3000, 0.5, flyMaxZoom)

    }

    
    

  };