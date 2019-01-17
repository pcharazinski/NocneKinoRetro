import React from 'react';
import pulpfiction from '../img/pulpfiction.jpg';
import godfather from '../img/godfather.jpg';
import dwunastugniewnych from '../img/dwunastugniewnych.jpg';

class SingleMovie extends React.Component{

    render(){
        //console.log(this.props);
        return (
            <div className = 'movieWrap'>
                <div className='singleMovieOuter'>
                    <div className='singleMovieInner'/>
                    {/* <div className='overlay'/> */}
                    <img src={pulpfiction} alt={this.props.title} width={145} />
                </div>
                <h3>Pulp Fiction</h3>
                <span>więcej</span>
            </div>
        );
    }
}

export default SingleMovie;