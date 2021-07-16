import {REGION, COUNTY, CITY, NEIGHBORHOOD} from "./layer/config";

module.exports.drawBasics= (map) => {
    let elements= [
        {element: REGION},
        {element: COUNTY},
        {element: CITY},
        {element: NEIGHBORHOOD}];
    
    elements.forEach(e => {
        const {id, color, opacity, minZoom, maxZoom}= e.element;
        let sourceUrl, sourceLayer;
        if(id== 'region'){
            sourceUrl= 'mapbox://hamzahad.a4ljajby';
            sourceLayer= 'region-0uo691';
        }
        
        if(id== 'county'){
            sourceUrl= 'mapbox://hamzahad.aqg4cnur';
            sourceLayer= 'county-5l8ccs';
        }
    
        if(id== 'city'){
            sourceUrl= 'mapbox://hamzahad.16aufph0';
            sourceLayer= 'city-09lt06';
        }
    
        if(id== 'neighborhood'){
            sourceUrl= 'mapbox://hamzahad.9p6ca8ah';
            sourceLayer= 'neighb-2gkskn';
        }
            
        if(!map.getSource(id)){
            // let layerId= id+'-layer';
            map.addSource(id, {
                type: 'vector',
                url: sourceUrl,
                promoteId: 'id'
                });
    
                
            map.addLayer({
                    'id': id+'-layer', 
                    'type': "fill", 
                    'source': id,
                    'source-layer': sourceLayer, 
                    'paint': { 
                        "fill-color": '#E2E3F0', 
                        "fill-opacity": 0.2 
                             },
                    'minzoom': minZoom, 
                    'maxzoom': maxZoom, 
                    'filter': ["==", "$type", "Polygon"]
                })
    
                map.addLayer({
                    'id': id+'_outline', 
                    'type': "line", 
                    'source': id,
                    'source-layer': sourceLayer,
                    'paint': 
                    { 
                        "line-color": "rgba(50, 54, 67, 0.27)", 
                        "line-opacity": 1, 
                        "line-width": 1
                    },
                   'minzoom': minZoom, 
                   'maxzoom': maxZoom, 
                   'filter': ["==", "$type", "Polygon"] 
              })
            
        }
        
    })
    
      
       
       
}