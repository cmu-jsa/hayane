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
    

    return (
        <section class="message -right">
      
        <div class="nes-balloon from-right is-dark" style={styles.ihatemyself}>
          <p>{props.name} is {props.statusMsg}</p>
        </div>
       
      </section>
    );
}
export default Bubble;
