import React from 'react';
import ShopItem from './ShopItem';

class App extends React.Component {
    state = {
        shopItems: [
            { id: 0, count: 1, name: "Bicyle" },
            { id: 1, count: 0, name: "Moped" },
            { id: 2, count: 0, name: "Motorcycle" },
            { id: 3, count: 0, name: "Scooter" },
        ]
    }

    resetItems = () => {
        const shopItems = this.state.shopItems.map(shopItem => {
            shopItem.count = 0;
            return shopItem;
        });
        this.setState({ shopItems: shopItems });
    }

    handleIncrement = shopItem => {
        const { shopItems, index } = this.createNewStateObject(shopItem);
        shopItems[index].count++;
        this.setState({ shopItems: shopItems })
    }

    handleDecrement = shopItem => {
        const { shopItems, index } = this.createNewStateObject(shopItem);
        if (shopItems[index].count > 0) {
            shopItems[index].count--;
            this.setState({ shopItems: shopItems })
        }
    }

    createNewStateObject(shopItem) {
        // cloning array
        const shopItems = [...this.state.shopItems];
        const index = shopItems.indexOf(shopItem);
        // cloning shopItem
        shopItems[index] = { ...shopItem };
        return { shopItems, index };
    }

    render() {
        return (
            <div>
                {<button onClick={this.resetItems}>Reset</button>}
                {
                    this.state.shopItems.map(shopItem => {
                        return <ShopItem key={shopItem.id} item={shopItem} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
                    })
                }
            </div>
        )
    }
}

export default App;