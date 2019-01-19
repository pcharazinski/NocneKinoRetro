import React from 'react';
import { connect } from 'react-redux';
import Reservation from './Reservation';
import SingleMovie from './SingleMovie';
import MovieInfo from './MovieInfo';

class Movies extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            dateActive: 0,
            renderForm: this.props.clicked,
        };
        
        this.date = new Date();
    }

        componentDidMount(){
        document.getElementById(this.state.dateActive).classList.toggle('activeDate');
    }

    getDate(days){
        let day = this.date.getDate()+days;
        let month = this.date.getMonth()+1;
        const year = this.date.getFullYear();

        if(day<10)
            day = `0${day}`;
        if(month<10)
            month = `0${month}`;

        return `${day}.${month}.${year}`;
    }

    handleClick = (e) =>{
        document.getElementById(this.state.dateActive).classList.remove('activeDate');
        e.currentTarget.classList.toggle('activeDate');
        // console.log(e.currentTarget.id);
        // this.props.fetchMovies(e.currentTarget.id)
        this.setState({dateActive: Number(e.currentTarget.id)});
       
    }

    renderDates(){
        let dates = [<div id={0} key={`d${0}`} className='dates' onClick={this.handleClick}><h3>Dzisiaj</h3></div>];
        for(let i =1; i<5; i++){
            dates.push(<div id={i} key={`d${i}`} className='dates' onClick={this.handleClick}><h3>{this.getDate(i)}</h3></div>);
        }
        return dates;
    }

    renderMovies(id){
        if(this.props.movies !== null){
            return (
                <div className='moviesList'>
                    <SingleMovie 
                        movieId = {this.props.movies[id].id} 
                        movieTitle = {this.props.movies[id].title}
                        moviePoster = {this.props.movies[id].poster_path}
                    />
                    <SingleMovie 
                        movieId = {this.props.movies[id+1].id} 
                        movieTitle = {this.props.movies[id+1].title}
                        moviePoster = {this.props.movies[id+1].poster_path}
                    />
                    <SingleMovie 
                        movieId = {this.props.movies[id+2].id} 
                        movieTitle = {this.props.movies[id+2].title}
                        moviePoster = {this.props.movies[id+2].poster_path}
                    />
                    <SingleMovie 
                        movieId = {this.props.movies[id+3].id} 
                        movieTitle = {this.props.movies[id+3].title}
                        moviePoster = {this.props.movies[id+3].poster_path}
                    />
                </div>
            );
        }
        else return;
    }

    hideReservationWindow=()=>{
        document.querySelector('.showWindow').style.display = 'none';
    }

    render(){
        let dateActive = this.state.dateActive;
        console.log(dateActive);
        console.log(this.props.movies);
        return (
                <div className='movies'>
                    <div className='dateSlider'>
                        {this.renderDates()}
                    </div>
                        {this.renderMovies(dateActive)}
                    <div className = 'showWindow' style={{display: 'none'}}>
                        <div className='X' onClick={this.hideReservationWindow}>X</div>
                        <Reservation ref = "child"/>
                    </div>
                    <div className='showMovieInfo' style={{display: 'none'}}>
                        <MovieInfo/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
         movies: state.movies
     };
 };
 
 export default connect(mapStateToProps)(Movies);