
module.exports.drawBasics= (map, element) => {
    const {id, color, opacity, minZoom, maxZoom}= element;
    let sourceUrl, sourceLayer;
    if(id== 'region'){
        sourceUrl= 'mapbox://hamzahad.a0j93o6v';
        sourceLayer= 'region-9xlonc';
    }
    
    if(id== 'county'){
        sourceUrl= 'mapbox://hamzahad.5775wvmg';
        sourceLayer= 'county-3dm9l0';
    }

    if(id== 'city'){
        sourceUrl= 'mapbox://hamzahad.3yut0uak';
        sourceLayer= 'city-dhmtj5';
    }

    if(id== 'neighborhood'){
        sourceUrl= 'mapbox://hamzahad.bu9r9sxz';
        sourceLayer= 'neighb-9sq7jo';
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
    
      
       
       
}