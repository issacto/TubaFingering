export const NotesArray =[
    //12*2+1=25
    "F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2",
    "F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3",
    "F3"
]
export const NotesDisplayMap= new Map([
    ["F1","Low F"],
    ["F#1","Low F#"],
    ["G1","Low G"],
    ["G#1","Low G#/ Ab"],
    ["A1","Low A"],
    ["A#1","Low A#/ Bb"],
    ["B1","Low B"],
    ["C2","Low C"],
    ["C#2","Low C#"],
    ["D2","Low D"],
    ["D#2","Low D#/ Eb"],
    ["E2","Low E"],
    ["F2","Middle F"],
    ["F#2","Middle F#"],
    ["G2","Middle G"],
    ["G#2","Middle G#/ Ab"],
    ["A2","Middle A"],
    ["A#2","Middle A#/ Bb"],
    ["B2","Middle B"],
    ["C3","Middle C"],
    ["C#3","Middle C#"],
    ["D3","Middle D"],
    ["D#3","Middle D#/ Eb"],
    ["E3","Middle E"],
    ["F3","High F"] ])

/*
//
const PossibleNotes1 = 'u,i,o,p,space,u+i,u+o,u+p,u+space,i+o,i+p,i+space,o+p,o+space,p+space,'
//const PossibleNotes2 = 'u+i,u+o,u+p,u+space,i+o,i+p,i+space,o+p,o+space,p+space,'
const PossibleNotes3 = 'u+i+p,u+o+i,u+o+space,u+o+p,u+p+space,u+i+space,i+o+p,i+o+space,i+p+space,o+p+space,'
const PossibleNotes4 = 'u+o+i+p,space+o+i+p,u+space+i+p,u+o+space+p,u+o+i+space,'
const PossibleNotes5 = 'u+o+i+p+space'
export const PossibleNotes =PossibleNotes1+PossibleNotes3+PossibleNotes4+PossibleNotes5
*/


export const Bb3TubaMap= new Map([
    ["F1",["u","o"]],
    ["F#1",["i","o"]],
    ["G1",["u","i"]],
    ["G#1",["u"]],
    ["A1",["i"]],
    ["A#1",[]],
    ["B1",["i","u","o"]],
    ["C2",["u","o"]],
    ["C#2",["i","o"]],
    ["D2",["u","i"]],
    ["D#2",["u"]],
    ["E2",["i"]],
    ["F2",[]],
    ["F#2",["i","o"]],
    ["G2",["u","i"]],
    ["G#2",["u"]],
    ["A2",["i"]],
    ["A#2",[]],
    ["B2",["u","i"]],
    ["C3",["u"]],
    ["C#3",["i"]],
    ["D3",[]],
    ["D#3",["u"]],
    ["E3",["i"]],
    ["F3",[]] ])

export const Bb4TubaMap= new Map([
    ["F1",["p"]],
    ["F#1",["i","o"]],
    ["G1",["u","i"]],
    ["G#1",["u"]],
    ["A1",["i"]],
    ["A#1",[]],
    ["B1",["i","p"]],
    ["C2",["p"]],
    ["C#2",["i","o"]],
    ["D2",["u","i"]],
    ["D#2",["u"]],
    ["E2",["i"]],
    ["F2",[]],
    ["F#2",["i","o"]],
    ["G2",["u","i"]],
    ["G#2",["u"]],
    ["A2",["i"]],
    ["A#2",[]],
    ["B2",["u","i"]],
    ["C3",["u"]],
    ["C#3",["i"]],
    ["D3",[]],
    ["D#3",["u"]],
    ["E3",["i"]],
    ["F3",[]] ])

export const CTubaMap= new Map([
    ["F1",["p","space"]],
    ["F#1",["i","p"]],
    ["G1",["p"]],
    ["G#1",["i","o"]],
    ["A1",["u","i"]],
    ["A#1",["u"]],
    ["B1",["i"]],
    ["C2",[]],
    ["C#2",["i","p"]],
    ["D2",["p"]],
    ["D#2",["i","o"]],
    ["E2",["u","i"]],
    ["F2",["u"]],
    ["F#2",["i"]],
    ["G2",[]],
    ["G#2",["i","o"]],
    ["A2",["u","i"]],
    ["A#2",["u"]],
    ["B2",["i"]],
    ["C3",[]],
    ["C#3",["i"]],
    ["D3",["u"]],
    ["D#3",["i"]],
    ["E3",[]],
    ["F3",["u"]] ])

export const EbTubaMap= new Map([
    ["F1",["u","i","o","p"]],
    ["F#1",["u","o","p"]],
    ["G1",["u","i","p"]],
    ["G#1",["u","i","p"]],
    ["A1",["i","p"]],
    ["A#1",["p"]],
    ["B1",["i","o"]],
    ["C2",["u","i"]],
    ["C#2",["u"]],
    ["D2",["i"]],
    ["D#2",[]],
    ["E2",["i","p"]],
    ["F2",["p"]],
    ["F#2",["i","o"]],
    ["G2",["u","i"]],
    ["G#2",["u"]],
    ["A2",["i"]],
    ["A#2",[]],
    ["B2",["i","o"]],
    ["C3",["u","i"]],
    ["C#3",["u"]],
    ["D3",["i"]],
    ["D#3",[]],
    ["E3",["i"]],
    ["F3",[]] ])

export const FTubaMap= new Map([
    ["F1",[]],
    ["F#1",["u","i","o","p","space"]],
    ["G1",["u","i","o","p"]],
    ["G#1",["u","o","p"]],
    ["A1",["i","o","p"]],
    ["A#1",["u","i","p"]],
    ["B1",["i","p"]],
    ["C2",["p"]],
    ["C#2",["i","o"]],
    ["D2",["u","i"]],
    ["D#2",["u"]],
    ["E2",["i"]],
    ["F2",[]],
    ["F#2",["i","p"]],
    ["G2",["p"]],
    ["G#2",["i","o"]],
    ["A2",["u","i"]],
    ["A#2",["u"]],
    ["B2",["i"]],
    ["C3",[]],
    ["C#3",["i","o"]],
    ["D3",["u","i"]],
    ["D#3",["u"]],
    ["E3",["i"]],
    ["F3",[]] ])


export function getMap(name){
    switch(name){
        case "Bb (3 values)":
            return Bb3TubaMap;
        case "Bb (4 values)":
            return Bb4TubaMap;
        case "C (5 values)":
            return CTubaMap;
        case "Eb (4 values)":
            return EbTubaMap;
        case "F (5 values)":
            return FTubaMap;
    }

}