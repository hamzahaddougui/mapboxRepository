module.exports.fillLayer = (id, source, fillColor, fillOpacity, minzoom, maxzoom, filter) => {
return { id, type: "fill", source, 
         paint: { "fill-color": fillColor, "fill-opacity": fillOpacity },
         minzoom, maxzoom, filter }}

module.exports.lineLayer = (id, source, lineColor, lineOpacity, lineWidth,  minzoom, maxzoom, filter) => {
return { id, type: "line", source, 
         paint: { "line-color": lineColor, "line-opacity": lineOpacity, "line-width": lineWidth },
         minzoom, maxzoom, filter }}


module.exports.symbolLayer= (id, source, iconImage= null, iconSize= null, textField= null, textFont= null, textOffset= null,
    textAnchor= null, textSize= null, iconColor= null, textColor= null, filter ) => {
    return {
        id,
        type: "symbol",
        source,
        layout: {
          "icon-image": iconImage,
          "icon-size": iconSize,
          "icon-offset": [-5, -50],
          "text-field": textField,
          "text-font": textFont,
          "text-offset": textOffset,
          "text-anchor": textAnchor,
          "text-size": textSize,
          "icon-allow-overlap": true
        },
        paint: {
          "icon-color": iconColor,
          "text-color": textColor,
          "icon-opacity": [
                            "case",
                            ["<=", ["get", "score"], 0],
                            0.1, 1          
                          ],
          "text-opacity": [
                            "case",
                            ["<=", ["get", "score"], 0],
                            0.1, 1            
                          ]
        },
        filter
      }}

module.exports.circleLayer= (id, source, circleColor, circleRadius, circleOpacity) => {
    return {
        id,
        type: "circle",
        source,
        paint: {
          "circle-color": circleColor,
          "circle-radius": circleRadius,
          "circle-opacity": circleOpacity
        },
        minZoom: 5
      }
}