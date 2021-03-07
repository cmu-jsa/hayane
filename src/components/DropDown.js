import React, { Component } from 'react';



const styles = {
  menu : {
    width : '15%',
  },
}

const DropDown = (props) => {
  const [isSeen,setIsSeen] = React.useState(false);

  const showMenu = (event) => {
    event.preventDefault();
    setIsSeen(!isSeen);
  };
  
  const handleClick = (val) => {
    props.parentCallback(val);
  };

  return (
    <div>
      <button class="nes-btn is-primary" onClick={showMenu}>
        {props.name}'s status menu
      </button>
      
      {
        isSeen
          ? (
            <div className="menu" style = {styles.menu}>
              <button class="nes-btn is-primary" onClick = {() => handleClick(0)}> Working </button>
              <button class="nes-btn is-primary" onClick = {() => handleClick(1)}> Sleeping </button>
              <button class="nes-btn is-primary" onClick = {() => handleClick(2)}> Vibing </button>
            </div>
          )
          : (
            null
          )
      }
    </div>
  );
}
export default DropDown;
