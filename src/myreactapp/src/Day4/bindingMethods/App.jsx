import React from 'react';

class App extends React.Component {
    state = {
        inError: false
    }
    constructor(props){
        super(props);

        this.handleErrorClick = this.handleErrorClick.bind(this);
    }

    handleOKClick = () => {
        this.setState({ inError: false });
    }

    handleErrorClick() {
        this.setState({ inError: true });
    }

    render() {
        let text = <div>There is no error</div>
        if (this.state.inError){
            text = <div style={{color: "red"}}>There is an error</div>
        }
        
        return (
            <div>
                {text}
                <button onClick={this.handleErrorClick}>Error</button>
                <button onClick={this.handleOKClick}>OK</button>
            </div>
        );
    }
}

export default App;