import React from 'react';
import Api from '../api';

class SingleMovie extends React.Component{

    constructor(props){
        super(props);

        this.posterUrlBase = 'http://image.tmdb.org/t/p/w154/';
        this.movieId = this.props.movieId;
        this.state = {
            movieTitle: '',
            moviePoster: ''
        };
    }

    async componentDidMount(){
        const movie = await Api.getMovie(this.movieId);
        
        this.setState({
            movieTitle: movie.title,
            moviePoster: movie.poster_path
        });
        console.log(`http://image.tmdb.org/t/p/w154/${movie.poster_path}`);
    }

    showInfo = () => {
        console.log('info');
    }

    showReservationWindow(){
        document.querySelector('.showWindow').style.display = 'block';
    }

    render(){
        console.log(this.state);
        return (
            <div className = 'movieWrap'>
                <div className='singleMovieOuter' onClick={this.showReservationWindow}>
                    <div className='singleMovieInner'/>
                    <img src={`http://image.tmdb.org/t/p/w154/${this.state.moviePoster}`} alt={this.props.title} width={154} />
                </div>
                <h3>{this.state.movieTitle}</h3>
                <span onClick={this.showInfo}>więcej</span>
            </div>
        );
    }
}

export default SingleMovie;