import React from 'react';
import '../sass/App.scss'
import Hero from './Hero';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.pobierzDane("retro")
  }

  pobierzDane(searchTerm) {
    const urlDB = "https://api.themoviedb.org/3/search/movie?api_key=02b7c790eefcf035ffc889efdfc6cb77&query=" + searchTerm
    $.ajax({
      url: urlDB,
      success: (searchResults) => {
        console.log("Pobrano API")
        const results = searchResults.results

        const movieRows = []

        //   this.props.movie.id
        //   this.props.movie.poster_src
        //   this.props.movie.title
        //   this.props.movie.overview

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <movieList key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        // this.setState({rows: movieList})
      }

    })
  }

  // searchChangeHandler(event) {
  //   console.log(event.target.value)
  //   const boundObject = this
  //   const searchTerm = event.target.value
  //   boundObject.pobierzDane(searchTerm)
  // }

  render() {

    return <Hero />;
    // {this.state.XXX}
  }
}

export default App;