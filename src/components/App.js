import React from 'react';
import Logo from '../../public/logo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Main = () => {
    const url = 'ws://localhost:40510'
    const ws = new WebSocket(url)
    
    ws.onopen = function () {
        console.log('websocket is connected ...')
        ws.send(JSON.stringify({message: 'hi' , cmd: 'join' , dormid: '1'}))
    }

    ws.onmessage = function (ev) {
        console.log(ev);
    }

  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <h1 className='title'>React Template: Home</h1>
          </Route>
          <Route path='/about'>
            <h1 className='title'>React Template: About</h1>
          </Route>
        </Switch>
        <nav>
          <ul className='nav-list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
        <img className='logo' src={Logo}/>
      </Router>
  );
};

export default Main;
