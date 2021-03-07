import React from 'react';
import DropDown from "./DropDown";
import Mado from "./Mado";
import BuildingMadoArray from "./Building"
const white = {
  position: 'fixed',
  backgroundColor: 'white',
  justify: 'left',
  width: '20%',
  bottom: '0',
};
const MainBody = (props) => {
    const [currState, setCurrState] = React.useState(props.currState);
    const states = props.states;
    /*
    if (props.name != props.names[0]){
        let i = 0;
        let pos = 0;
        while (i < 4) {
            if (props.name == props.names[i]){
                pos = i;
            }
            i++;
        }
        props.names[pos] = props.names[0];
        props.names[0] = props.name;
        props.states[pos] = props.states[0];
        props.states[0] = props.currState;
    }*/

    const names = props.names;
    const callbackFunction2 = (childData) => {
        setCurrState(childData);
        props.parentCallback(childData);
    };

    return (
        <>
         
            <div>
                <BuildingMadoArray users = {props.users}/>
                
            </div>
            <div>
            <div class="nes-container with-title is-centered" style={white} >
                <Mado  value2 = {props.currState}/>
                <DropDown name = {props.name} parentCallback = {callbackFunction2}/>
            </div>
            </div>
        </>
    );
}

export default MainBody;