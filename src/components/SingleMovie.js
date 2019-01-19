import React from 'react';
import { connect } from 'react-redux';
import { getIdOfMovie, getBookedSeat } from '../actions';
import Fetch from '../fetch';

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
        this.showMovieInfo = this.showMovieInfo.bind(this);
        this.showReservationWindow = this.showReservationWindow.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            movieObj: nextProps.movieObj,
            movieId: nextProps.movieId,
            movieTitle: nextProps.movieTitle,
            moviePoster: nextProps.moviePoster
        })
      }


    async showReservationWindow(){
        document.querySelector('.showWindow').style.display = 'block';
        this.props.getIdOfMovie(this.state.movieObj);
        console.log(this.props.date);
        console.log(this.state.movieTitle);

        const response = await Fetch.zwrocZarezerwowane(this.state.movieTitle, this.props.date);
        console.log(response);
        this.props.getBookedSeat(response);
    }

    showMovieInfo(){
        document.querySelector('.showMovieInfo').style.display = 'block';
        this.props.getIdOfMovie(this.props.movieObj);
       
        
    }

    render(){
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
         idOfMovie: state.idOfMovie,
         date: state.date,
         bookedSeats: state.bookedSeats
     };
 };
 
 export default connect(mapStateToProps, {getIdOfMovie, getBookedSeat})(SingleMovie);