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

    const handleClick = (event) => {
        event.preventDefault();
        props.toggle();
        props.parentCallback(inputValue);
    };
    const updateInputValue = (evt) => {
        setInputValue(evt.target.value);
    };
    const updateAnon = (evt) =>{
        setInputValue("Anonymous");
    };
    return (
        <div className="modal" style = {styles.modal}>
            <div class="nes-container is-rounded is-dark" style = {styles.smallerContainer}>
                <span className="close" style={styles.close} onClick={handleClick}>
                    &times;
                </span>
                <form>
                    { props.mode == 'room' ? <h3>Enter a room id</h3> : <h3>Please fill out</h3> }
                    <div class="nes-field">
                        <label htmlFor="name_field">{ props.mode == 'room' ? 'Room Id' : 'Name' }</label>
                        <input type="text" onChange={evt => updateInputValue(evt)} class="nes-input"/>
                        { props.mode == 'room' ? null : 
                            <label>
                                <input type="checkbox" onChange= {evt => updateAnon(evt)} class="nes-checkbox is-dark" />
                                <span>Remain Anonymous </span>
                            </label>
                        }
                        <input type="submit" onClick={handleClick}/>
                    </div>
                </form>
            </div>
        </div>
    ); 
};

export default PopUp;
