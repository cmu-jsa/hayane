import React from 'react';
import Header from "./Header"

import MainBody from "./MainBody";
import "nes.css/css/nes.min.css";
import Building from "../../public/buildings.svg"

const paragraph = {
    fontFamily: 'PressStart2PRegular',
    fontWeight: 'normal',
    fontStyle: 'normal',
    backgroundColor: 'white',
};


const App = () => {

    /*const [isSeen, setIsSeen] = React.useState(false);
    const [name, setName] = React.useState('Tartan');*/
    const [userName, setName] = React.useState('Tartan');
    const [userState, setCurrState] = React.useState(0);

    
    const newUserState = (childData) => {
      setCurrState(childData);
    };
    const newUserName = (childData) => {
      setName(childData);
    };
    /*const callbackFunction = (childData) => {
        setName(childData);
    };
    const callbackFunction2 = (childData) => {
        setCurrState(childData);
    };*/

    return ( 
            <>
            <Header parentCallback = {newUserName}/>
            <MainBody name = {userName} currState = {userState} parentCallback = {newUserState}/>
            <Building/>
            </>
           
            
   
      );
}
/*<div className="game">
            <div className="btn" >
                <button className = "nes-btn is-primary" onClick = {togglePop}>Edit your info</button>
            </div>
            
            <div className="game-board">
                <div class="nes-container with-title is-centered" style={white} >
                    <p style = {paragraph}> HI, {name}! Good morning. Thou hast had a good night's sleep, I hope.  </p>
                </div>
            </div>
            <div>
                <Mado  value2 = {currState}/>
            </div>
            <div>
                <DropDown name = {userName} parentCallback = {newUserState}/>
            </div>
            </>*/
export default App;
