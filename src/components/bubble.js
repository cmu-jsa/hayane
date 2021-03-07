import React from 'react';





const Bubble = (props) => {
    
    return (
        <section class="message -right">
      
        <div class="nes-balloon from-right is-dark">
          <p>{props.statusMsg}</p>
        </div>
       
      </section>
    );
}
export default Bubble;
