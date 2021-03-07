import React from 'react';
import DropDown from "./DropDown";
import Mado from "./Mado";
import BuildingMadoArray from "./Building"

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
                <Mado  value2 = {props.currState}/>
            </div>
            <div>
                <DropDown name = {props.name} parentCallback = {callbackFunction2}/>
            </div>
        </>
    );
}

export default MainBody;