import React from 'react';

class App extends React.Component {
    state = {
        items: []
    }

    handleClick = () => {
        this.setState({items: ["text1", "text2", "text3"]});
    }

    render() {
        let button = <button onClick={this.handleClick}>click here for a list</button>

        if (this.state.items.length === 0){
            return (
                <div>
                    <div>There are no items to display</div>
                    {button}
                </div>
            )
        }

        return (
            <div>
                <ul>
                    {
                        this.state.items.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })
                    }
                    </ul>
            </div>
        )
    }
}

export default App;