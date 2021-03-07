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

    
    const ws = new WebSocket('ws://localhost:40510')

    ws.onopen = () => {
        console.log('connected to websocket')
    }

    ws.onmessage = (event) => {
        console.log(JSON.parse(event.data))
    }

    const createRoom = () => {
        ws.send(JSON.stringify({cmd: 'create', dormId: 1, name: name, status: currState}))
    }

    const joinRoom = () => {
        ws.send(JSON.stringify({cmd: 'join', dormId: 1, name: name, status: currState}))
    }

    const togglePop = () => {
        setIsSeen(!isSeen);
    }
    
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
        ws.send(JSON.stringify({cmd: '', message: childData}))
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

export default App;
