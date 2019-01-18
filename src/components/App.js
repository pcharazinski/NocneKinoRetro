import React from 'react';
import { connect } from 'react-redux';
import '../sass/App.scss'
import { getMoviesArr } from '../actions';
import Hero from './Hero';
import Movies from './Movies';
import Api from '../api';

class App extends React.Component {

  componentDidMount(){
    this.getMovies();
  }

  async getMovies(){
    const movieArr = [];
    const today = new Date().getDate();
    for(let i= 0; i<8; i++){
      let movie =  await Api.getMovie(today+i);
      movieArr.push(movie);
    }
    this.props.getMoviesArr(movieArr);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Hero/>
        <Movies/>
      </div>
        
      );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, {getMoviesArr})(App);