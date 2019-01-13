import React from 'react';
import { connect } from 'react-redux';
import { getSeatNum } from '../actions';

class Cinema extends React.Component{

    constructor(props){
        super(props)
        this.state = {seat: []};
    }

    componentDidUpdate(){
        this.props.getSeatNum(this.state.seat);
    }

    checkIfClicked(arr, clickedValue){
        return arr.every(element => {
            return element !== clickedValue;
        })
    }
    
     selectSeat = (e) => {
        const { seat } = this.state;

        if(e.target.className==='seat')
            e.target.textContent='';
        else 
            e.target.textContent = e.target.id.slice(1);

        e.target.classList.toggle("selectedSeat");

        if(this.checkIfClicked(seat, e.target.id) === false)
            this.setState({seat: seat.filter(elem => elem !== e.target.id)});
        else 
            this.setState({seat: [...seat, e.target.id]});
    }

    renderRow(seats, seatNumber, row, value){
        return (
            seats.push(
                        <div 
                            id={`${row}${seatNumber-value}`} 
                            key={`${row}${seatNumber-value}`} 
                            className='seat' 
                            onClick={this.selectSeat}
                        >
                            {seatNumber-value}
                        </div>
                    )
        );
    }

    renderSeats(){
        let seats = [];
        const rows = ['A', 'B', 'C', 'D', 'E'];
        let counter = 0;
        for(let i =0; i<55; i++){
            let seatNumber = i;
            if(i===0 || i===11 || i===22 || i===33 || i===44){
                seats.push(<h2 key={`${rows[counter]}0`}>{`${rows[counter]}.`}</h2>);
                counter++;
            }
            else{
                if(i>10 && i<22)
                    this.renderRow(seats, seatNumber, 'B', 11);
                else if(i>22 && i<33)
                    this.renderRow(seats, seatNumber, 'C', 22);
                else if(i>33 && i<44)
                    this.renderRow(seats, seatNumber, 'D', 33);
                else if(i>44 && i<55)
                    this.renderRow(seats, seatNumber, 'E', 44);
                else
                    this.renderRow(seats, seatNumber, 'A', 0);
            }
        }
        return seats;
    }

    render(){
        return (
                    <div className='cinema'>
                        <div className='screen'><h1>EKRAN</h1></div>
                        <div className='seats'>{this.renderSeats()}</div>
                    </div>
        );
    } 
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, {getSeatNum})(Cinema);