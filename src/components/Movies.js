import React from 'react';
import { connect } from 'react-redux';
import Reservation from './Reservation';
import SingleMovie from './SingleMovie';

class Movies extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            dateActive: 'd0',
            renderForm: this.props.clicked,
            moviesArr: []
        };
        
        this.date = new Date();
    }

    async componentDidMount(){
        const arr = await this.props.moviesArr
        document.getElementById(this.state.dateActive).classList.toggle('activeDate');
        this.setState({moviesArr: arr});
    }

    componentWillUpdate(){
        document.getElementById(this.state.dateActive).classList.remove('activeDate');
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
        this.setState({dateActive: e.currentTarget.id});
        e.currentTarget.classList.toggle('activeDate');
    }

    renderDates(){
        let dates = [<div id={`d${0}`} className='dates' onClick={this.handleClick}><h3>Dzisiaj</h3></div>];
        for(let i =1; i<5; i++){
            dates.push(<div id={`d${i}`} className='dates' onClick={this.handleClick}><h3>{this.getDate(i)}</h3></div>);
        }
        return dates;
    }


    hideReservationWindow=()=>{
        document.querySelector('.showWindow').style.display = 'none';

    }

    render(){
        //console.log(this.state.moviesArr);
        return (
                <div className='movies'>
                    <div className='dateSlider'>
                        {this.renderDates()}
                    </div>
                    <div className='moviesList'>
                        <SingleMovie movieId = {this.props.moviesArr[0].id}/>
                        <SingleMovie movieId = {this.props.moviesArr[1].id}/>
                        <SingleMovie movieId = {this.props.moviesArr[2].id}/>
                        <SingleMovie movieId = {this.props.moviesArr[3].id}/>
                    </div>
                    <div className = 'showWindow' style={{display: 'none'}}>
                        <div className='X' onClick={this.hideReservationWindow}>X</div>
                        <Reservation ref = "child"/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
         clicked: state.isRegisterClicked,
         movies: state.movies
     };
 };
 
 export default connect(mapStateToProps)(Movies);