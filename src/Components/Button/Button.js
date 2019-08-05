import React from 'react';
import './Button.css';

class Button extends React.Component{
    render(){
        return(
            <button 
            className={this.props.class} 
            onClick={this.props.onClick}
            type={this.props.type}>
            {this.props.title} 
            </button>
        );
    }

}

export default Button;