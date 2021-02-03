import React, { Component } from "react";
import {keyMapping, difficultyMapping} from "../components/hashMap"
import { Link } from "react-router-dom";
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import styles from 'react-awesome-button/src/styles/themes/theme-bojack';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import  { ReactComponent as ChooseLogo } from "../Images/ReadyPage/choose.svg";
import  { ReactComponent as InstructionsLogo } from "../Images/ReadyPage/instructions.svg";


export default class ReadyPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            prevState:[keyMapping.get(this.props.location.state[0]),difficultyMapping.get(this.props.location.state[1]),this.props.location.state[2]]
        }
        
    }
    nextPage=()=>{
        this.props.history.push({ pathname: "/gamePage", state: this.state.prevState});
    }

    render() {
        
        
        return(
            <div className = "main">
                <KeyboardEventHandler
                    handleKeys={['enter','space']}
                    onKeyEvent={(key, e) =>{ 
                        this.nextPage();
                    }} />

                <div className="leftContainerForReady">
                    <h1 style={{display:"inline"}}>Instructions {" "}</h1><InstructionsLogo fill="white" stroke="rgb(87, 87, 170)" height="11%" width="11%" style={{display:"inline"}}/> 
                    <br/><br/>
                    <div style={{textAlign:"left",width:"100%"}}>
                    <ul>
                    <li><h2 style={{color:"white"}}>Press U, I, O, P, /space/ for the first, second, third, fourth and fifth valve respectively</h2></li>
                    <li><h2 style={{color:"white"}}>Do not click anything if no valve is needed eg Bb for Bbtuba</h2></li>
                    <li><h2 style={{color:"white"}}>Range from f1 (Low F) to F3 (High F)</h2></li>
                    <li>
                    <Link to="/documentationPage" className="col s5 brand-logo center black-text">
                        <h2 style={{color:"white"}}>Full Documentation </h2>
                    </Link>
                    </li>
                    
                    </ul>
                    </div>
                </div>
                <div className="middleContainerForReady">
                    <h1 style={{display:"inline"}}> Chosen {" "}</h1> <ChooseLogo fill="white" stroke="rgb(87, 87, 170)"  height="11%" width="11%" style={{display:"inline"}}/> 
                    <br/><br/>
                    <div style={{textAlign:"left",width:"100%"}}>
                    <ul>
                    <li><h2 style={{color:"white"}}>{this.state.prevState[0]} Tuba</h2></li>
                    <li><h2 style={{color:"white"}}>{this.state.prevState[2]} {this.state.prevState[1]} Questions</h2></li>
                    
                    </ul>
                    </div>
                </div>
                <div className="rightContainerForReady">
                <AwesomeButtonProgress
                    cssModule={AwesomeButtonStyles}
                    type="primary"
                    cssModule={styles}
                    onPress={next => {
                    this.nextPage();
                    }}
                >
                    Start
                </AwesomeButtonProgress>
                </div>
                
            </div>
        )
    }



}

//{//<li><h2 style={{color:"white"}}>{difficultyMapping.get(this.props.location.state[1])} Questions</h2></li>}