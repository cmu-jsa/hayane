import React from 'react';
import { useRef, useEffect } from 'react';
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
    const [uuid, setUuid] = React.useState(0);
    const [dormId, setDormId] = React.useState(0);
    const [users, setUsers] = React.useState({});

    const hostname = window.location.hostname;
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://' + hostname + ':40510')
        ws.current.onopen = () => {
            console.log('connected to websocket')
            ws.current.send(JSON.stringify({cmd: 'create', dormId: 0, name: userName, status: userState}))
        }
        ws.current.onmessage = (event) => {   
            const data = JSON.parse(event.data)
            if (data.cmd == 'uuid') {
                setUuid(data.uuid);
            } else if (data.cmd == 'created') {
                setDormId(data.dormId);
                setUsers(data.dorm)
            } else if (data.cmd == 'update') {
                setUsers(data.data);
            }
        }
    }, []);

    const joinRoom = (newDormId) => {
        ws.current.send(JSON.stringify({cmd: 'leave', dormId: dormId}))
        setDormId(newDormId)
        ws.current.send(JSON.stringify({cmd: 'join', dormId: newDormId, name: userName, status: userState}))
    }

    const togglePop = () => {
        setIsSeen(!isSeen);
    }

    const newUserState = (childData) => {
      setCurrState(childData);
      ws.current.send(JSON.stringify({cmd: 'update', dormId: dormId, name: userName, status: childData}))
    };

    const newUserName = (childData) => {
      setName(childData);
      ws.current.send(JSON.stringify({cmd: 'update', dormId: dormId, name: childData, status: userState}))
    };

    return ( 
            <>

            <Header parentCallback = {newUserName} onJoinRoom={joinRoom} dormId={dormId}/>
            <MainBody name = {userName} currState = {userState} parentCallback = {newUserState} users = {users}/>

            </>
      );
}

export default App;
