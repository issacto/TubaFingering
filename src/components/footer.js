import React, { Component } from "react";
import "../stylesheet.css"

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <p className="footerWords" style={{display:"inline"}}>@Copyright </p>
                <a href={"https://github.com/issacto"}><p className="footerWords"  style={{display:"inline"}}> TOTO2021</p></a>

            </div>
        )
    }



}