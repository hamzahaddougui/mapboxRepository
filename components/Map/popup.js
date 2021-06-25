import styles from "./map.module.css";

module.exports.handlePopup = (popup, e, key, id) => {
    // const { popup } = this.state;
    popup.setLngLat(e.lngLat).setHTML("<span class='popup_heading'>"+key+"</span> "+id).addTo(e.target);
    let popupTip= document.getElementsByClassName('mapboxgl-popup-tip');
    popupTip[0].style.display= "none";
    let popupContent= document.getElementsByClassName('mapboxgl-popup-content');
    popupContent[0].style.borderRadius= "14px";
    popupContent[0].style.padding= "6px 11px 5px 12px";
    popupContent[0].style.backgroundColor= "#ffffff";
    popupContent[0].style.boxShadow= "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
    let popupHeading= document.getElementsByClassName('popup_heading');
    popupHeading[0].style.color= "#4346f7";
    popupHeading[0].style.display= "block";
    popupHeading[0].style.font= "normal 600 10px Poppins";
    popupHeading[0].style.margin= "-14px 0px 3.5px 2px";

    
    popup.addClassName(styles.popup);
  }