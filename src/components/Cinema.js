import React from 'react';
import { connect } from 'react-redux';
import { getSeatNum } from '../actions';

class Cinema extends React.Component{

    constructor(props){
        super(props)
        this.state = {seat: []};
    }
    
      
     selectSeat = (e) => {
        this.setState({seat: [...this.state.seat, e.target.id]});
        if(e.target.className==='seat')
            e.target.textContent='';
        else 
            e.target.textContent = e.target.id.slice(1);

        e.target.classList.toggle("selectedSeat");

        this.setState({seat: [...this.state.seat, e.target.id]});
    }

    componentDidUpdate(){
        this.props.getSeatNum(this.state.seat);
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
                    seats.push(<div id={`B${seatNumber-11}`} key={`B${seatNumber-11}`} className='seat' onClick={this.selectSeat}>{seatNumber-11}</div>);
                else if(i>22 && i<33)
                    seats.push(<div id={`C${seatNumber-22}`} key={`C${seatNumber-22}`} className='seat' onClick={this.selectSeat}>{seatNumber-22}</div>);
                else if(i>33 && i<44)
                    seats.push(<div id={`D${seatNumber-33}`} key={`D${seatNumber-33}`} className='seat' onClick={this.selectSeat}>{seatNumber-33}</div>);
                else if(i>44 && i<55)
                    seats.push(<div id={`E${seatNumber-44}`} key={`E${seatNumber-44}`} className='seat' onClick={this.selectSeat}>{seatNumber-44}</div>);
                else
                    seats.push(<div id={`A${seatNumber}`} key={`A${seatNumber}`} className='seat' onClick={this.selectSeat}>{seatNumber}</div>);
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