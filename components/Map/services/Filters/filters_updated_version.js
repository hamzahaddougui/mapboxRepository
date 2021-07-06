import properties from './properties';
import layers from '../../layers/filters/list';
import symbol from "../../layers/symbol/list";

module.exports.setFilters= (map, currentZoom, filter) => {


let layerName;
let {selectedFilter}= filter;


properties.propArr.forEach(property => {
    layers.layerArr.forEach(layer => {
        let {name}= layer;
        let {shortName}= property;
        
        let otherLayers= symbol.symbolLayers;

        if(!selectedFilter){
            map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
            map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')
            otherLayers.forEach(other => {
             map.setLayoutProperty(other.layerName, 'visibility', 'visible')

            })
            return;
        }
        
        otherLayers.forEach(other => {
            map.setLayoutProperty(other.layerName, 'visibility', 'none')

           })

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