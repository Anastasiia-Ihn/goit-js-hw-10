// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_yhNqPNosE5VgQrJCEBVvAw9Au1z9kRoQQbLNilRJQliutJoVguMi2HuJv8UgwvvL";


export function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    const API_KEY = 'live_yhNqPNosE5VgQrJCEBVvAw9Au1z9kRoQQbLNilRJQliutJoVguMi2HuJv8UgwvvL';
        
  return fetch(`${BASE_URL}?api_key=${API_KEY}`)
  .then( (resp) =>{
    if (!resp.ok) {throw new Error(resp.statusText)}
    return resp.json();
  })
  .catch(err => console.log(err))
}

