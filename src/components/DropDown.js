import React, { Component } from 'react';



const styles = {
  menu : {
    width : '15%',
  },
}

export default class DropDown extends Component {
    /*constructor(){
        super();
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event){
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
    }
    render() {
        return (
        <div>
            <button className = "nes-btn is-primary">
            Show menu
            </button>
            {
            this.state.showMenu ? (
            <div className="nes-container is-rounded">
            <button className = "nes-btn is-primary"> Menu item 1 </button>
            <button className = "nes-btn is-primary"> Menu item 2 </button>
            <button className = "nes-btn is-primary"> Menu item 3 </button>
            </div>
            ) : ( null )
            }
        </div>
        );
    }*/
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
      
     
      render() {
        return (
          <div>
            <button class="nes-btn is-primary" onClick={this.showMenu}>
              Show menu
            </button>
            
            {
              this.state.showMenu
                ? (
                  <div className="menu" style = {styles.menu}>
                    <button class="nes-btn is-primary"> Menu item 1 </button>
                    <button class="nes-btn is-primary"> Menu item 2 </button>
                    <button class="nes-btn is-primary"> Menu item 3 </button>
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
