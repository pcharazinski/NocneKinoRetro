import React from 'react';

class Cinema extends React.Component{

    selectSeat(e){
        e.target.classList.toggle("selectedSeat");
    }

    renderSeats(){
        let seats = [];
        let counter = 1;
        for(let i =0; i<55; i++){
            if(i===0 || i===11 || i===22 || i===33 || i===44){
            seats.push(<h2>{`${counter}.`}</h2>)
            counter++;
            }
            else seats.push(<div key={i} className='seat' onClick={this.selectSeat}/>);
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

export default Cinema;