import layerClick from '../layer/click';

module.exports.click= (e, flyToOptions, source, id, target) => {
    layerClick.handleLayerClick(
      e,
      flyToOptions,
      { sourceLayer: source, id},
      target
    );
    // map.moveLayer("region-clicked-layer", "scores-layer");
  }