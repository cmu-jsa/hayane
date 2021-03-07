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
/*
export default class Bubble extends Component{

    render()  {
        return (
        <section class="message -right">
      
        <div class="nes-balloon from-right is-dark">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <i class="nes-bcrikko"></i>
      </section>
        );
    }
}*/