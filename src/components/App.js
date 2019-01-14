import React from 'react';
import '../sass/App.scss'
import Hero from './Hero';

class App extends React.Component {
    // constructor() {
    //     super();
        // const pobierzDaneTest = () => {
        //     fetch('/test').then((resp) => resp.json()).then(data => console.log(data)).catch(err => console.error(err));
            // fetch('/test').then((resp) => console.log(resp))
        // }
        // pobierzDaneTest();
    // }
    render() {

        return <Hero />;
    }
}

export default App;