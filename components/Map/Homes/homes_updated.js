import features from "./data/features";
const home_filter_icon= '/map/home_filter.png';

module.exports.drawHomes= (map) => {
   let homesFeatures= features.homesFeatures;

   if(!map.getSource('homes')){
    
    // add homes source
    map.addSource("homes", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": homesFeatures
        }
    })

    // add homes layer
    
    map.addLayer({
        id: 'homes_layer',
        source: 'homes',
        type: 'circle',
        paint: {
            "circle-color": 
            [
              'match', 
              ['get', 'status'],
              'matched',
              '#5D66FA',
              'favorite',
              '#ff0061',
              'black'
            ]
            
        },
        layout: {
            "visibility": "visible"
        }
    })


    // add homes filter layer
    
    map.loadImage(home_filter_icon, (error, image) => {
        if(error) console.log(error);

        map.addImage("filter_image", image);
        map.addLayer({
            id: 'homes_filter_layer',
            source: 'homes',
            type: 'symbol',
            layout: {
                "icon-image": "filter_image",
                "icon-size": 1.5,
                "text-field": "",
                "text-allow-overlap": true,
                "icon-allow-overlap": true,
                "visibility": "none"
            },
            paint: {
                "text-color": [
                              'match', 
                              ['get', 'status'],
                              'matched',
                              '#5D66FA',
                              'favorite',
                              '#ff0061',
                              'black'
                            ]
            }
        })
    })
    
   }
   
}