module.exports.fitBounds= (map, feature, duration, speed, maxZoom, favourite= null)=> {
    let bounds= feature.properties.bounds;
    if(favourite== null){
        bounds= bounds.split(',');
        bounds[0]= bounds[0].replace("[", "");
        bounds[3]= bounds[3].replace("]", "");
        
    }
      bounds= [[bounds[0], bounds[1]], [bounds[2], bounds[3]]];
      map.fitBounds(bounds, { 
        // linear: false, 
        // easing: function (t) {
        // return t; }, 
        // offset:[8, 8], 
        duration,
        speed,
        maxZoom
      });
}