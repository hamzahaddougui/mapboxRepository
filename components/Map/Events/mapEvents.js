import move from "../polygon/events/mousemove";
import mapPopup from "../Popup/popup";
import draw from "../polygon/draw";
import leave from "../polygon/events/mouseleave";
import layerClick from "../polygon/events/click";
import {
    REGION_HIGHLIGHTED, REGION_CLICKED,
    COUNTY, COUNTY_HIGHLIGHTED, COUNTY_CLICKED, COUNTY_BORDERED,
    CITY_OTHER, CURRENT_CITY, CURRENT_CITY_CLICKED, CITY_BORDERED,
    NEIGHBORHOOD, NEIGHBORHOOD_HIGHLIGHTED, CURRENT_NEIGHBORHOOD
  } from "../polygon/layer/config";
import fetching from "../services/fetching";
import flipped from "../services/Flipped/flipped";
import favourite from "../services/Favorites/favourites";
import neighborhood from "../services/NeighborhoodService/neighborhood";
import symbol from "../layers/symbol/list";

import turf_distance from "@turf/distance";
import arrayTools from "array-tools";
import homesEvents from "../Homes/Events/events";
import layers from "../POI/layers/list";

module.exports.events= (map, data, popup, props, polygons)=> {
  let cityProperties= [], lastNeighborhoods= [], regionZoom= false, valuesSet= true, symbolLayersFiltered=[], visibleLayers= [], help=[];
    
      symbolLayersFiltered= arrayTools.without(symbol.symbolLayers, 
        [{"layerName": "flipped_layer"}, {"layerName": "favourite_layer"}]);
      
      map.on("zoom", e => {
        let currentZoom= e.target.getZoom();
        
        
        // if(currentZoom>= 1 && currentZoom< 7){
        //   visibleLayers= symbolLayersFiltered.filter(layer => layer.zoomLevel<= 1);
        
        // }

        // if(currentZoom>= 7 && currentZoom< 8.8){
        //   visibleLayers= symbolLayersFiltered.filter(layer => layer.zoomLevel<= 2);
        
        // }

        // if(currentZoom>= 8.8 && currentZoom< 10){
        //   visibleLayers= symbolLayersFiltered.filter(layer => layer.zoomLevel<= 3);
          
        // }

        // // if(currentZoom>= 8.8 && currentZoom< 10){
        // //   visibleLayers= symbolLayersFiltered.filter(layer => layer.zoomLevel<= 4);

        // // }

        // if(currentZoom>= 10){
        //   visibleLayers= symbolLayersFiltered.filter(layer => layer.zoomLevel<= 4);
          
        // }

        // if(help.length!= visibleLayers.length){
        //   symbolLayersFiltered.forEach(layer => {
        //     map.setLayoutProperty(layer.layerName, "visibility", "none");
        //   })
        //   visibleLayers.forEach(visible => map.setLayoutProperty(visible.layerName, "visibility", "visible"));
        //   help= visibleLayers;
        // }
        
        if(currentZoom>=14 && currentZoom<18) layers.poiLayers.forEach(layer => map.setLayoutProperty(layer.layerName, "visibility", "visible"))
        if(currentZoom<14) layers.poiLayers.forEach(layer => map.setLayoutProperty(layer.layerName, "visibility", "none"))
      })

      
      map.on("mousemove", "region-layer", e => {
        move.mouseMove(data, e, "region", REGION_HIGHLIGHTED);
        mapPopup.handlePopup(popup, e, "Region", e.features[0].properties.polygonId);
      });
  
      map.on("mouseleave", "region-layer", e => {
        draw.drawPolygon(e.target, data, REGION_HIGHLIGHTED, []);
        leave.mouseLeave(e, popup);
      });
  
      map.on("click", "region-highlighted-layer", e => {
        layerClick.click(map, data, e, REGION_HIGHLIGHTED, "region", e.features[0].properties.polygonId,
          REGION_CLICKED)});
  
      map.on("mousemove", "county-layer", e => {
        move.mouseMove(data, e, "county", COUNTY_HIGHLIGHTED);
        mapPopup.handlePopup(popup, e, "County", e.features[0].properties.polygonId.split('_')[1]);
        });

      
      map.on("click", "county-layer", e => {
        // let result = e.features[0].properties.polygonId.split("_");
        // layerClick.click(map, data, e, COUNTY, "region", result[0], REGION_CLICKED);
        // layerClick.click(map, data, e, COUNTY_HIGHLIGHTED, "county", e.features[0].properties.polygonId,
        //   COUNTY_CLICKED)

        let bounds= JSON.parse(e.features[0].properties.bounds);
        let distance= turf_distance([bounds[0], bounds[1]], [bounds[2], bounds[3]])

        let {flyMaxZoom}= COUNTY_CLICKED;
        
        if(distance<120) flyMaxZoom= 9;
        else flyMaxZoom= 8.8;

        COUNTY_CLICKED.flyMaxZoom= flyMaxZoom;

        layerClick.click(map, data, e, COUNTY_CLICKED, "county", e.features[0].properties.polygonId,
          COUNTY_BORDERED);

        });
  
      map.on("mouseleave", "county-layer", e => {
        draw.drawPolygon(e.target, data, COUNTY_HIGHLIGHTED, []);
        leave.mouseLeave(e, popup);
      });
  
      // map.on("click", "county-clicked-layer", e => {
      //   layerClick.click(map, data, e, COUNTY_CLICKED, "county", e.features[0].properties.polygonId,
      //     COUNTY_BORDERED);
      //   });
  

      

      map.on("mousemove", "city-layer", e => {
        move.mouseMove(data, e, "city", CITY_OTHER);
        mapPopup.handlePopup(popup, e, "City", e.features[0].properties.polygonId.split('_')[2]);
        });
  
      map.on("mouseleave", "city-layer", e => {
        draw.drawPolygon(e.target, data, CITY_OTHER, []);
        leave.mouseLeave(e, popup);
      });
  
      // map.on("moveend", "city-layer", e => {
      //   let neighbProps= [];
      //   let neighbs= fetching.getFeatures(data.features, "neighborhood", e.features[0].properties.polygonId);
      //   neighbs.forEach(f => neighbProps.push(f.properties));
      //   if(neighbs[0] && neighbs[0].properties.hasOwnProperty('Score') && JSON.stringify(neighbProps)!= JSON.stringify(this.props.neighborhoods))
      //     this.props.Neighb_CityMove(neighbProps);
      // })
  
      map.on("click", "city-other-layer", e => {
        // let id = e.features[0].properties.polygonId.split("_");
        // layerClick.click(map, data, e, CITY_OTHER, "city", e.features[0].properties.polygonId,
        //   CURRENT_CITY);
        // layerClick.click(map, data, e, CITY_OTHER, "county", id[0] + "_" + id[1], COUNTY_BORDERED);
        

        let bounds= JSON.parse(e.features[0].properties.bounds);
        let distance= turf_distance([bounds[0], bounds[1]], [bounds[2], bounds[3]])

        
        let {flyMaxZoom}= CURRENT_CITY_CLICKED;

        if(distance<=10) flyMaxZoom= 12;
        if(distance>10 && distance<=60) flyMaxZoom= 11;
        if(distance>60) flyMaxZoom= 10;

        CURRENT_CITY_CLICKED.flyMaxZoom= flyMaxZoom;
        
        layerClick.click(map, data, e, CURRENT_CITY_CLICKED, "city", e.features[0].properties.polygonId,
        CITY_BORDERED);

        
      });
  
      // map.on("click", "current-city-layer", e => {
      //   layerClick.click(map, data, e, CURRENT_CITY_CLICKED, "city", e.features[0].properties.polygonId,
      //     CITY_BORDERED);
      // });
  
      map.on("mouseleave", "current-city-layer", e => {
        leave.mouseLeave(e, popup);
      });

      
      map.on("mousemove", "neighborhood-layer", e => {
        move.mouseMove(data, e, "neighborhood", NEIGHBORHOOD_HIGHLIGHTED);
        mapPopup.handlePopup(popup, e, "Neighborhood", e.features[0].properties.polygonId.split('_')[3]);
        });

      
      // map.on("moveend", "neighborhood-layer", e => {
      //     let neighbProps= [];
      //     let id= e.features[0].properties.polygonId.split('_');
      //     let cityId= id[0]+'_'+id[1]+'_'+id[2];
      //     let neighbs= fetching.getFeatures(data.features, 'neighborhood', cityId);
      //     neighbs.forEach(n => neighbProps.push(n.properties));
      //     neighbProps.sort((a, b)=> b.Score - a.Score);
      //     if(neighbProps[0] && neighbProps[0].hasOwnProperty('Score') && JSON.stringify(neighbProps)!= JSON.stringify(this.props.neighborhoods))
      //       this.props.Neighb_CityMove(neighbProps);
      // })
  
      
  
      map.on("click", "current-neighborhood-layer", e => {
        console.log(e.features[0].properties.polygonId)
        let id = e.features[0].properties.polygonId.split("_");
        
        layerClick.click(map, data, e, NEIGHBORHOOD, "city", id[0] + "_" + id[1] + "_" + id[2],
          CITY_BORDERED);
        props.showCurrent(e.features[0].properties);
        });
  
      map.on("mouseleave", "neighborhood-layer", e => {
        draw.drawPolygon(e.target, data, NEIGHBORHOOD_HIGHLIGHTED, []);
        leave.mouseLeave(e, popup);
      });
  
      map.on("mouseleave", "current-neighborhood-layer", e => {
        leave.mouseLeave(e, popup);
      });
  
      map.on("zoomend", "city_score_layer", e =>{
        let cities= [], cityProps= [];
        // if(e.target.getZoom()>= 5){
        //     cities= fetching.getFeatures(data.features, "city");
        //     cities= cities.filter(c => c.properties.Score> 80);
        // }
        if(e.target.getZoom()>= 7){
          cities= fetching.getFeatures(data.features, "city");
          cities= cities.filter(c => c.properties.Score>= 50 && c.properties.Score< 70);
        }
        if(e.target.getZoom()>= 9){
          cities= fetching.getFeatures(data.features, "city");
          cities= cities.filter(c => c.properties.Score>= 30 && c.properties.Score< 50);
        }
        if(e.target.getZoom()>= 12){
          cities= fetching.getFeatures(data.features, "city");
          cities= cities.filter(c => c.properties.Score< 30);
        }
        cities.forEach(c => cityProps.push(c.properties));
        // this.setState({cityProps});
        cityProperties= cityProps;
      })
  
      map.on("zoomend", "neighborhood_score_layer", e =>{
        // let {cityProps}= this.state;
        let neighbs= [], neighbProps= [];
        if(e.target.getZoom()>= 5){
            regionZoom= true;
            // neighbs= fetching.getFeatures(data.features, "neighborhood");
            neighbProps= neighborhood.getNeighborhoods(polygons);
            // console.log(neighbs);
        }
        if(e.target.getZoom()>= 7){
          regionZoom= false;
          valuesSet= false;
          neighbs= fetching.getFeatures(data.features, "neighborhood");
          neighbs= neighbs.filter(c => c.properties.Score>= 50 && c.properties.Score< 70);
        }
        if(e.target.getZoom()>= 9){
          regionZoom= false;
          neighbs= fetching.getFeatures(data.features, "neighborhood");
          neighbs= neighbs.filter(c => c.properties.Score>= 30 && c.properties.Score< 50);
        }
        if(e.target.getZoom()>= 12){
          regionZoom= false;
          neighbs= fetching.getFeatures(data.features, "neighborhood");
          neighbs= neighbs.filter(c => c.properties.Score< 50);
        }
        if(regionZoom== false){
            neighbs.forEach(c => neighbProps.push(c.properties));
            cityProperties.forEach(c => neighbProps.push(c));
            neighbProps.sort((a, b)=> b.Score - a.Score);
        }
        
        if(neighbProps[0] && neighbProps.length!= lastNeighborhoods.length && valuesSet== false){
            props.Neighb_CityMove(neighbProps);
            lastNeighborhoods= neighbProps;
        }
      })
  
      flipped.handleFlipped(map, "city_flipped_layer");
      flipped.handleFlipped(map, "city_favourite_layer");
      favourite.handleFavourite(map, "neighborhood_flipped_layer");
      favourite.handleFavourite(map, "neighborhood_favourite_layer");
  
      map.on("click", "points-layer", e => {
        // const { mapObject } = this.state;
        let feature = map.queryRenderedFeatures(e.point, { layers: ["points-layer"] });
        if (!feature.length) return;
        let { name, county, city, address, phone, type } = feature[0].properties;
        this.setState({ openCard: true, cardObject: { name, county, city, address, phone, type } });
      });
  

      homesEvents.handleMouseOnHome("mousemove", "homes_layer", map, popup)
      homesEvents.handleMouseOnHome("mouseleave", "homes_layer", map, popup)
      homesEvents.handleMouseOnHome("mousemove", "homes_filter_layer", map, popup)
      homesEvents.handleMouseOnHome("mouseleave", "homes_filter_layer", map, popup)

}