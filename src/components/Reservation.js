import React from 'react';
import { connect } from 'react-redux';
import Info from './Info';
import Form from './Form';
import Cinema from './Cinema';

class Reservation extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            renderForm: false
        };
    }

    renderCinema = () => {
        this.setState({renderForm: false});
    }

    renderForm = () => {
        this.setState({renderForm: true});
    }

    handleClick(){
        document.querySelector('.window').style.display = 'none';
    }

    renderRegisterForm(){
        if(this.state.renderForm===true)
            return <Form renderCinema = {this.renderCinema}/>;
        else return <Cinema/>
    }

    render(){
        return ( 
                <div className='window scrollbar'>
                    {/* <div className='X' onClick={this.handleClick}>X</div> */}
                    <div className='content'>
                        {this.renderRegisterForm()}
                        <Info renderForm = {this.renderForm} movieId = {this.state.movieId}/>
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
 
 export default connect(mapStateToProps)(Reservation);