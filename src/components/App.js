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
            console.log(data)
            if (data.cmd == 'uuid') {
                setUuid(data.uuid);
                console.log("uuid " + data.uuid)
            } 
            else if (data.cmd == 'joined') {
                setUsers(data.data);
                // update state
            } else if (data.cmd == 'new'){
                console.log("new")
                console.log( users)
                const newUuid = data.uuid;
                setUsers({...users,newUuid:[data.name,data.state]})
                console.log(users)
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
    };

    const newUserName = (childData) => {
      setName(childData);
    };

    return ( 
            <>

            <Header parentCallback = {newUserName}/>
            <MainBody name = {userName} currState = {userState} parentCallback = {newUserState} users = {users}/>
             <button onClick={createRoom}>CREATE</button>
             <button onClick={joinRoom}>JOIN</button>

            </>
      );
}

export default App;
