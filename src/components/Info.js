import React from 'react';
import { connect } from 'react-redux';

class Info extends React.Component{

    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth};
        this.updateWidth = this.updateWidth.bind(this)
      }

    updateWidth() {
        this.setState({width: window.innerWidth});
        console.log(this.state.width);
    }
    componentWillMount(){
        this.updateWidth();
    }
    componentDidMount(){
        window.addEventListener("resize", this.updateWidth);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    checkIfNull(){
        const { seat } = this.props;

        if(seat===null)
            return '';
        else  
            return seat;
    }

    renderMobile(){
        return (
            <div className = 'info'>
                 <div className='seatsStatus'>
                    <div className='seatStatus'>
                        <div className = 'seat'/>
                        <h3>Wolne</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat bookedSeat'/>
                        <h3>Zajęte</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat selectedSeat'/>
                        <h3>Wybrane</h3>
                    </div>
                </div>
                <ul className='resInfo'>
                    <li><h2>Tytuł:</h2></li>
                    <li><h2>Czas:</h2></li>
                    <li><h2>Miejsca: {`${this.checkIfNull()}`}</h2></li>
                </ul>
                <button><div className='rezBtn'/></button>
            </div>
    );
    }

    renderDesktop(){
        return (
            <div className = 'info'>
                <ul className='resInfo'>
                    <li><h2>Tytuł:</h2></li>
                    <li><h2>Czas:</h2></li>
                    <li><h2>Miejsca: {`${this.checkIfNull()}`}</h2></li>
                </ul>
                <button><div className='rezBtn'/></button>
                <div className='seatsStatus'>
                    <div className='seatStatus'>
                        <div className = 'seat'/>
                        <h3>Wolne</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat bookedSeat'/>
                        <h3>Zajęte</h3>
                    </div>
                    <div className='seatStatus'>
                        <div className = 'seat selectedSeat'/>
                        <h3>Wybrane</h3>
                    </div>
                </div>
            </div>
    );
    }

    render(){
        return this.state.width > 1024 ? this.renderDesktop() : this.renderMobile();
    }
}

const mapStateToProps = (state) => {
   return {seat: state.seatsSelected};
};

export default connect(mapStateToProps)(Info);