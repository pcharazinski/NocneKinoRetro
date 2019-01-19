import React from 'react';
import { connect } from 'react-redux';

class SingleMovie extends React.Component{

    constructor(props){
        super(props);

        this.posterUrlBase = 'http://image.tmdb.org/t/p/w154/';
        // this.movieId = this.props.movieId;
        this.state = {
            movieId: this.props.movieId,
            movieTitle: this.props.movieTitle,
            moviePoster: this.props.moviePoster
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // this.setState({
        //     movieId: movieId,
        //     movieTitle: movieTitle,
        //     moviePoster: moviePoster
        // })

      }

    showReservationWindow(){
        document.querySelector('.showWindow').style.display = 'block';
    }

    showMovieInfo = () => {
        document.querySelector('.showMovieInfo').style.display = 'block';
        this.props.getIdOfMovie(this.props.movieId);
    }

    render(){
        return (
            <div className = 'movieWrap'>
                <div className='singleMovieOuter' onClick={this.showReservationWindow}>
                    <div className='singleMovieInner'/>
                    <img src={`http://image.tmdb.org/t/p/w154/${this.state.moviePoster}`} alt={this.props.title} width={154} />
                </div>
                <h3>{this.state.movieTitle}</h3>
                <span onClick={this.showMovieInfo}>więcej</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
         movies: state.movies,
     };
 };
 
 export default connect(mapStateToProps)(SingleMovie);