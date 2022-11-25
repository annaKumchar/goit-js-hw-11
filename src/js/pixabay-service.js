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

