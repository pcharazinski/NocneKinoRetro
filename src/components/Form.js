import React from 'react';
import { connect } from 'react-redux';
import fetch from '../fetch';
import {isRegisterClicked} from '../actions';

class Form extends React.Component{

    constructor(props){
        super(props);

        
        this.date = new Date();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
                name: '',
                surname: '',
                mail: '',
                title: this.props.idOfMovie.title,
                duration: this.props.idOfMovie.runtime,
                date: this.props.date,
                seat: '',
                isReserved: true,
        }
    }
    
    handleChange(e) {
        this.setState({
                [e.target.name]: e.target.value,
                seat: `${this.props.seat}`
        });
      }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        fetch.przeslijDane(this.state);
        this.props.renderCinema();
        // this.setState({rerender: false});
        // console.log(this.props);
    }

    render(){
        return (
                <div className='registerForm'>
                    <form onSubmit={this.handleSubmit} name='reserve'>
                        <label htmlFor = 'name'><h3>Imię</h3></label>
                        <input type='text' id='name' name='name' onChange={this.handleChange} required/>
                        <label htmlFor='surname'><h3>Nazwisko</h3></label>
                        <input type='text' id='surname' name='surname' onChange={this.handleChange} required/>
                        <label htmlFor ='email'><h3>Email</h3></label>
                        <input type='email' id='email' name='mail' onChange={this.handleChange} required/>
                        <button type='submit'><div className='submitBtn'/></button>
                    </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
         seat: state.seatsSelected,
         clicked: state.isRegisterClicked,
         idOfMovie: state.idOfMovie,
         date: state.date
     };
 };
 
 export default connect(mapStateToProps, {isRegisterClicked})(Form);