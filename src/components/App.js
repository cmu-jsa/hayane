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
    const [userName, setName] = React.useState('Tartan');
    const [userState, setCurrState] = React.useState(0);

    const hostname = window.location.hostname;
    const ws = new WebSocket('wss://' + hostname + ':8080')

    ws.onopen = () => {
        console.log('connected to websocket')
    }

    ws.onmessage = (event) => {
        console.log(JSON.parse(event.data))
    }

    const createRoom = () => {
        ws.send(JSON.stringify({cmd: 'create', dormId: 1, name: userName, status: userState}))
    }

    const joinRoom = () => {
        ws.send(JSON.stringify({cmd: 'join', dormId: 1, name: userName, status: userState}))
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

    return ( 
            <>
                <Header parentCallback = {newUserName}/>
                <MainBody name = {userName} currState = {userState} parentCallback = {newUserState}/>
                <Building/>
                <button onClick={createRoom}>CREATE</button>
                <button onClick={joinRoom}>JOIN</button>
            </>
      );
}

export default App;
