import React, { Component } from "react";
import {DifficultyToSeconds} from "../components/hashMap";
import KeyboardEventHandler from 'react-keyboard-event-handler';
import  {NotesArray,NotesDisplayMap,getMap} from "../components/notes";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CorrectLogo from "../Images/AnswerResponse/check.svg";
import WrongBoardLogo from "../Images/AnswerResponse/wrong.svg";

export default class ReadyPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            notesArray:[],
            noOfQuestions:this.props.location.state[2],
            seconds: DifficultyToSeconds.get(this.props.location.state[1]),
            noteIndicator:0,
            totalCorrectAnsEntered:0,
            totalIncorrectAnsEntered:0,
            output: 'Hello, I am a component that listens to keydown and keyup of a',
            correctAnsEntered: false ,
            ansEntered:false,
            fullSeconds: DifficultyToSeconds.get(this.props.location.state[1]),
            tempClickedNotes:[],
            tempIsCorrect:false,
            tubaChose:this.props.location.state[0],
            tubaChosenMap: getMap(this.props.location.state[0]),
            correctNotes:[],
            incorrectNotes:[]

        }
        console.log(this.props.location.state[1])
        //10questions
        //const size = 10
        for(var i =0;i<this.state.noOfQuestions;i++){
            var randomIndex = Math.floor(Math.random() * (NotesArray.length-1));
            this.state.notesArray.push(NotesArray[randomIndex])
        }
        
    }
    nextPage =()=>{
        this.props.history.push("/resultPage",
        //tubaChose, noOfQuestions, totalCorrectAnsEntered,totalIncorrectAnsEntered,correctNotes,incorrectNotes 
        [this.state.tubaChose,this.state.noOfQuestions,this.state.totalCorrectAnsEntered,
        this.state.totalIncorrectAnsEntered,this.state.correctNotes,this.state.incorrectNotes
        ]);
    }
    realSetIndicator =()=>{
        if(this.state.tubaChosenMap.get(this.state.notesArray[this.state.noteIndicator]).length==0 && !this.state.ansEntered){
            this.recordCorrectAnswer(this.state.notesArray[this.state.noteIndicator]);
        }else if(!this.state.tempIsCorrect){
            this.recordIncorrectAnswer(this.state.notesArray[this.state.noteIndicator]);
        }
        
        setTimeout(()=>{ 
        this.setState({noteIndicator:this.state.noteIndicator+1});
        this.setState({ansEntered: false })
        this.setState({correctAnsEntered: false })
        this.setState({tempIsCorrect:false})
        },500)
    }
    renderTime = ({ remainingTime }) => {
        if(this.state.correctAnsEntered){
            //return <div className="timer"><div className="value">Yes</div></div>;
            
            return <div className="timer"><img src={CorrectLogo} width="50%"/></div>;

        }
        else if (remainingTime == 0 ) {
                if(this.state.tubaChosenMap.get(this.state.notesArray[this.state.noteIndicator]).length==0 && !this.state.ansEntered){
                   return <div className="timer"><img src={CorrectLogo} width="50%"/></div>;
                }else{ 
                    return <div className="timer"><div className="value">Next Q..</div></div>;}
              //return <div className="timer"><img src={SkipLogo} width="50%"/></div>;
        }
        else if (remainingTime> 0.1){
        return (
          <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
          </div>
        );
        }
    };
    addTempClickedNotes(x){
        this.setState({ansEntered:true});
        let { tempClickedNotes } = this.state;
        tempClickedNotes.push(x)
        console.log(tempClickedNotes,",  NOtes")
        //Check Answer
        setTimeout(()=>{ 
        if(JSON.stringify(tempClickedNotes)==JSON.stringify(this.state.tubaChosenMap.get(this.state.notesArray[this.state.noteIndicator]))){
            this.setState({correctAnsEntered:true},
            this.recordCorrectAnswer(this.state.notesArray[this.state.noteIndicator])
            )
        } }, 10);
        setTimeout(function(){ tempClickedNotes.shift(); }, 20);
    }
    recordCorrectAnswer= note=>{
        if(this.state.tempIsCorrect==false){
            this.setState({totalCorrectAnsEntered: this.state.totalCorrectAnsEntered+1});
            this.state.correctNotes.push(note);
            this.setState({tempIsCorrect: true});
        }
        //correctAnswered+=1;

    }
    recordIncorrectAnswer=note=>{
        this.state.incorrectNotes.push(note)
        this.setState({totalIncorrectAnsEntered: this.state.totalIncorrectAnsEntered+1});
        //incorrectAnswered+=1
    }

    render() {

           
        return(
            
            <div className = "main">
                <KeyboardEventHandler
                    handleKeys={['u','i','o','p','space']}
                    onKeyEvent={(key, e) =>{ 
                        console.log(key);
                        this.addTempClickedNotes(key);
                    }} />


                    <div className="leftGameContainer">
                    <img src={WrongBoardLogo} width="24%"/>
                    <p className="displayScore">{this.state.totalIncorrectAnsEntered}</p>
                    </div>
                
                    <div className="middleGameContainer" style={{marginBottom:"11vh"}}>
                        <div style={{marginBottom:"4vh"}}>
                    <p style={{fontSize:"5vh",display:"inline"}}>{this.state.noteIndicator+1}. {this.state.notesArray[this.state.noteIndicator]
                    } </p> <p style={{fontSize:"2vh", display:"inline"}}>({NotesDisplayMap.get(this.state.notesArray[this.state.noteIndicator])})</p>
                    </div>
                    
                    <div className="timer-wrapper">

                    
                    <CountdownCircleTimer
                        isPlaying
                        duration={this.state.fullSeconds}
                        size="350"
                        strokeWidth="18"
                        onComplete={() => {

                            this.realSetIndicator();

                            if(this.state.noteIndicator==this.state.noOfQuestions-1){
                                setTimeout(()=>{ this.nextPage()},300)
                            }
                            console.log("finished") // repeat animation in 1.5 seconds
                            return [true, 500]
                        }}
                        colors={[["#004777", 0.33], ["#383a96", 0.33], ["#A30000"]]}
                    >

                    {this.renderTime}
                   
                </CountdownCircleTimer>
                
                </div>
                </div>
                <div className="rightGameContainer">
                <img src={CorrectLogo} width="24%" style={{borderRadius:"50%"}}/>
                    <p className="displayScore">{this.state.totalCorrectAnsEntered}</p>
                </div>
            </div>
        )
    }
}



/*
{this.state.notesArray
                }
                {this.state.seconds}
*/
//{//<li><h2 style={{color:"white"}}>{difficultyMapping.get(this.props.location.state[1])} Questions</h2></li>}
//{({ remainingTime }) =><p style={{fontSize:"12vh"}}>{remainingTime}</p> }