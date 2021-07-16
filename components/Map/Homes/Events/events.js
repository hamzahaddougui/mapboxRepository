import leave from "../../polygon/events/mouseleave";

module.exports.handleMouseOnHome= (mouseEvent, layerName, map, popup) => {
    if(mouseEvent== 'mousemove' && (layerName== 'homes_layer' || layerName== 'homes_filter_layer')){
      map.on(mouseEvent, layerName, e => {
        let {unitNumber, streetName, city, listPrice, bathroomsTotal, bedroomsTotal } = e.features[0].properties;
        // this.setState({
        //   openCard: true,
        //   cardObject: {name, county: "test", city: "test", address: "test", phone: "test", type: "house" }});
        let html= "", coordinates= e.features[0].geometry.coordinates;
        let popupDetails= [
          {key: 'Unit number', value: unitNumber},
          {key: 'Street name', value: streetName},
          {key: 'City', value: city},
          {key: 'Price', value: listPrice},
          {key: 'Bathrooms total number', value: bathroomsTotal},
          {key: 'Bedrooms total number', value: bedroomsTotal}];
        
        popupDetails.forEach(elem => {
          html+= "<h3 class='heading'>"+elem.key+": </h3><span>"+elem.value+"<span></br>";
        })
        
        popup.setLngLat(coordinates).setHTML(html).addTo(map);
        let heading= document.getElementsByClassName('heading');
        for(let count= 0; count<heading.length; count++){
          heading.item(count).style.display= 'inline';

        }
        
        });
    }
    if(mouseEvent== 'mouseleave' && (layerName== 'homes_layer' || layerName== 'homes_filter_layer')){
      map.on(mouseEvent, layerName, e => {
        // map.getCanvas().style.cursor = "";
        // this.setState({ openCard: false });
        leave.mouseLeave(e, popup);

      });
    }
    
  }