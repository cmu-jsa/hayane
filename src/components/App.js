import React from 'react';
import Header from "./Header"

import MainBody from "./MainBody";
import "nes.css/css/nes.min.css";

const paragraph = {
    fontFamily: 'PressStart2PRegular',
    fontWeight: 'normal',
    fontStyle: 'normal',
    backgroundColor: 'white',
};


const App = () => {
    const [userName, setName] = React.useState('Tartan');
    const [userState, setCurrState] = React.useState(0);
    const [curDormId, setCurDormId] = React.useState(0);

    // Connect to websocket
    const hostname = window.location.hostname;
    const ws = new WebSocket('ws://' + hostname + ':40510')

    ws.onopen = () => {
        console.log('connected to websocket')
        console.log(window.location.search)
        const dormId = new URLSearchParams(window.location.search).get('dormId')
        console.log(dormId)
        if (dormId) {
            setCurDormId(dormId);
            joinRoom();
            console.log('joined dorm ' + dormId)
        }
    }

    ws.onmessage = (event) => {
        console.log(JSON.parse(event.data))
    }

    const createRoom = () => {
        ws.send(JSON.stringify({cmd: 'create', dormId: 0, name: userName, status: userState}))
    }

    const joinRoom = () => {
        ws.send(JSON.stringify({cmd: 'join', dormId: curDormId, name: userName, status: userState}))
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

            <Header parentCallback = {newUserName} dormid={curDormId} socket={ws}/>
            <MainBody name = {userName} currState = {userState} parentCallback = {newUserState}/>
             <button onClick={createRoom}>CREATE</button>
             <button onClick={joinRoom}>JOIN</button>

            </>
      );
}

export default App;
