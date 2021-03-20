import fetchFeatures from '../fetchFeatures';
import draw from '../draw';
import service from "../../services/fetching";
import data from "../../../Map/data/All_In_One.json";

module.exports.mouseMove= (e, source, elementDrawed, popup) => {
    let features = [];
    features = fetchFeatures.getPolygonFeatures(
      service.getFeatures(data.features, source, e.features[0].properties.id)
    );
    draw.drawPolygon(e.target, elementDrawed, features);
    e.target.getCanvas().style.cursor = "pointer";
    popup.setLngLat(e.lngLat).setHTML(e.features[0].properties.id).addTo(e.target);
    // map.moveLayer("region-highlighted-layer", "scores-layer");
}