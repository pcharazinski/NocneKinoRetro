import React from 'react';

class Window extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return ( 
                <div className='window scrollbar'>
                    <div className='X'>X</div>
                    <div className='content'>{this.props.children}</div>
                    
                </div>
        );
    }
}

export default Window;