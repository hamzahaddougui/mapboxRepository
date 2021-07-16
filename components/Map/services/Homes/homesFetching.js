import axios from "axios";

import mlsAuthentication from './authenticate';

module.exports.fetchHomes= async () => {
 
  let url= "https://api-prod.corelogic.com/trestle/odata/Property?$filter=MlsStatus eq 'Active'&$count=true&$expand=Media&$top=100&$skip=1"
  
//   let response= await mlsAuthentication.authenticate().get(url);

//   return response;

    let authentication= await mlsAuthentication.authenticate();
    
    let response= await authentication.get(url);

    return response;
}