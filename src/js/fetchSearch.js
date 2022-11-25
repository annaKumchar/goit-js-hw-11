import axios from "axios";

export function fetchSearch(name) {
    const  = 'https://pixabay.com/api/';
    const options = '?fields=name,capital,population,flags,languages';
    return fetch(`${BASE_URL}${name}${options}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }