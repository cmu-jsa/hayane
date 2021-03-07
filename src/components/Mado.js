import React, {Component} from "react";
import working from '../../public/work.gif';
import sleeping from '../../public/sleep.gif';
import alive from '../../public/awake.gif';
import empty from '../../public/empty.png';

import Bubble from "./Bubble.js";


const Mado = (props) => {
    const [isSeen, setIsSeen] = React.useState(false);
    const [userName,setName] = React.useState(props.value2 != 3 ? props.name : "No one");
    const images = [working,sleeping,alive,empty];
    const statuses = ["working","sleeping","alive","not here"];
    const [userStatus,setStatus] = React.useState(props.value2 != 3 ? statuses[props.value2] : "here");
   

    const togglePop = () => {
        setIsSeen(!isSeen);
    };
   
    
  
    //const [currImage, setCurrImage] = React.useState(props.value2);
    return (
        <div>
                {isSeen ? <Bubble name = {userName} statusMsg = {userStatus} />:null }
              <img src={images[props.value2]} alt="loading..." onClick={togglePop}/>  
        </div>
    
    );
}
export default Mado;
