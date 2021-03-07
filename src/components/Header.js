import React, { Component } from 'react';
import PopUp from "./PopUp";

const paragraph = {
    fontFamily: 'PressStart2PRegular',
    fontWeight: 'normal',
    fontStyle: 'normal',
    backgroundColor: 'white',
};
const white = {
  backgroundColor: 'white',
};

const Header = (props) => {
    const [isSeen, setIsSeen] = React.useState(false);
    const [name, setName] = React.useState('Tartan');
    const togglePop = () => {
        setIsSeen(!isSeen);
    };
    const callbackFunction = (childData) => {
        setName(childData);
        props.parentCallback(childData);
    };

    const createRoom = () => {
        ws.send(JSON.stringify({cmd: 'create', dormId: 0, name: userName, status: userState}))
    }
 
    return(
        <div class="header">
            <div className="game-board">
                <div class="nes-container with-title is-centered" style={white} >
                    <p style = {paragraph}> Hi, {name}! I hope you're having a pleasant evening. </p>
                </div>
            </div>
            <div className="btn" style={{display: 'inline-block'}}>
                    <button className = "nes-btn is-primary" onClick = {togglePop}>Edit your info</button>
                    { !props.dormId ? <button className = "nes-btn is-primary" onClick = {createRoom}>Create Dorm</button> : null }
                    { !props.dormId ? <button className = "nes-btn is-primary" onClick = {togglePop}>Join Dorm</button> : null }
            </div>
            {isSeen ? <PopUp  value = {name} parentCallback = {callbackFunction} toggle={togglePop} /> : null}

        </div>
    );
}

export default Header;