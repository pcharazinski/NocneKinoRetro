import React from 'react';
import { connect } from 'react-redux';
import SingleMovie from './SingleMovie'

class MovieInfo extends React.Component{

    getPoster = () => {
        if(this.props.idOfMovie !== null){
            return this.props.idOfMovie.poster_path;
        }
        else return;
    }

    getTitle = () => {
        if(this.props.idOfMovie !== null){
            return this.props.idOfMovie.title;
        }
        else return;
    }

    getDuration = () => {
        if(this.props.idOfMovie !== null){
            return this.props.idOfMovie.runtime;
        }
        else return;
    }

    getReleaseDate = () => {
        if(this.props.idOfMovie !== null){
            const date = this.props.idOfMovie.release_date.slice(0, 4);
            return date;
        }
        else return;
    }

    getGenres = () => {
        if(this.props.idOfMovie !== null){
            return this.props.idOfMovie.genres[0].name;
        }
        else return;
    }

    getOverview= () =>{
        if(this.props.idOfMovie !== null){
            return this.props.idOfMovie.overview;
        }
        else return;
    }

    render(){
        console.log(this.props);
        return (
            <div className='movieInfo'>
                <div className='movieInfoContainer'>
                    <div className = 'moviePoster'>
                        <div className='singleMovieOuter'>
                            <div className='singleMovieInner'/>
                            <img src={`http://image.tmdb.org/t/p/w154/${this.getPoster()}`} alt={this.props.title} width={154} />
                        </div>
                    </div>
                    <div className = 'movieDetails'>
                        <h3>{this.getTitle()}({this.getReleaseDate()})</h3>
                        <h3>Czas trwania: {this.getDuration()}min</h3>
                        <h3>Gatunek: {this.getGenres()}</h3>
                    </div>
                </div>
                <p>{this.getOverview()}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
         idOfMovie: state.idOfMovie,
     };
 };
 
 export default connect(mapStateToProps)(MovieInfo);