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
            // otherLayers= symbol.symbolLayers;
            map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
            map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')
            
            // let visibleLayers= [];
            // if(currentZoom>= 1 && currentZoom<7) visibleLayers= otherLayers.splice(0, 3);
            // if(currentZoom>= 7 && currentZoom<8.8) visibleLayers= otherLayers.splice(0, 4);
            // if(currentZoom>= 8.8 && currentZoom<10) visibleLayers= otherLayers.splice(0, 5);
            // if(currentZoom>= 10) visibleLayers= otherLayers;
            // visibleLayers.forEach(visible => {
            //             map.setLayoutProperty(visible.layerName, 'visibility', 'visible')

            //             })

            otherLayers.forEach(other => {
                map.setLayoutProperty(other.layerName, 'visibility', 'visible')
    
               })
            return;
        }

        // otherLayers= symbol.symbolLayers;
        
        otherLayers.forEach(other => {
            map.setLayoutProperty(other.layerName, 'visibility', 'none')

           })

        let filterElem= properties.propArr.filter(p => p.longName.toUpperCase()== selectedFilter.toUpperCase());
        
        if(!filterElem[0]) return;
    
        
        if(currentZoom>=1 && currentZoom<7){
            layerName= 'region';
        }
    
        if(currentZoom>=7 && currentZoom<8.8){
            layerName= 'county';
        }
    
        if(currentZoom>=8.8 && currentZoom<10){
            layerName= 'city';
        }

        if(currentZoom>=10){
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