import axios from "axios";
import qs from "qs";
import session from "express-session";

module.exports.authenticate= async () => {

    let configData= qs.stringify({
        'client_id': 'trestle_NomadsLandLLCNomadville20210504105626',
        'client_secret': 'fefae0917c4845cbacd5abe035ab137e',
        'grant_type': 'client_credentials',
        'scope': 'api'
    })

    
    let config= {
        method: 'post',
        url: 'https://api-prod.corelogic.com/trestle/oidc/connect/token',
        headers: { },
        data : configData
    }

    let response= await axios(config);
    
    let token= response.data.access_token;

    let instance=  axios.create({

        headers: { 
            "Authorization": `Bearer ${token}`
        }
    })

    return instance;
}