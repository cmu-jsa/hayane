import React from 'react';
import Building from "../../public/buildings.svg"
import Mado from "./Mado"

const styles= {
    MadoConfig: {
        position: 'absolute',
        left: '500',
    },
    smallerContainer: {
        width: '40%',
        margin: 'auto',
    },
}
const BuildingMadoArray = () => {
    
    return (
        
        <div className = "MadoConfig">
            <Mado value2 = {0} />
            <Mado value2 = {0} />
            <div className = "smallerContainer">
                <Building/>
            </div>
        </div>
        
        );
      
}
export default BuildingMadoArray;