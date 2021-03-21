module.exports.handleFlyTo = (e, minZoom, maxZoom, duration, speed) => {
  if (e.target.getZoom() > minZoom) minZoom = e.target.getZoom();
  e.target.flyTo({
    center: e.lngLat,
    minZoom,
    maxDuration: duration,
    zoom: maxZoom,
    curve: 0,
    easing: function (t) {
      return t;
    },
    speed,
    essential: true,
  });
};
