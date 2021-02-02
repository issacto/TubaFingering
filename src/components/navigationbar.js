import React, { Component } from "react";
import "../stylesheet.css"
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Images/finger.svg";

export default class NavigationBar extends Component {
    render() {
        return(
            <div className="navigationbar">
                <Link to="/" className="col s5 brand-logo center black-text" style={{
                fontFamily: "monospace",
                fontSize: 20,
                color:"white",
              }}>
                <h1 style={{display:"inline"}}>TubaFingering</h1>
                <Logo fill="white" stroke="white" width="2%" height="70%" style={{display:"inline"}}/>
                
                </Link>
            </div>
        )
    }



}