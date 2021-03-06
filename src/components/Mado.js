import React, {Component} from "react";
import working from '../../public/work.gif';
import sleeping from '../../public/sleep.gif';
import alive from '../../public/awake.gif';
const styles = {
    modal: {
        position: 'fixed',
        zIndex: '1',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        left: '0',
        top: '0'
        
    },
    smallerContainer: {
        width: '40%',
        margin: 'auto',
    },
    
    close: {
        color: 'Black',
        float: 'right',
        '&:hover': {
            color: 'cyan',
            cursor: 'pointer',
        },
    },


}



/*
const sleep = sleeping
const work = working
const state = { sleep,work }
const Mado = () =>{
    const [selected, setSelected] = useState(state.sleep)

   return(
       <>
           <img src={selected} alt='loading' />
           <button onClick={() => setSelected(state.work)}> Click</button>
       </>
   )
}
export default Mado

*/
export default class Mado extends Component{
    constructor(props){
        super(props);
        this.state = {
            images: [working,sleeping,alive],
            currImage: this.props.value2,
        };
    }
    

    render(){
        return (
            <div>
                  <img src={this.state.images[this.props.value2]} alt="loading..." />  
            </div>
            
        )
    }


}