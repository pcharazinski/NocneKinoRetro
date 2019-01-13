import React from 'react';

class Window extends React.Component{

    handleClick(){
        document.querySelector('.window').style.display = 'none';
    }

    render(){
        return ( 
                <div className='window scrollbar'>
                    <div className='X' onClick={this.handleClick}>X</div>
                    <div className='content'>{this.props.children}</div>
                    
                </div>
        );
    }
}

export default Window;