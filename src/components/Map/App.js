import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import data from './data/All_In_One.json';
import PoiData from './data/Schools.json';
import image from './assets/schools.png';
import PoiCard from './components/card/card';
import DeleteIcon from '@material-ui/icons/Delete';

class App extends Component {
  state = { 
    highlightedElements : [
      
      {
        elements : [
          {
            type: 'id',
            value: 'Southwest Florida'
          },
          {
            type: 'id',
            value: 'Central West Florida'
          }/* ,
          {
            type: 'id',
            value: 'South Florida-Miami_Dade-Miami'
          } */
         ] ,
        style : {
          id: ['Southwest Florida','Central West Florida'],
          color: '#c81414',
          opacity: 0.4 
        }
      }/* ,
      {
        elements : [
          
          {
            type: 'id',
            value: 'South Florida-Miami_Dade-Homestead'
          }
          ,
          {
            type: 'id',
            value: 'Northeast Florida-Flagler-Palm Coast'
          },
          {
            type: 'id',
            value: 'South Florida'
          }
         ] ,
        style : {
          id: ['South Florida-Miami_Dade-Homestead','Northeast Florida-Flagler-Palm Coast','South Florida'],
          color: '#888888',
          opacity: 0.4 
        }
      },
      {
        elements : [
          {
          type: 'id',
          value: 'South Florida-Miami_Dade-Miami-79th Street'
          },
          {
            type: 'id',
            value: 'South Florida-Miami_Dade-Miami-36th Street Strip'
            }
        ],
        style : {
          id: ['South Florida-Miami_Dade-Miami-79th Street','South Florida-Miami_Dade-Miami-36th Street Strip'] ,
          color: '#46873b',
          opacity: 0.4 
        }
      } */
      

    ],
    image: '',
    mapObject: '',
    cardObject: {
      name: '',
      county: '',
      city: '',
      adress: '',
      phone: '',
      type: '',
     
    },
    poiCardVisibility: 'none'
    
    
   }

  
  componentDidMount(){
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtemFoYWQiLCJhIjoiY2trY2YybmozMGo3bzJ1b2FpcTh4ZmdpeiJ9.urpUJIK3zKrxCaEKXNe9Rw';
    let map = new mapboxgl.Map({
    container: 'map' , // container id
    style: 'mapbox://styles/hamzahad/ckkcgj23f03zs17nms6nmoet8', // style URL
    center: [-83.12740247113558, 29.26252966640054], // starting position [lng, lat]
    zoom: 5 // starting zoom
    });

    this.setState({mapObject: map});
    let {highlightedElements} = this.state;
      
    map.on('load', ()=> {
      /* let features = this.showHighlightedOnMap(highlightedElements);
      let styleElement = {};
      features.map(feature => {
        highlightedElements.map(el => {
          if(el.style.id.includes(feature[0].properties.id)) styleElement = el.style;
        })
        let {color, opacity} = styleElement;
        let {id} = feature[0].properties;
        map.addSource(id,{
          'type': 'geojson',
          'data': {
            'type' : 'FeatureCollection',
            'features' : feature
          }
        });

        map.addLayer({
          'id': id+'-polygon',
          'type': 'fill',
          'source': id,
          'paint': {
            'fill-color': color,
            'fill-opacity': opacity
          },
          'filter': ['==', '$type', 'Polygon']
        }
        );

        this.showPoiMarkers();
        
      }) */
      

      let features = this.showHighlightedOnMap(highlightedElements);
      map.addSource('regions',{
        'type': 'geojson',
        'data': {
          'type' : 'FeatureCollection',
          'features' : features
        }
      });

      
      map.addLayer({
        'id': 'regions-layer',
        'type': 'fill',
        'source': 'regions',
        'source-layer': 'regions',
        'paint': {
          'fill-color': '#c81414',
          'fill-opacity': 0.4
        },
        'filter': ['==', '$type', 'Polygon']
      }
      );

      console.log(map.getLayer('regions-layer'));
      
     
    }); 
    
    let highElemIds = ['Southwest Florida','Central West Florida','South Florida'];
    let elements= [];
    let ids= [];
    let element= {};
    let color= '';        
    highElemIds.forEach(highElemId => {
      map.on('click', highElemId+'-polygon', (e) =>{
        let {id}= e.features[0].properties;
        data.features.forEach(f => {
          let featureId= f.properties.id;
          if(featureId.startsWith(id)) {
            let result= featureId.split('-');
            
            switch (result.length) {
              case 2:
                elements.push({id: 'county', value: featureId});
                ids.push(featureId);
                color= '#c214c8';
                console.log('county');
                break; 
              case 3:
                elements.push({id: 'city', value: featureId});
                ids.push(featureId);
                color= '#14c835';
                console.log('city');

                break;
              /* case 4:
                elements.push({id: 'neighborhood', value: featureId});
                ids.push(featureId);
                break; */

              default:
                break;
            }
            element= {
              elements,
              style: {
                id: ids,
                color,
                opacity: 0.4
              }
            };
            
          }
        })
        highlightedElements.push(element);
        this.setState({highlightedElements});
        let features = this.showHighlightedOnMap(highlightedElements);
        let styleElement = {};
        features.map(feature => {
          highlightedElements.map(el => {
            if(el.style.id.includes(feature[0].properties.id)) styleElement = el.style;
          })
          let {color, opacity} = styleElement;
          let {id} = feature[0].properties;
          if(map.loaded()){
            if(!map.getSource(id)){
              map.addSource(id,{
                'type': 'geojson',
                'data': {
                  'type' : 'FeatureCollection',
                  'features' : feature
                }
              });
      
              map.addLayer({
                'id': id+'-polygon',
                'type': 'fill',
                'source': id,
                'paint': {
                  'fill-color': color,
                  'fill-opacity': opacity
                },
                'filter': ['==', '$type', 'Polygon']
              }
              );
      
              
            }
            
          }
          
          
          
        })
        
      })// on click here
      // here
      
    })
 
    let features = this.showHighlightedOnMap(highlightedElements);
    features.forEach(f => {
      let {id}= f[0].properties;
      map.on('dblclick', id+'-polygon', (e) =>{
        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(e.features[0].properties.id)
        .addTo(map);
      })

    })

    
    
    
    map.on('click', (e) => {
      this.handlePoiClick(e);
       
    })
    
  }

  
  
  showHighlightedOnMap = (highlightedElems) => {
    let features = [];
    // const {highlightedElements} = this.state;
    highlightedElems.map(hElement => {
      hElement.elements.map(el => {
        const {value} = el;
        let floridaFeature = data.features.filter(feature => feature.properties.id == value);
  
        features.push(floridaFeature);
      })
      
    })

    return features;

  }

  handleHighlightedElemClick = () => {
    const {mapObject}= this.state;
    let highElemIds = ['Southwest Florida','Central West Florida','South Florida'];
    highElemIds.forEach(highElemId => {
      mapObject.on('click', highElemId+'-polygon', (e) =>{
        console.log(e.features);
      })
    })
  }

  getImage = imageName => {
    import(`./assets/${imageName}.png`).then(image => {
      this.setState({
        image: image.default
      });
    });
      }

  showPoiMarkers = () => {
    const {mapObject} = this.state;
    mapObject.loadImage(image, (error,image) => {
      if (error) throw error;
      mapObject.addImage('custom-marker', image);
      
        mapObject.addSource('points', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': PoiData.features
          }
        });
        mapObject.addLayer({
          'id': 'points-layer',
          'type': 'symbol',
          'source': 'points',
          'layout': {
            'icon-image': 'custom-marker',
            'icon-size': 0.03,
            'text-field': ['get', 'name'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right']
          }

        });

      })
    
    
}


  handlePoiClick = (e) =>{
   const {mapObject, cardVisibility} = this.state;
   let feature = mapObject.queryRenderedFeatures(e.point ,{layers:['points-layer']}); 
   if(!feature.length) return;
   let {name,county,city,address,phone,type} = feature[0].properties;
   this.setState({ cardObject:{ name,county,city,address,phone,type},
    poiCardVisibility: 'block'
  });
    
    
   
  }

  

  render() {
    const {cardObject,poiCardVisibility} = this.state;
    return ( 
      <React.Fragment>
        <div id="container">
          
           <div id="map" >
           </div>
           {/* <DeleteIcon id="delete-icon"></DeleteIcon> */}
           <PoiCard id="card" details={cardObject} visibility= {poiCardVisibility} ></PoiCard>
          
        </div>
        
        
      </React.Fragment>
     );
  }
}
 
export default App;
