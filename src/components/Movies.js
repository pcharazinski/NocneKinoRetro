import React from 'react';
import { connect } from 'react-redux';
import Reservation from './Reservation';
import SingleMovie from './SingleMovie';

class Movies extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dateActive: 'd0',
            renderForm: this.props.clicked
        };
        
        this.date = new Date();
    }

    componentDidMount(){
        document.getElementById(this.state.dateActive).classList.toggle('activeDate');
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

    showReservationWindow(){
        document.querySelector('.showWindow').style.display = 'block';
    }

    hideReservationWindow(){
        document.querySelector('.showWindow').style.display = 'none';
    }

    render(){
        return (
                <div className='movies'>
                    <div className='dateSlider'>
                        {this.renderDates()}
                    </div>
                    <div className='moviesList'>
                        <div onClick={this.showReservationWindow}><SingleMovie title='pulpfiction'/></div>
                    </div>
                    <div className = 'showWindow' style={{display: 'none'}}>
                        <div className='X' onClick={this.hideReservationWindow}>X</div>
                        <Reservation/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
         clicked: state.isRegisterClicked
     };
 };
 
 export default connect(mapStateToProps)(Movies);