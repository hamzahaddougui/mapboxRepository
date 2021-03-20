module.exports.filterPOIs= (allFeatures, filter) => {
return allFeatures.filter(f => f.properties.subCategory== filter);
}