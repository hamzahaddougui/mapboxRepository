import poiData from "../data/Soccer.json";
// const img= '/IceSkating.png';

import list from "./symbol/list";

module.exports.displayPoi= (map) => {

    list.poiList.forEach(elem => {
        let {url, source, image, imageSrc, category}= elem;

        
        if(!map.getSource(image)){
        
            map.addSource(image,{
                type: "vector",
                url: "mapbox://"+url
            });

            
        }

        const img= "/map/POI/"+imageSrc;
    
            map.loadImage(img, (error, imageReturned) => {
                map.addImage(image+"_image", imageReturned);
                map.addLayer({
                    'id': image+"_layer",
                    'type': 'symbol',
                    'source': image,
                    'source-layer': source,
                    'layout': {
                        "icon-image": image+"_image",
                        "icon-size": 0.02,
                        "text-field": category,
                        "text-size": 0.03,
                        "text-offset": [0, 2],
                        "text-anchor": "bottom",
                        "visibility": "none"
                    }
                })
            })
    })
    
    
    console.log(map.getLayer('education_layer'))
}