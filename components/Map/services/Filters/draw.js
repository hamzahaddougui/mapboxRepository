import layers from './layers';
import properties from './properties';

module.exports.drawFilterLayers= (map) => {
    layers.layerArr.map((obj) => {

        map.addSource(`${obj.name}-source`, {
          'type': 'vector',
          'url': `mapbox://${obj.tileSetId}`
        });
        properties.propArr.map((filterObj)=> {
          // add layer
          map.addLayer({
            'id': `${obj.name}-${filterObj.shortName}`,
            'type': 'fill',
            'source': `${obj.name}-source`,
            'source-layer': `${obj.sourceName}`,
            'minZoom': `${obj.minZoom}`,
            'maxZoom': `${obj.maxZoom}`,
            'paint': {
                'fill-outline-color': 'rgba(199,24,54,1)',
                'fill-color': [
                    'step',
                    ['number', ['get', `${filterObj.shortName}`]],
                    '#808080',
                    // 0, '#808080',
                    20, '#002EFF',
                    40, '#00F0FF',
                    60, '#00FF2A',
                    80, '#ECFF00',
                    100, '#FFB900',
                ],
                'fill-opacity': 0.5,
            },
            'layout': {
              'visibility': 'none'
            },
          });
          // add symbolic layer markers
          map.addLayer({
            id: `${obj.name}-${filterObj.shortName}-marker`,
            type: 'symbol',
            'source': `${obj.name}-source`,
            'source-layer': `${obj.sourceName}`,
            'minZoom': `${obj.minZoom}`,
            'maxZoom': `${obj.maxZoom}`,
            layout: {
              "icon-size": 0.068,
              "icon-offset": [-5, -50],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, -1],
              "text-anchor": "top",
              "text-size": 11,
              "icon-allow-overlap": true,
              "text-field": ["concat", ["get", `${filterObj.shortName}`], "%"],
            //   "icon-image": [
            //   'case',
            //     ['<=', ["get", "town_area"], 20],
            //     "image_20",
            //     ['<=', ["get", "town_area"], 40],
            //     "image_40",
            //     ['<=', ["get", "town_area"], 60],
            //     "image_60",
            //     ['<=', ["get", "town_area"], 80],
            //     "image_80",
            //     [">", ["get", "town_area"], 80],
            //     "image_100",
            //     "image_100"
            //   ],
              'visibility': 'none'
            }
          });
        });
      });
}
