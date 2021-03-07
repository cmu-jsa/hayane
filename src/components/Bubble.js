import React from 'react';



const styles= {
  ihatemyself:{
    position: "absolute",
    top: "-70%",
    left: "0px",
    width: "110%",
  }
}

const Bubble = (props) => {
    
    const statuses = ["working","sleeping","vibing","not here"];
    return (
        <section class="message -right">
      
        <div class="nes-balloon from-right is-dark" style={styles.ihatemyself}>
          <p>{props.name ? props.name : "No one"} is {props.statusMsg != 3 ? statuses[props.statusMsg] : "here"}</p>
        </div>
       
      </section>
    );
}
export default Bubble;
