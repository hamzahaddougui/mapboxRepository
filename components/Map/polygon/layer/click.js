import flyTo from '../../flyingTo';
import service from '../../services/fetching';
import draw from '../draw';
import fitBounds from '../../fitBounds';
import {COUNTY_HIGHLIGHTED, CITY_OTHER, CURRENT_CITY_CLICKED} from "./config";

module.exports.handleLayerClick= (
    map, data, e, flyToOptions, { sourceLayer, from }, targetLayer ) => {
    let features = [];
    let {flyMinZoom, flyMaxZoom, flyDuration, flySpeed, maxZoom}= flyToOptions;
    let id= e.features[0].properties.polygonId.split('_');
    
    features = service.getFeatures(data.features, sourceLayer, from);
    
    draw.drawPolygon( 
      e.target, data, targetLayer, features
    );  

    flyTo.handleFlyTo(map, flyMinZoom, flyMaxZoom, flyDuration, flySpeed, e, '');
    
    if(id.length== 1 || id.length== 4){
      fitBounds.fitBounds(map, e.features[0], 3000, 0.5, flyMaxZoom)
    }

    if(id.length== 2 && flyToOptions== COUNTY_HIGHLIGHTED){
      fitBounds.fitBounds(map, e.features[0], 3000, 0.5, flyMaxZoom)
    }

    if(id.length== 3 && flyToOptions== CITY_OTHER){
      fitBounds.fitBounds(map, e.features[0], 3000, 0.5, flyMaxZoom)

    }

    
    

  };