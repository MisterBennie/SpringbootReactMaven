import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    };

    handleOK = () => {
        this.setState({count : 1})
    }

    handleWarning = () => {
        this.setState({count : 0})
    }

    render() {
        let styles = {};
        if (this.state.count === 0){
            styles = {color: "red", fontSize: "30px"}
        }
        else{
            styles = {color: "black", fontSize: 20}
        }
        return (
            <div>
                <span style={styles}>Dit is een tekst</span><br />
                <button onClick={this.handleOK}>Set OK</button>
                <button onClick={this.handleWarning}>Set warning</button>
            </div>
        )
    }
}

export default App;