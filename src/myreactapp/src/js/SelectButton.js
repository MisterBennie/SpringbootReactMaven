import React from 'react';

class SelectButton extends React.Component{
    render(){
        let className = this.props.isSelected ? "selected" : "";
        return(
            <button
                type="button"
                className={className}
                id={this.props.person.id}
                onClick={this.props.onClick}
            >
                    {this.props.person.fullName}
            </button>
        )
    }
}

export default SelectButton;