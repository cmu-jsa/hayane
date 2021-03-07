import React from 'react';
import Building from "../../public/building.png"
import Mado from "./Mado"

const styles= {
    firstR :{left: '28%', position: 'relative', float: 'left'},
    secondR :{left: '55%', position: 'relative', float: 'left'},
    thirdR :{left: '66%', position: 'relative', float: 'left'},
     divStyle : {
        width: '100%',
        display: 'flex',
        alignItems: 'left',
      },
    smallerContainer: {
        width: '100%',
        margin: 'auto',
        backgroundImage: `url("https://cdn.discordapp.com/attachments/817505340148416512/817983623016742962/buildings_1.png")`,
        height: '100%',
        backgroundPosition: "center",
        //backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
}
const BuildingMadoArray = (props) => {
    let uuids = Object.keys(props.users);

    return (
            <div className = "smallerContainer" style= {styles.smallerContainer}>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br></br><br></br>
                <div style = {styles.divStyle}>
                    <div style={styles.firstR}>
                        {uuids.length > 0 ? <Mado value2 = {props.users[uuids[0]][1]} name = {props.users[uuids[0]][0]}/> : 
                        <Mado value2 = {3} name = {""}/>} 
                    </div>
                    
                    <div style={styles.secondR}>
                    {uuids.length > 1 ? <Mado value2 = {props.users[uuids[1]][1]} name = {props.users[uuids[1]][0]}/> : 
                        <Mado value2 = {3} name = {""}/>} 
                    </div>

                </div>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <div style = {styles.divStyle}>
                    <div style={styles.firstR}>
                    {uuids.length > 2 ? <Mado value2 = {props.users[uuids[2]][1]} name = {props.users[uuids[2]][0]}/> : 
                        <Mado value2 = {3} name = {""}/>} 
                    </div>
                    
                    <div style={styles.secondR}>
                    {uuids.length > 3 ? <Mado value2 = {props.users[uuids[3]][1]} name = {props.users[uuids[3]][0]}/> : 
                        <Mado value2 = {3} name = {""}/>} 
                    </div>
                   
                    
                </div>
                   
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br>
                
            </div> 
        );     
};

export default BuildingMadoArray;
