import React from 'react';

class MyButton extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    handleClick = () => {
        console.log("trala");
    }

    render(){
        return (
            <button onClick={this.handleClick}>{this.props.children}</button>
        )
    }
}

export default MyButton;