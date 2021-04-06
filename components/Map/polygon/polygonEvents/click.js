import layerClick from '../layer/click';

module.exports.click= (map, data, e, flyToOptions, source, id, target) => {
    layerClick.handleLayerClick(
      map,
      data, 
      e,
      flyToOptions,
      { sourceLayer: source, from: id},
      target
    );
    // map.moveLayer("region-clicked-layer", "scores-layer");
  }