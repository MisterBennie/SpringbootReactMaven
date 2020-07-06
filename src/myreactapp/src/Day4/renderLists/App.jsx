import React from 'react';

class App extends React.Component {
    state = {
        items: ["text1", "text2", "text1"]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.items.map((item, index) => {
                            return <li id={index} key={index}>{item}</li>;
                        })
                    }
                    </ul>
            </div>
        )
    }
}

export default App;