import React, { Component } from "react";
import KeyboardEventHandler from 'react-keyboard-event-handler';


export default class DifficultyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {indicator :0 };
        if(this.props.location.state==null){
            this.props.history.push({ pathname: "/questionPage"});
        }
    }
    nextPage=()=>{
        this.props.history.push({ pathname: "/questionPage", state: [this.props.location.state,this.state.indicator]} );
    }
    realSetState=(quantity)=>{
        this.setState({indicator: (this.state.indicator+quantity)%3})
    }
    mouseEntered1=()=>{
        this.setState({indicator: 0})
    }
    mouseEntered2=()=>{
        this.setState({indicator: 1})
    }
    mouseEntered3=()=>{
        this.setState({indicator: 2})
    }
    render() {
        return(
            <div className = "main">
                
                
                <KeyboardEventHandler
                    handleKeys={['left','right','enter','space']}
                    onKeyEvent={(key, e) =>{ 
                        console.log(key)
                        switch(key){
                            case 'left':
                                 this.realSetState(-1)
                                break;
                            case 'right':
                                this.realSetState(1)
                                break;
                            case 'enter':
                                this.nextPage()
                                break;
                            case 'space':
                                this.nextPage()
                                break;
                        }
                    }} />

                <table className="mainTable">
                    <tbody>
                    <tr> 
                    <td className="maintableElement" style={{border:this.state.indicator==0?"solid 10px rgb(87, 87, 170)":null, backgroundColor:"darkturquoise"}} onMouseEnter={this.mouseEntered1} onClick={this.nextPage}> Easy <p className="difficultyDescription">(5seconds per question)</p></td>
                    <td className="maintableElement" style={{border:this.state.indicator==1 || this.state.indicator==-2?"solid 10px rgb(87, 87, 170)":null, backgroundColor:"rgba(86, 88, 88, 0.596)"}} onMouseEnter={this.mouseEntered2} onClick={this.nextPage}> Medium <p className="difficultyDescription" style={{color:"aliceblue"}}>(2seconds per question)</p></td>
                    <td className="maintableElement" style={{border:this.state.indicator==2 || this.state.indicator==-1?"solid 10px rgb(87, 87, 170)":null, backgroundColor:"crimson"}} onMouseEnter={this.mouseEntered3} onClick={this.nextPage}> Hard <p className="difficultyDescription">(1seconds per question)</p></td>
                    </tr>
                    </tbody>
                 </table>


            </div>
        )
    }



}