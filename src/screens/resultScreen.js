import React, { Component } from "react";
import KeyboardEventHandler from 'react-keyboard-event-handler';
import ReactStoreIndicator from 'react-score-indicator'
import  {NotesArray,getMap} from "../components/notes";



export default class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indicator: 0 ,
            //tubaChose, noOfQuestions, totalCorrectAnsEntered,totalIncorrectAnsEntered,correctNotes,incorrectNotes
            tubaChose: this.props.location.state[0],
            noOfQuestions: this.props.location.state[1],
            totalCorrectAnsEntered: this.props.location.state[2],
            totalIncorrectAnsEntered: this.props.location.state[3],
            correctNotes: this.props.location.state[4],
            incorrectNotes: this.props.location.state[5],
            incorrectCorrectAnswers: []
        }
        this.loopOverIncorrect();
    }
    backLandingPage=()=>{
        this.props.history.push({ pathname: "/"});
    }
    backKeyPage=()=>{
        this.props.history.push({ pathname: "/keyPage"});
    }
    changeButton=()=>{
        if(this.state.indicator==0) this.setState({indicator:1})
        else this.setState({indicator:0})
    }
    mouseEntered1=()=>{
        this.setState({indicator: 0})
    }
    mouseEntered2=()=>{
        this.setState({indicator: 1})
    }
    nextPage=()=>{
        if(this.state.indicator==0){
            this.props.history.push({ pathname: "/"} );
        
        }else{
        this.props.history.push({ pathname: "/keyPage"} );
        }
    }
    loopOverIncorrect=()=>{
        const map =getMap(this.state.tubaChose);
        var answer =""
        for(var x of this.state.incorrectNotes){
            this.state.incorrectCorrectAnswers.push({
                note: x,
                fingering: map.get(x)
            });
        }
        return answer;
    }
    render() {
        return(
            <div className = "resultMainPart">
                <KeyboardEventHandler
                    handleKeys={['left','right','enter','space']}
                    onKeyEvent={(key, e) =>{ 
                        switch(key){
                            case 'left':
                                this.changeButton()
                                break;
                            case 'right':
                                this.changeButton()
                                break;
                            case 'space':
                                this.nextPage()
                                break;
                            case 'enter':
                                this.nextPage()
                                break;
                        }
                    }} />
                    <div className="leftGameContainer" style={{alignItems:"center",width:"55%"}}> 
                    <table className="resultTable">
                    <tr style={{marginBottom:"1.4vh"}}>
                        <th>Incorrect Notes</th>
                        <th>Correct Fingering</th>
                    </tr>
                    <tbody >
                    {
                        this.state.incorrectCorrectAnswers.map((incorrectNotes, index) => (
                            <tr><td> {incorrectNotes.note}</td> <td> {incorrectNotes.fingering} </td></tr>
                        ))

                    }
                    </tbody>
                    </table>
                    </div>
                    <div className="middleGameContainer" style={{width:"55%"}}>
                    <ReactStoreIndicator
                   
                    value={this.state.totalCorrectAnsEntered}
                    maxValue={this.state.noOfQuestions}
                    lineWidth={20}
                    width={300}
                    fadedOpacity={20}
                    colors={[
                        "#d12000",
                        "#ed8d00",
                        "#f1bc00",
                        "#84c42b",
                        "#53b83a",
                        "#3da940",
                        "black",
                        "black"
                      ]}

                    />
                    </div>
                    <div className="rightGameContainer" style={{width:"55%"}}>

                    <button className="resultButton" style={{border:this.state.indicator==0 ?"solid 5px white":"solid 5px rgb(87, 87, 170)"}} onMouseEnter={this.mouseEntered1} onClick={this.nextPage}> HomePage</button>
                    <button className="resultButton" style={{border:this.state.indicator==1 ?"solid 5px  white ":"solid 5px rgb(87, 87, 170)"}} onMouseEnter={this.mouseEntered1} onClick={this.nextPage}> Play Again</button>
 
                    </div>



            </div>
        )
    }



}