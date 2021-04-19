import {CITY, NEIGHBORHOOD} from "../polygon/layer/config";
import draw from "../polygon/draw";

module.exports.setFilters= (map, data)=> {

  data.features.forEach(feature => {
    feature.properties= {...feature.properties, score: 80, unity: 'm2'}
    
  });
    draw.drawPolygon(map, data, CITY);
    draw.drawPolygon(map, data, NEIGHBORHOOD);
    map.setLayoutProperty("city_score_layer", "text-field", ["concat", ["get", "score"], ["get", "unity"]])
    map.setLayoutProperty("neighborhood_score_layer", "text-field", ["concat", ["get", "score"], ["get", "unity"]])

    
}