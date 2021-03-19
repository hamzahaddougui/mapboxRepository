import layerClick from '../layer/click';

module.exports.click= (data, e, flyToOptions, source, id, target) => {
    layerClick.handleLayerClick(
      data, 
      e,
      flyToOptions,
      { sourceLayer: source, from: id},
      target
    );
    // map.moveLayer("region-clicked-layer", "scores-layer");
  }