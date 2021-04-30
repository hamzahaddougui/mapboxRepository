import draw from '../draw';
import service from "../../services/fetching";

module.exports.mouseMove= (data, e, source, elementDrawed) => {
    let features = [];
    features = service.getFeatures(data.features, source, e.features[0].properties.polygonId);
    draw.drawPolygon(e.target, data, elementDrawed, features);
    e.target.getCanvas().style.cursor = "pointer";
    
}