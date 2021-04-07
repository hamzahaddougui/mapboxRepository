const INITIAL_COLOR= '#E2E3F0';
const HIGHLIGHT_COLOR= 'rgba(87,95,249,0.17)';

const REGION= {
    id: 'region',
    source: 'region',
    color: INITIAL_COLOR,
    opacity: 0.2,
    minZoom: 3,
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
    opacity: 1,
    minZoom: 3,
    maxZoom: 7,
    flyMinZoom: 7, 
    flyMaxZoom: 7, 
    flyDuration: 5000, 
    flySpeed: 0.5
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
    flyMinZoom: 7, 
    flyMaxZoom: 7, 
    flyDuration: 5000, 
    flySpeed: 0.5
}


const COUNTY_HIGHLIGHTED= {
    id: 'county-highlighted',
    source: 'county',
    color: HIGHLIGHT_COLOR,
    opacity: 1,
    minZoom: 7,
    maxZoom: 9,
    flyMinZoom: 7, 
    flyMaxZoom: 7, 
    flyDuration: 5000, 
    flySpeed: 0.5
}

const COUNTY_CLICKED= {
    id: 'county-clicked',
    source: 'county',
    color: HIGHLIGHT_COLOR,
    opacity: 0.8,
    minZoom: 7,
    maxZoom: 9,
    flyMinZoom: 7, 
    flyMaxZoom: 10, 
    flyDuration: 5000, 
    flySpeed: 0.5
}

const COUNTY_BORDERED= {
    id: 'county-bordered',
    source: 'county',
    color: HIGHLIGHT_COLOR,
    opacity: 0,
    minZoom: 9,
    maxZoom: 11,
    flyMinZoom: null, 
    flyMaxZoom: null, 
    flyDuration: null, 
    flySpeed: null
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
    flyMinZoom: 11.5, 
    flyMaxZoom: 12, 
    flyDuration: 5000, 
    flySpeed: 0.5
}

const CITY_OTHER= {
    id: 'city-other',
    source: 'city',
    color: HIGHLIGHT_COLOR,
    opacity: 1,
    minZoom: 9,
    maxZoom: 11,
    flyMinZoom: 9, 
    flyMaxZoom: 10.9, 
    flyDuration: 5000, 
    flySpeed: 0.5
}

const CITY_BORDERED= {
    id: 'city-bordered',
    source: 'city',
    color: HIGHLIGHT_COLOR,
    opacity: 0,
    minZoom: 11,
    maxZoom: 24,
    flyMinZoom: null, 
    flyMaxZoom: null, 
    flyDuration: null, 
    flySpeed: null
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
    flySpeed: 0.5
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
    flySpeed: 0.5
}

const NEIGHBORHOOD_HIGHLIGHTED= {
    id: 'neighborhood-highlighted',
    source: 'neighborhood',
    color: HIGHLIGHT_COLOR,
    opacity: 1,
    minZoom: 11,
    maxZoom: 24,
    flyMinZoom: 11, 
    flyMaxZoom: 15, 
    flyDuration: 5000, 
    flySpeed: 0.5
}

export {
    REGION, REGION_HIGHLIGHTED, REGION_CLICKED, 
    COUNTY, COUNTY_HIGHLIGHTED, COUNTY_CLICKED, COUNTY_BORDERED,
    CITY, CITY_OTHER, CURRENT_CITY, CURRENT_CITY_CLICKED, CITY_BORDERED,
    NEIGHBORHOOD, NEIGHBORHOOD_HIGHLIGHTED, CURRENT_NEIGHBORHOOD
}

