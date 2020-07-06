import React from 'react';
import ReactDom from 'react-dom';

class ShopItem extends React.Component {
    render() {
        return (
            <div>
                <h5>{this.props.item.name}</h5>
                <span style={{ marginRight: 10 }}>{this.props.item.count}</span>
                <button onClick={() => this.props.onIncrement(this.props.item)}>Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.item)}>Decrement</button>
            </div>
        );
    }
}

export default ShopItem;