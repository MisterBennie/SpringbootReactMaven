import React from 'react';

class MyButton extends React.Component{
    render(){
        return (
            <button className={this.props.className} onClick={() => this.props.handleSubmit(this.props.productId)}>Product {this.props.productId}</button>
        )
    }
}

export default MyButton;