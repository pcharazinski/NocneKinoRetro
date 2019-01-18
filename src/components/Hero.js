import React from 'react';
import Api from '../api';
import $ from 'jquery'

class Hero extends React.Component{

    async componentDidMount(){
        const movie = await Api.getMovie(238); 
        console.log(movie);
        this.scrollDown();
    }

    scrollDown(){
        $(".arrow").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".movies").offset().top
            }, 800);
        });
    }

    render(){
        return(
            <div className='hero'>
                <div className='logo'/>
                <div className='arrow'/>
            </div>
    );
    }
}

 export default Hero;
