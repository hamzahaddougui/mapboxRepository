
module.exports.getPolygonFeatures = function (data, elements = []){
    let features = [];
    elements.elements.map(el => {
      const { value } = el;
      let floridaFeature = data.features.filter(feature => feature.properties.id == value);
      features.push(floridaFeature);
    });
    features = features.map(f => f[0]);
    return features;
};

