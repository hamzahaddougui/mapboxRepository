module.exports.handleFlyTo = (map, minZoom, maxZoom, duration, speed, e, targetCenter) => {
  
  // if(e.target.getZoom()> minZoom) minZoom= e.target.getZoom()
    let center;
    if(e!= ''){
      center = JSON.parse(e.features[0].properties.center).geometry.coordinates

    }
    else{
      center= targetCenter
    }
    map.flyTo({
      // center: e.lngLat,
      // center: [e.features[0].properties.center.geometry.coordinates[0]-83.30318241957815,e.features[0].properties.center.coordinates[0][1]+27.863450414180377],
      center,
      // minZoom: e.target.getZoom(),
      maxDuration: duration,
      zoom: maxZoom,
      curve: 1,
      easing: function (t) {
        return t;
      },
      speed,
      essential: true
    });
  };