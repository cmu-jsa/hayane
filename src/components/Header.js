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
    const [isJoinSeen, setIsJoinSeen] = React.useState(false);
    const [name, setName] = React.useState('Tartan');
    const [curDormId, setCurDormId] = React.useState(1);
    const togglePop = () => {
        setIsSeen(!isSeen);
    };
    const toggleJoinPop = () => {
        setIsJoinSeen(!isJoinSeen);
    };
    const callbackFunction = (childData) => {
        setName(childData);
        props.parentCallback(childData);
    };
    const joinRoom = (childData) => {
        setCurDormId(childData);
        props.onJoinRoom(childData);
    };
    
    return(
        <div class="header">
            <div className="game-board">
                <div class="nes-container with-title is-centered" style={white} >
                    <p style = {paragraph}> Hi, {name}! I hope you're having a pleasant evening. </p>
                    <p style = {paragraph}>DormId: {props.dormId}</p>
                </div>
            </div>
            <div className="btn" >
                <button className = "nes-btn is-primary" onClick = {togglePop}>Edit your info</button>
                <button onClick={toggleJoinPop}>Join a room!</button>
            </div>
            {isSeen ? <PopUp  value = {name} parentCallback = {callbackFunction} toggle={togglePop} mode={'info'} /> : null}
            {isJoinSeen ? <PopUp  value = {curDormId} parentCallback = {joinRoom} toggle={toggleJoinPop} mode={'room'} /> : null}
        </div>
    );
}

export default Header;