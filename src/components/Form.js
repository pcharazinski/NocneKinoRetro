import React from 'react';

class Form extends React.Component{
    
    handleClick(e){
        e.preventDefault();
    }

    render(){
        return (
                <div className='registerForm'>
                    <form>
                        <label htmlFor = 'name'><h3>Imię</h3></label>
                        <input type='text' id='name'/>
                        <label htmlFor='surname'><h3>Nazwisko</h3></label>
                        <input type='text' id='surname'/>
                        <label htmlFor ='email'><h3>Email</h3></label>
                        <input type='text' id='email'/>
                        <button type='submit' onClick={this.handleClick}><div className='submitBtn'/></button>
                    </form>
                </div>
        );
    }
}

export default Form;