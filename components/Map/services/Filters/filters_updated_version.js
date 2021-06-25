import properties from './properties';
import layers from './layers';

module.exports.setFilters= (map, currentZoom, filter) => {

let layerName;
let {selectedFilter}= filter;


properties.propArr.forEach(property => {
    layers.layerArr.forEach(layer => {
        let {name}= layer;
        let {shortName}= property;
        
        if(!selectedFilter) return;
        
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

        map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')

        if(shortName== filterElem[0].shortName){
            map.setLayoutProperty(`${layerName}-${filterElem[0].shortName}`, 'visibility', 'visible');
            map.setLayoutProperty(`${layerName}-${filterElem[0].shortName}-marker`, 'visibility', 'visible')
        }
    })
    
})
    
}