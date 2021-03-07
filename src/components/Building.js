import React from 'react';
import Building from "../../public/building.png"
import Mado from "./Mado"

const styles= {
    firstR :{left: '25%', position: 'relative', float: 'left'},
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
                        <Mado value2 = {props.value[0]} name = {props.nameList[0]} />
                    </div>
                    
                    <div style={styles.secondR}>
                     <Mado value2 = {props.value[1]}  name = {props.nameList[1]}  />
                    </div>

                </div>
                <br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <div style = {styles.divStyle}>
                    <div style={styles.firstR}>
                        <Mado value2 = {props.value[2]} name = {props.nameList[2]}/>
                    </div>
                    
                    <div style={styles.secondR}>
                     <Mado value2 = {props.value[3]} name = {props.nameList[3]}/>
                    </div>
                   
                    
                </div>
                   
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br>
                
            </div>

            
        
        );
      
}
export default BuildingMadoArray;