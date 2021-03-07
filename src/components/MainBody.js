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
    const states = [currState,1,2,1];
    const names = [props.name,"Yuma","Kent","Arno"];
    const callbackFunction2 = (childData) => {
        setCurrState(childData);
        props.parentCallback(childData);
    };

    return (
        <>
         
            <div>
                <BuildingMadoArray value = {states} nameList = {names}/>
                
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