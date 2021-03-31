import fetchFeatures from '../fetchFeatures';
import draw from '../draw';
import service from "../../services/fetching";

module.exports.mouseMove= (data, e, source, elementDrawed) => {
    let features = [];
    features = fetchFeatures.getPolygonFeatures(data,
      service.getFeatures(data.features, source, e.features[0].properties.id)
    );
    draw.drawPolygon(e.target, data, elementDrawed, features);
    e.target.getCanvas().style.cursor = "pointer";
    // map.moveLayer("region-highlighted-layer", "scores-layer");
}