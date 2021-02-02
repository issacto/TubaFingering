import React, { Component } from "react";
import KeyboardEventHandler from 'react-keyboard-event-handler';


export default class KeyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {indicator :0 };
    }
    nextPage=()=>{
        this.props.history.push({ pathname: "/difficultyPage", state: this.state.indicator} );
    }
    realSetState=(quantity)=>{
        console.log(quantity)
        this.setState({indicator: (this.state.indicator+quantity)%5})
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
    mouseEntered4=()=>{
        this.setState({indicator: 3})
    }
    mouseEntered5=()=>{
        this.setState({indicator: 4})
    }
    render() {
        return(
            <div className = "main" style={{alignItems:"center"}}>
                
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
                            case 'space':
                                this.nextPage()
                                break;
                            case 'enter':
                                this.nextPage()
                                break;
                        }
                    }} />

                <table className="mainTable" >
                    <tbody>
                    <tr> 
                    <td className="maintableElementKeys" style={{border:this.state.indicator==0 ?"solid 10px rgb(87, 87, 170)":null, backgroundColor:"darkgoldenrod"}} onMouseEnter={this.mouseEntered1} onClick={this.nextPage}> Bb <p className="smallDescription">(3valves)</p></td>
                    <td className="maintableElementKeys" style={{border:this.state.indicator==1 ||  this.state.indicator==-4 ? "solid 10px rgb(87, 87, 170)":null, backgroundColor:"rgb(141, 121, 8)"}} onMouseEnter={this.mouseEntered2} onClick={this.nextPage}> Bb <p className="smallDescription">(4valves)</p></td>
                    <td className="maintableElementKeys" style={{border:this.state.indicator==2 || this.state.indicator==-3?"solid 10px rgb(87, 87, 170)":null, backgroundColor:"rgba(86, 88, 88, 0.596)"}} onMouseEnter={this.mouseEntered3} onClick={this.nextPage}> C <p className="smallDescription">(5valves)</p></td>
                    <td className="maintableElementKeys" style={{border:this.state.indicator==3 || this.state.indicator==-2?"solid 10px rgb(87, 87, 170)":null, backgroundColor:"rgb(19, 53, 82)"}} onMouseEnter={this.mouseEntered4} onClick={this.nextPage}> Eb <p className="smallDescription">(4valves)</p></td>
                    <td className="maintableElementKeys" style={{border:this.state.indicator==4 || this.state.indicator==-1?"solid 10px rgb(87, 87, 170)":null, backgroundColor:"rgb(23, 75, 64)"}} onMouseEnter={this.mouseEntered5} onClick={this.nextPage}> F <p className="smallDescription">(5valves)</p></td>
                    </tr>
                    </tbody>
                 </table>

                {/*<button className="startButton" onClick={this.nextPage}>
                    Start Game
        </button>*/}

            </div>
        )
    }



}