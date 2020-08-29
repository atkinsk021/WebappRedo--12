import React, { Component } from "react";
import "./filterControls.css"

//CLASS FOR THE SEARCH BAR
export default class FilterControls extends Component {
  
    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = e => {
        this.handleChange(e, "title", e.target.value);
    };

    render() {
    return (
        <div className="searchBg">
            <h5>
                <span >
                    Search 
                </span>
                <input 
                className= "container-fluid"
                type="text" 
                placeholder=". . ." 
                onChange={this.handleTextChange}
                />
            </h5>
        </div>
    );
  }
}

