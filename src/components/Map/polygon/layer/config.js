const INITIAL_COLOR= '#E2E3F0';
const HIGHLIGHT_COLOR= 'rgba(87,95,249,0.17)';

const REGION= {
    id: 'region',
    source: 'region',
    color: INITIAL_COLOR,
    opacity: 0.2,
    minZoom: 5,
    maxZoom: 7,
    flyMinZoom: null, 
    flyMaxZoom: null, 
    flyDuration: null, 
    flySpeed: null
}

const REGION_HIGHLIGHTED= {
    id: 'region-highlighted',
    source: 'region',
    color: HIGHLIGHT_COLOR,
    opacity: 0.4,
    minZoom: 5,
    maxZoom: 7,
    flyMinZoom: 6, 
    flyMaxZoom: 7.5, 
    flyDuration: 5000, 
    flySpeed: 0.4
}

const REGION_CLICKED= {
    id: 'region-clicked',
    source: 'region',
    color: HIGHLIGHT_COLOR,
    opacity: 0,
    minZoom: 7,
    maxZoom: 9,
    flyMinZoom: null, 
    flyMaxZoom: null, 
    flyDuration: null, 
    flySpeed: null
}

const COUNTY= {
    id: 'county',
    source: 'county',
    color: INITIAL_COLOR,
    opacity: 0.2,
    minZoom: 7,
    maxZoom: 9,
    flyMinZoom: 6.8, 
    flyMaxZoom: 7, 
    flyDuration: 9000, 
    flySpeed: 0.5
}


const COUNTY_HIGHLIGHTED= {
    id: 'county-highlighted',
    source: 'county',
    color: HIGHLIGHT_COLOR,
    opacity: 0.4,
    minZoom: 7,
    maxZoom: 9,
    flyMinZoom: 6.8, 
    flyMaxZoom: 7, 
    flyDuration: 9000, 
    flySpeed: 0.5
}

const COUNTY_CLICKED= {
    id: 'county-clicked',
    source: 'county',
    color: HIGHLIGHT_COLOR,
    opacity: 0.4,
    minZoom: 7,
    maxZoom: 9,
    flyMinZoom: 7, 
    flyMaxZoom: 9, 
    flyDuration: 9000, 
    flySpeed: 0.2
}

const CITY= {
    id: 'city',
    source: 'city',
    color: INITIAL_COLOR,
    opacity: 0.2,
    minZoom: 9,
    maxZoom: 11,
    flyMinZoom: null, 
    flyMaxZoom: null, 
    flyDuration: null, 
    flySpeed: null
}

const CURRENT_CITY= {
    id: 'current-city',
    source: 'city',
    color: HIGHLIGHT_COLOR,
    opacity: 0.4,
    minZoom: 9,
    maxZoom: 11,
    flyMinZoom: null, 
    flyMaxZoom: null, 
    flyDuration: null, 
    flySpeed: null
}

const CURRENT_CITY_CLICKED= {
    id: 'current-city-clicked',
    source: 'city',
    color: null,
    opacity: null,
    minZoom: null,
    maxZoom: null,
    flyMinZoom: 11, 
    flyMaxZoom: 12, 
    flyDuration: 9000, 
    flySpeed: 0.2
}

const CITY_OTHER= {
    id: 'city-other',
    source: 'city',
    color: HIGHLIGHT_COLOR,
    opacity: 0.4,
    minZoom: 9,
    maxZoom: 11,
    flyMinZoom: 9, 
    flyMaxZoom: 9, 
    flyDuration: 9000, 
    flySpeed: 0.4
}

const NEIGHBORHOOD= {
    id: 'neighborhood',
    source: 'neighborhood',
    color: INITIAL_COLOR,
    opacity: 0.2,
    minZoom: 11,
    maxZoom: 24,
    flyMinZoom: 11, 
    flyMaxZoom: 15, 
    flyDuration: 5000, 
    flySpeed: 0.4
}

const CURRENT_NEIGHBORHOOD= {
    id: 'current-neighborhood',
    source: 'neighborhood',
    color: HIGHLIGHT_COLOR,
    opacity: 0.4,
    minZoom: 11,
    maxZoom: 24,
    flyMinZoom: 11, 
    flyMaxZoom: 15, 
    flyDuration: 5000, 
    flySpeed: 0.4
}

const NEIGHBORHOOD_HIGHLIGHTED= {
    id: 'neighborhood-highlighted',
    source: 'neighborhood',
    color: HIGHLIGHT_COLOR,
    opacity: 0.4,
    minZoom: 11,
    maxZoom: 24,
    flyMinZoom: 11, 
    flyMaxZoom: 15, 
    flyDuration: 5000, 
    flySpeed: 0.4
}

export {
    REGION, REGION_HIGHLIGHTED, REGION_CLICKED, 
    COUNTY, COUNTY_HIGHLIGHTED, COUNTY_CLICKED,
    CITY, CITY_OTHER, CURRENT_CITY, CURRENT_CITY_CLICKED,
    NEIGHBORHOOD, NEIGHBORHOOD_HIGHLIGHTED, CURRENT_NEIGHBORHOOD
}

