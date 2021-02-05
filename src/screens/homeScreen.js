import React, { Component } from "react";
import "../stylesheet.css"
import  { ReactComponent as Logo }from "../Images/tube.svg";
import history from '../history';
import BbLogo from "../Images/KeysLogos/BbLogo.png"
import CLogo from "../Images/KeysLogos/CLogo.png"
import EbLogo from "../Images/KeysLogos/EbLogo.png"
import FLogo from "../Images/KeysLogos/FLogo.png"
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import styles from 'react-awesome-button/src/styles/themes/theme-indigo';
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    nextPage=()=>{
      this.props.history.push("/keyPage");
    }
    render() {
        return(
                <div class="landPageBody"> 
                 <KeyboardEventHandler
                    handleKeys={['enter','space']}
                    onKeyEvent={(key, e) =>{ 
                        this.nextPage();
                    }} />

                    
                    <div className="leftContainer">
                        <Logo fill="white" stroke="rgb(87, 87, 170)" />
                    </div>

                    <div className= "middleContainer"> 
                           <h1 className="landPageHeader">The first tuba fingering practicing website.</h1>
                           <h2 className="landPageHeader">
                            <br/>Choose your tuba's key, valves and difficulty
                        </h2> 
                    </div>
                    <div className= "rightContainer">
                        <div className="upperContainer">
                            <img src={BbLogo} width="17%"/>
                            <img src={CLogo} width="17%"/>
                            <img src={EbLogo} width="17%"/>
                            <img src={FLogo} width="17%"/>
                        </div>
                        <div className="lowerContainer">
                        <p className="landPageHeader" style={{fontSize:"6vh"}}>Practice now </p>
                        <AwesomeButton
                            cssModule={AwesomeButtonStyles}
                            type="primary"
                            cssModule={styles}
                            size= "large"
                            ripple
                            onPress={() => {
                                this.nextPage()
                            }}
                            >
                           <p style={{fontSize:"3vh"}}>Start </p>
                        </AwesomeButton>

                        <p style={{marginTop:"4vh", fontSize:"2vh",color:"grey"}}>{"<"}, {">"} , {"<"}space{">"}, {"<"}enter{">"} enabled</p>
                        {/*<button className="startButton" onClick={this.nextPage}>
                        Start Game
                        </button>*/}
                        </div>
                    </div>
                   
                </div>
                
        )
    }



}