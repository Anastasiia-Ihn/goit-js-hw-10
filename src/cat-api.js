// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_yhNqPNosE5VgQrJCEBVvAw9Au1z9kRoQQbLNilRJQliutJoVguMi2HuJv8UgwvvL";
import Notiflix from 'notiflix';

export function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    const API_KEY = 'live_yhNqPNosE5VgQrJCEBVvAw9Au1z9kRoQQbLNilRJQliutJoVguMi2HuJv8UgwvvL';
        
  return fetch(`${BASE_URL}?api_key=${API_KEY}`)
  .then( (resp) =>{
    if (!resp.ok) {Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!')}
    return resp.json();
    

  })
    .catch(err => {
      Notiflix.Notify.warning('Oops! Something went wrong! Try reloading the page!');
    })
}

