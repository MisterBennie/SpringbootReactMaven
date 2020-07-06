import React from 'react';

class myButton extends React.Component {
    state = {
        error: "",
        error2: "trala"
    }
constructor(props) {
        super(props);
    }

    handleClick = () => {
        try {
            this.props.value = 3;
        }
        catch (e) {
            this.setState({ error: e.message })
            this.setState({ error2: "test" })
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <div>{this.state.error}</div>
            </div>
        );
    }
}

export default myButton;