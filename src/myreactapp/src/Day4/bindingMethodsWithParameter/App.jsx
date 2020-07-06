import React from 'react';

class App extends React.Component {
    state = {
        value: ""
    }
    constructor(props){
        super(props);
    }

    handleValueClick1 = (event, value) => {
        this.setState({ value: value });
    }

    handleValueClick2 = (value) => {
        this.setState({ value: value });
    }

    handleValueClick3 = (event) => {
        console.log(event);
    }

    render() {       
        return (
            <div>
                <div>{this.state.value}</div>
                <button onClick={(event) => this.handleValueClick1(event, "11111111111111111111")}>Error</button>
                <button onClick={() => this.handleValueClick2("22222222222222222222")}>OK</button>
                <button onClick={this.handleValueClick3}>Event</button>
            </div>
        );
    }
}

export default App;