import React from 'react';
import DropDown from "./DropDown";
import Mado from "./Mado";

const MainBody = (props) => {
    const [currState, setCurrState] = React.useState(props.currState);
    const callbackFunction2 = (childData) => {
        setCurrState(childData);
        props.parentCallback(childData);
    };

    return (
        <>
            <div>
                <Mado  value2 = {props.currState}/>
            </div>
            <div>
                <DropDown name = {props.name} parentCallback = {callbackFunction2}/>
            </div>
        </>
    );
}

export default MainBody;