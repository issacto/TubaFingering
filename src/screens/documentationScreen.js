import React, { Component } from "react";
import  {NotesArray,NotesDisplayMap,getMap} from "../components/notes";


export default class DocumentationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indicator :0 ,
            Bb3Map:getMap("Bb (3 values)"),
            Bb4Map:getMap("Bb (4 values)"),
            CMap:getMap("C (5 values)"),
            EbMap:getMap("Eb (4 values)"),
            FMap:getMap("F (5 values)"),
        };
    }

    render() {
        return(
            <div className = "main">

                    <table className="documentationTable" style={{justifyContent:"center",width:"auto", borderSpacing:"1.5vh"}}>
                    <tr style={{marginBottom:"2vh"}}>
                        <th style={{ fontSize:"4vh", }}> Notes</th>
                        <th style={{ fontSize:"4vh", color:"darkgoldenrod"}}>Bb 3 Valves</th>
                        <th style={{ fontSize:"4vh", color:"rgb(141, 121, 8)"}}>Bb 4 Valves</th>
                        <th style={{ fontSize:"4vh", color:"rgba(86, 88, 88, 0.596)"}}>C 5 Valves</th>
                        <th style={{ fontSize:"4vh", color:"rgb(19, 53, 82)"}}>Eb 4 Valves</th>
                        <th style={{ fontSize:"4vh", color:"rgb(23, 75, 64)"}}>F 5 Valves</th>
                    </tr>
                    <tbody >
                    {
                        NotesArray.map((note, index) => (
                            <tr
                            >
                            <td> {NotesDisplayMap.get(note)}</td> 
                            <td style={{ backgroundColor:"darkgoldenrod"}}> {this.state.Bb3Map.get(note)}</td> 
                            <td style={{ backgroundColor:"rgb(141, 121, 8)"}}> {this.state.Bb4Map.get(note)}</td> 
                            <td style={{ backgroundColor:"rgba(86, 88, 88, 0.596)"}}> {this.state.CMap.get(note)}</td> 
                            <td style={{ backgroundColor:"rgb(19, 53, 82)"}}> {this.state.EbMap.get(note)}</td> 
                            <td style={{ backgroundColor:"rgb(23, 75, 64)"}}> {this.state.FMap.get(note)}</td> 
                            </tr>
                        ))

                    }
                    </tbody>
                    </table>


            </div>
        )
    }



}