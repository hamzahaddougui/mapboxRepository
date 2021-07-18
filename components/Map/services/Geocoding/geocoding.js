import axios from 'axios';
import homesFetching from '../Homes/homesFetching';
import qs from 'qs';
import homesData from '../../Homes/data/features';

module.exports.getCenter= async (map, City) => {
   
    console.log("geocoding")
    let features= homesData.homesFeatures;
    // let configData= qs.stringify({
    //     'access_token': 'pk.eyJ1IjoibWFkaW5mIiwiYSI6ImNrcHdrOHY2NTBncGQycGxqOWQ5Y3dvajIifQ.A7Q1autGjqU24WvK25gEnQ'
    // })

    // let City= "Palm Springs";

    
    let accessToken= 'pk.eyJ1IjoibWFkaW5mIiwiYSI6ImNrcHdrOHY2NTBncGQycGxqOWQ5Y3dvajIifQ.A7Q1autGjqU24WvK25gEnQ';

    let unitNumber, streetName, city, state, postalCode;

    let homesResult= await homesFetching.fetchHomes();
    let {value}= homesResult.data;


    let valueFiltered= value.filter(elem => elem.City== City);

    console.log(valueFiltered.length)

    if(valueFiltered.length== 0) return;

    

    for(let elem= 0; elem< valueFiltered.length; elem++){

        if(valueFiltered[elem].UnitNumber) unitNumber= valueFiltered[elem].UnitNumber;
        if(valueFiltered[elem].StreetName) streetName= valueFiltered[elem].StreetName;
        if(valueFiltered[elem].City) city= valueFiltered[elem].City;
        if(valueFiltered[elem].StateOrProvince) state= valueFiltered[elem].StateOrProvince;
        if(valueFiltered[elem].PostalCode) postalCode= valueFiltered[elem].PostalCode;
        
        
        let url= "https://api.mapbox.com/geocoding/v5/mapbox.places/";
        
        if(unitNumber) url+=unitNumber;
        if(streetName) url+=" "+streetName;
        if(city) url+=" "+city;
        if(state) url+=", "+state;
        if(postalCode) url+=" "+postalCode;
        
        url+= ".json?access_token="+accessToken;
        
    
        let config= {
            method: 'get',
            url,
            headers: { },
            data : ''
        }

        let response= await axios(config);

        let feature= {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": response.data.features[0].center
            },
            "properties": {
                "unitNumber": unitNumber,
                "streetName": streetName,
                "city": city,
                "listPrice": valueFiltered[elem].ListPrice,
                "bathroomsTotal": valueFiltered[elem].BathroomsTotalInteger,
                "bedroomsTotal": valueFiltered[elem].BedroomsTotal,
                "status": "non matched"
            }
        }

        
        let found= features.filter(f => JSON.stringify(f.geometry.coordinates)== JSON.stringify(response.data.features[0].center));
        if(!found[0]) features.push(feature);
        
        
    }


    
    // return features;

    let dataSource= {
        type: "FeatureCollection",
        features
    }

    map.getSource("homes").setData(dataSource);

}