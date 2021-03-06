import React, {Component} from "react";

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



export default class popUp extends Component{
    handleClick = () => {
        this.props.toggle();
    };
    
    render(){
        return (
            <div className="modal" style = {styles.modal}>

          
            <div class="nes-container is-rounded is-dark" style = {styles.smallerContainer}>
            
          
                    <span className="close" style={styles.close} onClick={this.handleClick}>
                        &times;
                    </span>
                    <form>
                        <h3>Please fill out</h3>
                        <div class="nes-field">
                            <label for="name_field">Name</label>
                            <input type="text" id="name_field" class="nes-input"/>
    
                            <input type="submit"/>
                        </div>
                    </form>
   
    
            </div>
            </div>
        )
    }


}
/*
<label>
                            Name:
                            <input type="text" name="name"/>
                            <br />
                        </label>
                        <input type="submit" />*/