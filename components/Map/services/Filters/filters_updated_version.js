import properties from './properties';

module.exports.setFilters= (map, currentZoom, filter) => {

let name;
let {selectedFilter}= filter;


properties.propArr.forEach(property => {
    let {shortName}= property;
    let filterElem= properties.propArr.filter(p => p.longName.toUpperCase()== selectedFilter.toUpperCase());
    
    
    if(currentZoom>=1 && currentZoom<7){
        name= 'region';
        // map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
        // map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')
        map.setLayoutProperty(`county-${filterElem[0].shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`county-${filterElem[0].shortName}-marker`, 'visibility', 'none')
        map.setLayoutProperty(`city-${filterElem[0].shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`city-${filterElem[0].shortName}-marker`, 'visibility', 'none')
        
        map.setLayoutProperty(`${name}-${filterElem[0].shortName}`, 'visibility', 'visible');
        map.setLayoutProperty(`${name}-${filterElem[0].shortName}-marker`, 'visibility', 'visible')
    }

    if(currentZoom>=7 && currentZoom<9){
        name= 'county';
        // map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
        // map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')
        map.setLayoutProperty(`region-${filterElem[0].shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`region-${filterElem[0].shortName}-marker`, 'visibility', 'none')
        map.setLayoutProperty(`city-${filterElem[0].shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`city-${filterElem[0].shortName}-marker`, 'visibility', 'none')
        
        map.setLayoutProperty(`${name}-${filterElem[0].shortName}`, 'visibility', 'visible');
        map.setLayoutProperty(`${name}-${filterElem[0].shortName}-marker`, 'visibility', 'visible')
    }

    if(currentZoom>=9 && currentZoom<12){
        name= 'city';
        // map.setLayoutProperty(`${name}-${shortName}`, 'visibility', 'none');
        // map.setLayoutProperty(`${name}-${shortName}-marker`, 'visibility', 'none')
        map.setLayoutProperty(`region-${filterElem[0].shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`region-${filterElem[0].shortName}-marker`, 'visibility', 'none')
        map.setLayoutProperty(`county-${filterElem[0].shortName}`, 'visibility', 'none');
        map.setLayoutProperty(`county-${filterElem[0].shortName}-marker`, 'visibility', 'none')
        
        map.setLayoutProperty(`${name}-${filterElem[0].shortName}`, 'visibility', 'visible');
        map.setLayoutProperty(`${name}-${filterElem[0].shortName}-marker`, 'visibility', 'visible')
    }
})
    
}