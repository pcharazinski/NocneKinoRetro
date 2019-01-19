import React from 'react';
import SingleMovie from './SingleMovie'

class MovieInfo extends React.Component{

    render(){
        return (
            <div className='movieInfo'>
                <SingleMovie/>
            </div>
        );
    }
}

export default MovieInfo;