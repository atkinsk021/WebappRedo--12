import React, { Component } from "react";
import { Link , BrowserRouter as Router} from 'react-router-dom';

//CLASS FOR THE GREY HEADER COMPONENT AT THE TOP OF THE PAGE
class Header extends Component {
  render() {
    return (
      
      //----BUG HERE----//
      //STORYBOOK COMPLAINS ABOUT THE USAGE OF NO ROUTER HERE FOR THE LINK BELOW
      //HOWEVER WHEN THE ROUTER IS USED, THE HEADER LINKS STOP WORKING CORRECTLY
      //I STILL DO NOT KNOW HOW TO FIC THIS SO I WILL LEAVE IT AS IS FOR NOW
      //THE UPSIDE IS THE HEADER ROUTES STILL WORK
      //THE DOWNSIDE IS THAT THE THE DTORYBOOK PAGE FOR THE HEADER CONTAINS AN ERROR.

      //<Router>
      <div style={headerStyle}>
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="page-header">
              <h1>
                Bookmark Vault 
              </h1>
              <Link style={linkStyle} to="/">Vault</Link> ----- <Link style={linkStyle} to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
      //</Router>
    );
  }
}

//STYLES FOR HEADER COMPONENTS
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: 'white'
}

export default Header;