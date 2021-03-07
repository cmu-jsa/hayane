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
    const [uuid, setUuid] = React.useState(0);
    let userNames = ['Yuma','Tartan','Kent','Arnaud'];
    let userStates = [3,1,3,3];
    const [users, setUsers] = React.useState({});

    const hostname = window.location.hostname;
    const ws = new WebSocket('ws://' + hostname + ':40510')

    React.useEffect(() => {
        ws.onopen = () => {
            console.log('connected to websocket')
            ws.send(JSON.stringify({cmd: 'join', dormId: 1, name: userName, status: userState}))
        }
        ws.onmessage = (event) => {   
            const data = JSON.parse(event.data)
            if (data.cmd == 'uuid') {
                setUuid(data.uuid);
            } else if (data.cmd == 'update') {
                setUsers(data.data);
            }
        }
    }, []);

    

    

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
      ws.send(JSON.stringify({cmd: 'update', dormId: 1, name: userName, status: childData, curUuid: uuid}))
    };

    const newUserName = (childData) => {
      setName(childData);
      ws.send(JSON.stringify({cmd: 'update', dormId: 1, name: childData, status: userState, curUuid: uuid}))
    };

    return ( 
            <>

            <Header parentCallback = {newUserName}/>
            <MainBody name = {userName} currState = {userState} parentCallback = {newUserState} users = {users}/>

            </>
      );
}

export default App;
