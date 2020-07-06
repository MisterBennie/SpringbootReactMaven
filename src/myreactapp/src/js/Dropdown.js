import React from 'react';

class Dropdown extends React.Component {
    render(){
        return (
            <select onChange={this.props.onChange} value={this.props.currentId}>
                {
                    this.props.persons.map(person => {
                        return <option key={person.id}  value={person.id}>{person.fullName}</option>
                    })
                }
            </select>
        );
    }
}

export default Dropdown;