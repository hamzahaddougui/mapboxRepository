import fetching from "./fetching";

module.exports.getNeighborhoods= (polygons)=> {
//    let {city_neighbPolygons}= this.state;
   let city_neighbProps= [];
   let cities= fetching.getFeatures(polygons.features, "city");
   let citiesFiltered= cities.filter(c => c.properties.Score>= 80);
   citiesFiltered.forEach(c => city_neighbProps.push(c.properties));
   let neighbs= fetching.getFeatures(polygons.features, "neighborhood");
   let neighbsFiltered= neighbs.filter(n => n.properties.Score>= 80);
   neighbsFiltered.forEach(n => city_neighbProps.push(n.properties));
   city_neighbProps.sort((a, b)=> b.Score - a.Score);
   return city_neighbProps;
//    props.Neighb_CityMove(city_neighbProps);
//    this.setState({neighborhoods: city_neighbProps});
}