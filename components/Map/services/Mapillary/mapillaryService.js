import axios from "axios";

module.exports.getImageKey= async (clientId, feature) => {
    let coordinates= feature.geometry.coordinates[0][0];
    let long= coordinates[0];
    let lat= coordinates[1];
    let bbox= feature.properties.bounds;
    bbox= bbox.split(',');
    bbox[0]= bbox[0].replace("[", "");
    bbox[3]= bbox[3].replace("]", "");
    let bbminLong= bbox[0];
    let bbminLat= bbox[1];
    let bbmaxLong= bbox[2];
    let bbmaxLat= bbox[3];
    let json = await axios.get("https://a.mapillary.com/v3/images?client_id="+clientId+"&bbox="+bbminLong+","+bbminLat+","+bbmaxLong+","+bbmaxLat
    +"&closeto="+long+","+lat);
    return json;
}