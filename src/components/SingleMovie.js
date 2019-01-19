import React from 'react';
import { connect } from 'react-redux';
import { getIdOfMovie } from '../actions';

class SingleMovie extends React.Component{

    constructor(props){
        super(props);

        this.posterUrlBase = 'http://image.tmdb.org/t/p/w154/';
        this.state = {
            movieObj: this.props.movieObj,
            movieId: this.props.movieId,
            movieTitle: this.props.movieTitle,
            moviePoster: this.props.moviePoster
        };
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        this.setState({
            movieObj: nextProps.movieObj,
            movieId: nextProps.movieId,
            movieTitle: nextProps.movieTitle,
            moviePoster: nextProps.moviePoster
        })
      }

      componentDidUpdate(){
          //console.log(this.props.idOfMovie);
      }

    showReservationWindow = () => {
        document.querySelector('.showWindow').style.display = 'block';
        // console.log(this.state.movieObj);
        this.props.getIdOfMovie(this.state.movieObj);

    }

    showMovieInfo = () => {
        document.querySelector('.showMovieInfo').style.display = 'block';
        this.props.getIdOfMovie(this.props.movieId);
    }

    render(){
        // console.log(this.state);
        return (
            <div className = 'movieWrap'>
                <div className='singleMovieOuter' onClick={this.showReservationWindow}>
                    <div className='singleMovieInner'/>
                    <img src={`http://image.tmdb.org/t/p/w154/${this.state.moviePoster}`} alt={this.props.title} width={154} />
                </div>
                <div className='movieTitle'>
                    <h3>{this.state.movieTitle}</h3>
                    <span onClick={this.showMovieInfo}>więcej</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
         idOfMovie: state.idOfMovie
     };
 };
 
 export default connect(mapStateToProps, {getIdOfMovie})(SingleMovie);