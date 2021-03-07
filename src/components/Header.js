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
    
  
 
    return(
        <div class="header">
            <div className="game-board">
                <div class="nes-container with-title is-centered" style={white} >
                    <p style = {paragraph}> HI, {name}! Good morning. Thou hast had a good night's sleep, I hope.  </p>
                </div>
            </div>
            <div className="btn" >
                    <button className = "nes-btn is-primary" onClick = {togglePop}>Edit your info</button>
            </div>
            {isSeen ? <PopUp  value = {name} parentCallback = {callbackFunction} toggle={togglePop} /> : null}

        </div>
    );
}

export default Header;