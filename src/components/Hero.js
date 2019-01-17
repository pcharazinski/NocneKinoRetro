import React from 'react';
import { connect } from 'react-redux';
import Window from './Window';
import Cinema from './Cinema';
import Info from './Info';
import Form from './Form';
import Fetch from '../fetch';

class Hero extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
       // console.log(Fetch.zwrocZarezerwowane());
    }

    renderRegisterForm(){
        if(this.props.clicked===true)
            return <Form/>;
        else return <Cinema/>
    }

    render(){
        console.log(this.props);
        return(
            <div className='hero'>
                <Window>
                    {this.renderRegisterForm()}
                    <Info/>
                </Window>
            </div>
    );
    }
}

const mapStateToProps = (state) => {

    return {
         clicked: state.isRegisterClicked
     };
 };
 
 export default connect(mapStateToProps)(Hero);
