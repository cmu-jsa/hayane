import React from 'react';
import ReactDOM from 'react-dom';

import "./nes.css/css/nes.min.css";
import PopUp from "./popUp";
import DropDown from "./DropDown";
function yay(){
    return(<div class="nes-container with-title is-centered">
            <p style = {paragraph}>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>);
}

  
class Board extends React.Component {
  
  
    render() {
        return (
            <button className="square" onClick={() => {yay();}}>
            click me to create your account
          </button>
        );
    }
  }

  
    

const paragraph = {
    fontFamily: 'PressStart2PRegular',
    fontWeight: 'normal',
    fontStyle: 'normal',
};

  class Game extends React.Component {
    state = {
        seen: false
    };
    togglePop = () => {
      console.log("wtf \n");
        this.setState({
            seen: !this.state.seen
        });
    };

    render() {
        
      return (
        
        <div className="game">
        <div className="btn" >
            <button className = "nes-btn is-primary" onClick = {this.togglePop}>Hello?</button>
        </div>
            
          <div className="game-board">
          <div class="nes-container with-title is-centered">
            <p style = {paragraph}>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </div>
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
          <div>
              <DropDown/>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  