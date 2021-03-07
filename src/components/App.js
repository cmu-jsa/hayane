import React from 'react';
import PopUp from "./popUp";
import DropDown from "./DropDown";
import Mado from "./Mado";
import "nes.css/css/nes.min.css";

const paragraph = {
    fontFamily: 'PressStart2PRegular',
    fontWeight: 'normal',
    fontStyle: 'normal',
    backgroundColor: 'white',
};
const white = {
  backgroundColor: 'white',
};

const App = () => {
    const [isSeen, setIsSeen] = React.useState(false);
    const [name, setName] = React.useState('hi');
    const [currState, setCurrState] = React.useState(0);
    
    const togglePop = () => {
        setIsSeen(!isSeen);
    };
    const callbackFunction = (childData) => {
        setName(childData);
    };
    const callbackFunction2 = (childData) => {
        setCurrState(childData);
    };

    return ( 
        <div className="game">
            <div className="btn" >
                <button className = "nes-btn is-primary" onClick = {togglePop}>Edit your info</button>
            </div>
            
            <div className="game-board">
                <div class="nes-container with-title is-centered" style={white} >
                    <p style = {paragraph}> HI, {name}! Good morning. Thou hast had a good night's sleep, I hope.  </p>
                </div>
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
            {isSeen ? <PopUp  value = {name} parentCallback = {callbackFunction} toggle={togglePop} /> : null}
            <div>
                <Mado  value2 = {currState}/>
            </div>
            <div>
                <DropDown name = {name} parentCallback = {callbackFunction2}/>
            </div>
        </div>
      );
}

export default App;
