module.exports.handleFlyTo = (e, minZoom, maxZoom, duration, speed) => {
  
<<<<<<< HEAD:components/Map/flyingTo.js
  // if(e.target.getZoom()> minZoom) minZoom= e.target.getZoom()
  // if(minZoom== 6) minZoom= minZoom
=======
  if(e.target.getZoom()> minZoom) minZoom= e.target.getZoom()
>>>>>>> 28e2f56b524142cbc609fc056e90e5d771d0cbcb:src/components/Map/flyingTo.js
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