import React from 'react';
import $ from 'jquery'

class Hero extends React.Component{

    componentDidMount(){
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
