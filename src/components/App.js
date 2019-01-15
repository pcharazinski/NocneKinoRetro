import React from 'react';
import '../sass/App.scss'
import Hero from './Hero';
import $ from 'jquery';

class App extends React.Component {
    constructor() {
        super(props);
        this.state = {}
        this.search ("a") }

            const pobierzDaneTest = (searchTerm) => {
            // fetch('/test').then((resp) => resp.json()).then(data => console.log(data)).catch(err => console.error(err));
            const urlDB = "https://api.themoviedb.org/3/search/movie?api_key=02b7c790eefcf035ffc889efdfc6cb77&query=" + searchTerm
            
        }
        pobierzDaneTest();
    }
    render() {

        return <Hero />;
    }
}

export default App;