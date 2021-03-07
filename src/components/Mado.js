import React, {Component} from "react";
import working from '../../public/work.gif';
import sleeping from '../../public/sleep.gif';
import alive from '../../public/awake.gif';
import Bubble from "./bubble.js";


const Mado = (props) => {
    const [isSeen, setIsSeen] = React.useState(false);
    const togglePop = () => {
        setIsSeen(!isSeen);
    };
    const images = [working,sleeping,alive];
    const statuses = ["working","sleeping","alive"];

    //const [currImage, setCurrImage] = React.useState(props.value2);
    return (
        <div>
                {isSeen ? <Bubble statusMsg = {statuses[props.value2]} />:null }
              <img src={images[props.value2]} alt="loading..." onClick={togglePop}/>  
        </div>
    
    );
}
export default Mado;
