'use strict';

import axios from "axios";

export class  PixabayApiService {
    #BASE_URL = 'https://pixabay.com/api/';
    #API_KEY = '31497995-3a23ff7222cbe0a09e3b55558';
    
constructor() {
    this.page = null;
    this.searchQuery  = null;
    this.per_page = 40;
}

fetchPhotos() {
     const searchParams = {
      params: {
        key: this.#API_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,

    },
    };
    return axios.get(`${this.#BASE_URL}`, searchParams);
  }
}


'use strict';

// import axios from 'axios';
// const API_KEY = '31497995-3a23ff7222cbe0a09e3b55558'
// const BASE_URL ='https://pixabay.com/api';

// export class PixabayApiService {
 
//   constructor() {
//     this.page = null;
//     this.searchQuery = null;
//   }
//   fetchPhotos() {

//     const searchParams = new URLSearchParams({
//       key: `${API_KEY}`,
//       q: this.searchQuery,
//       page: this.page,
//       per_page: '40',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//     });

//     return fetch(
//     `${BASE_URL}/?${searchParams}`
//     )
//     .then(response => {
//       if(!response.ok) {
//         throw new Error(response.status)
//       }
    
//       return response.json();
//     });
//   }
// }





// const options = {
//   headers: {
//     Autorization: API_KEY,
//   },
// };
// export default class PixabayApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }
//   fetchPhoto() {


//     const url ='${BASE_URL}/?image_type=photo&orientation=horizontal&safesearch=true&per_page=40';
   
//     return fetch(BASE_URL, options)
//       .then(response => response.json())
//       .then(({photos}) =>{
//         this.incrementPage();
//         return photos
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }
  
//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
