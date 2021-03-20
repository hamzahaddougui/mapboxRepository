import POI from "../Map/data/POI.json";

module.exports.showPoi= (e) => {
    // let test= PoiService.filterPOIs(POI.features, 'Speedway');
    POI.features.forEach(f => f.properties.subCategory.replace(/\//g, "_"));
    let subCategories = [];
    POI.features.forEach(f => {
      if (!subCategories.includes(f.properties.subCategory))
        subCategories.push(f.properties.subCategory);
    });

    //console.log(subCategories);
    /* subCategories.forEach(sc => {
      let image;
      let features = POI.features.filter(f => f.properties.subCategory== sc);
      import(`./assets/POI/${sc}.png`).then(image => {
        this.setState({image: image.default});
      });

      console.log(this.state.image);
    }) */
    let subCategory = "Speedway";
    let features = POI.features.filter(f => f.properties.subCategory == "Speedway");
    const image = "/map/POI/Speed&way.png";
    e.target.loadImage(image.default, (error, image) => {
      if (error) throw error;

      e.target.addImage("custom-marker", image);

      e.target.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: features,
        },
      });
      e.target.addLayer({
        id: "points-layer",
        type: "symbol",
        source: "points",
        paint: {
          "icon-opacity": {
            stops: [
              [11, 0],
              [12, 1],
            ],
          },
          "text-opacity": {
            stops: [
              [11, 0],
              [12, 1],
            ],
          },
        },
        layout: {
          "icon-image": "custom-marker",
          "icon-size": 0.02,
          "text-field": ["get", "Name"],
          "text-size": 8,
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.5],
          "text-anchor": "top",
        },
      });
    });
  };