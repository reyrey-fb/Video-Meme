import React, {Component} from "react";

import "./WordButton.css";

class WordButton extends Component {
    render() {
       const { index, word, isActive, toggleWordActive } = this.props;

       const isActiveClass = (isActive) ? "btn-dark" : "btn-outline-dark";

       return ( 
            <>
            <button 
                key={index} 
                type="button" 
                className={`btn btn-sm rounded ${isActiveClass}`} 
                onClick={toggleWordActive}
            >
                {word}
            </button> 
            </>
       )
    }
}

export default WordButton;