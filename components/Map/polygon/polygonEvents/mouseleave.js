module.exports.mouseLeave= (e, popup) => {
    e.target.getCanvas().style.cursor = "";
    popup.remove();
}