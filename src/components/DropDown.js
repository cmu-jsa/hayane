import React, { Component } from 'react';



const styles = {
  menu : {
    width : '15%',
  },
}

export default class DropDown extends Component {

    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
       
      }

      showMenu(event) {
        event.preventDefault();
        
        this.setState({showMenu: !this.state.showMenu 
        });
      }
      
      handleClick = (val) => {
        this.props.parentCallback(val);
      }

      render() {
        return (
          <div>
            <button class="nes-btn is-primary" onClick={this.showMenu}>
              {this.props.name}'s status menu
            </button>
            
            {
              this.state.showMenu
                ? (
                  <div className="menu" style = {styles.menu}>
                    <button class="nes-btn is-primary" onClick = {() => this.handleClick(0)}> Working </button>
                    <button class="nes-btn is-primary" onClick = {() => this.handleClick(1)}> Sleeping </button>
                    <button class="nes-btn is-primary" onClick = {() => this.handleClick(2)}> Vibing </button>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
}
