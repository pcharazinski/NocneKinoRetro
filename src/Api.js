import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const data_request = http://www.omdbapi.com/?apikey=29c10e44&;
const poster = http://img.omdbapi.com/?apikey=29c10e44&;

const searchMovies (searchText) => {
    Axios.get (data_request + "s=" + searchText)
    
        .then(result=>result.json())
        // .then(items=>this.setState(items));
    
    .catch ((err) => {
        console.log (err)
    })
}

export default Api;