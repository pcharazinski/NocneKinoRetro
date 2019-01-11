import React from 'react';
import Window from './Window';
import Cinema from './Cinema';
import Info from './Info';

class Hero extends React.Component{

    render(){
        return(
            <div className='hero'>
                <Window>
                    <Cinema/>
                    <Info/>
                </Window>
            </div>
    );
    }
}

export default Hero;