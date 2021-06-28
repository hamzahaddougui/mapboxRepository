import properties from './properties';
import layers from './layers';

module.exports.setFilters= (map, currentZoom, filter) => {

console.log("filter enter")

let layerName;
let {selectedFilter}= filter;


properties.propArr.forEach(property => {
    layers.layerArr.forEach(layer => {
        let {name}= layer;
        let {shortName}= property;
        
        if(!selectedFilter){
            map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
            map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')
            map.setLayoutProperty('city_score_layer', 'visibility', 'visible')
            map.setLayoutProperty('neighborhood_score_layer', 'visibility', 'visible')
            map.setLayoutProperty('city_flipped_layer', 'visibility', 'visible')
            map.setLayoutProperty('neighborhood_flipped_layer', 'visibility', 'visible')
            map.setLayoutProperty('city_favourite_layer', 'visibility', 'visible')
            map.setLayoutProperty('neighborhood_favourite_layer', 'visibility', 'visible')
            return;
        }
        
        map.setLayoutProperty('city_score_layer', 'visibility', 'none')
        map.setLayoutProperty('neighborhood_score_layer', 'visibility', 'none')
        map.setLayoutProperty('city_flipped_layer', 'visibility', 'none')
        map.setLayoutProperty('neighborhood_flipped_layer', 'visibility', 'none')
        map.setLayoutProperty('city_favourite_layer', 'visibility', 'none')
        map.setLayoutProperty('neighborhood_favourite_layer', 'visibility', 'none')

        let filterElem= properties.propArr.filter(p => p.longName.toUpperCase()== selectedFilter.toUpperCase());
        
        if(!filterElem[0]) return;
    
        
        if(currentZoom>=1 && currentZoom<7){
            layerName= 'region';
        }
    
        if(currentZoom>=7 && currentZoom<9){
            layerName= 'county';
        }
    
        if(currentZoom>=9 && currentZoom<12){
            layerName= 'city';
        }

        if(currentZoom>=12){
            layerName= 'neighborhood';
        }

        map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')

        if(shortName== filterElem[0].shortName){
            map.setLayoutProperty(`${layerName}-${filterElem[0].shortName}`, 'visibility', 'visible');
            map.setLayoutProperty(`${layerName}-${filterElem[0].shortName}-marker`, 'visibility', 'visible')
        }
    })
    
})
    
}