import React from 'react';
import PopUp from "./popUp";
import DropDown from "./DropDown";
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


export default class App extends React.Component {

 
    state = {
      seen: false,
      name: 'hi',
    };
  
    
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    
    };
    callbackFunction = (childData) => {
      this.setState({name: childData})
    };
    render() {
        
      return (
        
        <div className="game">
        <div className="btn" >
            <button className = "nes-btn is-primary" onClick = {this.togglePop}>Hello?</button>
        </div>
            
          <div className="game-board">
          <div class="nes-container with-title is-centered" style={white} >
            <p style = {paragraph}> HI, {this.state.name}! Good morning. Thou hast had a good night's sleep, I hope.  </p>
            </div>
    
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          {this.state.seen ? <PopUp value = {this.state.name} parentCallback = {this.callbackFunction} toggle={this.togglePop} /> : null}
          <div>
              <DropDown/>
          </div>
        </div>
      );
    }
  }



