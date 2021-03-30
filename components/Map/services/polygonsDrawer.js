const createPolygons = (
  polygons,
  map,
  sourceName,
  layerColor,
  layerOpacity,
  layerMinZoom,
  layerMaxZoom,
  features = null,
) => {
  let geojson = {
    type: "FeatureCollection",
    features: [],
  };

  if (features == null) {
    features = drawPolygons(service.getFeatures(polygons.features, sourceName));
    geojson.features = features;
  }
  if (!map.getSource(sourceName)) {
    map.addSource(sourceName, {
      type: "geojson",
      data: geojson,
    });

    let fillLayer = {};
    if (sourceName == "neighborhood") {
      fillLayer = layerShape.fillLayer(
        sourceName + "-layer",
        sourceName,
        "#E2E3F0",
        [
          "interpolate",
          ["linear"],
          ["zoom"],
          11,
          ["case", ["<=", ["get", "position"], 20], 0.4, 0],
          11.2,
          ["case", ["<=", ["get", "position"], 40], 0.4, 0],
          11.4,
          ["case", ["<=", ["get", "position"], 60], 0.4, 0],
          11.6,
          ["case", ["<=", ["get", "score"], 80], 0.4, 0],
          11.8,
          ["case", ["<=", ["get", "score"], 100], 0.4, 0],
        ],
        layerMinZoom,
        layerMaxZoom,
        ["==", "$type", "Polygon"],
      );
      map.addLayer(fillLayer);

      map.loadImage(marker, (error, image) => {
        if (error) throw error;
        map.addImage("score-marker", image, { sdf: true });
      });
    } else {
      fillLayer = layerShape.fillLayer(
        sourceName + "-layer",
        sourceName,
        layerColor,
        layerOpacity,
        layerMinZoom,
        layerMaxZoom,
        ["==", "$type", "Polygon"],
      );
      map.addLayer(fillLayer);
    }

    let lineLayer = layerShape.lineLayer(
      sourceName + "-layer-outline",
      sourceName,
      "#303EA6",
      1,
      [
        "case",
        ["==", sourceName, "region"],
        2,
        ["==", sourceName, "region-highlighted"],
        3,
        ["==", sourceName, "region-clicked"],
        4,
        ["==", sourceName, "current-county"],
        2,
        ["==", sourceName, "current-city"],
        2,
        ["==", sourceName, "current-neighborhood"],
        2,
        0.5,
      ],
      layerMinZoom,
      layerMaxZoom,
      ["==", "$type", "Polygon"],
    );
    map.addLayer(lineLayer);
  } else {
    geojson.features = features;
    map.getSource(sourceName).setData(geojson);
  }
};

drawPolygons = function (polygons, elements = []) {
  let features = [];
  elements.elements.map(el => {
    const { value } = el;
    let floridaFeature = polygons.features.filter(feature => feature.properties.id == value);
    features.push(floridaFeature);
  });
  features = features.map(f => f[0]);
  return features;
};

export default { createPolygons, drawPolygons };
