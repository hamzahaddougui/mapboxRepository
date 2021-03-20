module.exports.handleFlyTo = (e, minZoom, maxZoom, duration, speed) => {
    e.target.flyTo({
      center: e.lngLat,
      minZoom,
      maxDuration: duration,
      zoom: maxZoom,
      curve: 1,
      easing: function (t) {
        return t;
      },
      speed,
      essential: true,
    });
  };