import React from 'react';

class MyButton2 extends React.Component{
    handleSubmit = event => {
        console.log(event);
    }

    render(){
        console.log(this.props)
        return (
            <button onClick={this.handleSubmit}>{this.props.children}</button>
        )
    }
}

export default MyButton2;