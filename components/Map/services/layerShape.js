module.exports.fillLayer = (id, source, fillColor, fillOpacity, minzoom, maxzoom, filter) => {
return { id, type: "fill", source, 
         paint: { "fill-color": fillColor, "fill-opacity": fillOpacity },
         minzoom, maxzoom, filter }}

module.exports.lineLayer = (id, source, lineColor, lineOpacity, lineWidth,  minzoom, maxzoom, filter) => {
return { id, type: "line", source, 
         paint: { "line-color": lineColor, "line-opacity": lineOpacity, "line-width": lineWidth},
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
          "icon-allow-overlap": true,
          // "symbol-placement": "line-center"
          // "symbol-z-order": "source"
        },
        paint: {
          "icon-color": iconColor,
          "text-color": textColor,
          "icon-opacity": 
                          [
                              "interpolate",
                              ["linear"],
                              ["zoom"],
                              1,
                              ["case", ["==", ["get", "favourite"], true], 1, 0],
                              2,
                              ["case", ["==", ["get", "flipped"], true], 1, 0],
                              3,
                              ["case", ["==", ["get", "Score"], 0], 0, 1],
                              // 5,
                              // ["case", 
                              // ["case", [">=", ["get", "Score"], 80], 1, 0], 
                              // ["case", ["==", ["get", "favourite"], false], 1, 0],
                              // ["case", ["==", ["get", "flipped"], false], 1, 0]
                              // ],
                              // 7,
                              // ["case", 
                              // ["case", [">=", ["get", "Score"], 60], 1, 0], 
                              // ["case", ["==", ["get", "favourite"], false], 1, 0],
                              // ["case", ["==", ["get", "flipped"], false], 1, 0]
                              // ],
                              // 9,
                              // ["case", 
                              // ["case", [">=", ["get", "Score"], 40], 1, 0], 
                              // ["case", ["==", ["get", "favourite"], false], 1, 0],
                              // ["case", ["==", ["get", "flipped"], false], 1, 0]
                              // ],
                              // 12,
                              // ["case", 
                              // ["case", ["<", ["get", "Score"], 40], 1, 0], 
                              // ["case", ["==", ["get", "favourite"], false], 1, 0],
                              // ["case", ["==", ["get", "flipped"], false], 1, 0]
                              // ]
                            ],
          "text-opacity": 
              [
                "interpolate",
                ["linear"],
                ["zoom"],
                1,
                ["case", ["==", ["get", "favourite"], true], 1, 0],
                2,
                ["case", ["==", ["get", "flipped"], true], 1, 0],
                3,
                ["case", ["==", ["get", "Score"], 0], 0, 1],
                // 5,
                // ["case", 
                // ["case", [">=", ["get", "Score"], 80], 1, 0], 
                // ["case", ["==", ["get", "favourite"], false], 1, 0],
                // ["case", ["==", ["get", "flipped"], false], 1, 0]
                // ],
                // 7,
                // ["case", 
                // ["case", [">=", ["get", "Score"], 60], 1, 0], 
                // ["case", ["==", ["get", "favourite"], false], 1, 0],
                // ["case", ["==", ["get", "flipped"], false], 1, 0]
                // ],
                // 9,
                // ["case", 
                // ["case", [">=", ["get", "Score"], 40], 1, 0], 
                // ["case", ["==", ["get", "favourite"], false], 1, 0],
                // ["case", ["==", ["get", "flipped"], false], 1, 0]
                // ],
                // 12,
                // ["case", 
                // ["case", ["<", ["get", "Score"], 40], 1, 0], 
                // ["case", ["==", ["get", "favourite"], false], 1, 0],
                // ["case", ["==", ["get", "flipped"], false], 1, 0]
                // ]
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