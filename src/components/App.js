import React from 'react';
import { connect } from 'react-redux';
import '../sass/App.scss'
import { fetchMovies} from '../actions';
import Hero from './Hero';
import Movies from './Movies';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchMovies();
  }

  render() {
    
    return (
      <div>
        <Hero/>
        <Movies/>
      </div>
        
      );
  }
}

const mapStateToProps = (state) => {
  return {movies: state.movies};
}

export default connect(mapStateToProps, {fetchMovies})(App);