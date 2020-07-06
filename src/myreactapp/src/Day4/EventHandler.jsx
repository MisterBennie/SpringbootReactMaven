import React from 'react';
import './EventHandler.css'
import MyButton from './MyButton'
import MyButton2 from './MyButton2'

class EventHandler extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productIds: ["A", "B", "C", "D"],
            productClicked: null
        };
    }

    handleSubmit = productId => {
        this.setState({ productClicked: productId });
    }

    render() {
        let productClickText = this.state.productClicked !== null ? "Product " + this.state.productClicked + " is clicked" : "";
        return (
            <div>
                {
                    this.state.productIds.map(productId => {
                        let classes = productId === this.state.productClicked ? "selected" : "";
                        return (
                            <MyButton className={classes} key={productId} productId={productId} handleSubmit={() => this.handleSubmit(productId)} />
                        )
                    })
                }
                <div>{productClickText}</div>
                <MyButton2><h4>This is a text</h4></MyButton2>
            </div>
        )
    }
}

export default EventHandler;