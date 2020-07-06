import React from 'react';
import './app.css';

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
        let classes = "highlight "; // let op de spatie
        classes += (this.state.count === 0) ? "warning" : "normal";

        return (
            <div>
                <span className={classes}>Dit is een tekst</span><br />
                <button onClick={this.handleOK}>Set OK</button>
                <button onClick={this.handleWarning}>Set warning</button>
            </div>
        )
    }
}

export default App;