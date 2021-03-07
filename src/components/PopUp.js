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


const PopUp = (props) => {
    const [inputValue, setInputValue] = React.useState(props.value);

    const handleClick = () => {
        props.toggle();
        props.parentCallback(inputValue);
    };
    const updateInputValue = (evt) => {
        setInputValue(evt.target.value);
    };
    return (
        <div className="modal" style = {styles.modal}>

      
        <div class="nes-container is-rounded is-dark" style = {styles.smallerContainer}>
        
      
                <span className="close" style={styles.close} onClick={handleClick}>
                    &times;
                </span>
                <form>
                    <h3>Please fill out</h3>
                    <div class="nes-field">
                        
                        <label htmlFor="name_field">Name</label>
                        <input type="text" onChange={evt => updateInputValue(evt)} class="nes-input"/>

                        <input type="submit" onClick={handleClick}/>
                    </div>
                </form>


        </div>
        </div>
    );
      
}
export default PopUp;

