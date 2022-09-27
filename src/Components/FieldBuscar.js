import React from "react";
import { FormControl, FormLabel, Stack } from "react-bootstrap";
import { BotonBuscar } from "./Botones";

const FieldBuscar=(props)=>{
    const {titulo, change,placeholder,valor}=props;          

    return(
        <div className="me-auto">
        <FormLabel>{titulo}</FormLabel>
        {/* <div className="row ">        */}
        <Stack  direction="horizontal">
        <FormControl 
            className="col" 
            type="text"            
            value={valor} 
            placeholder={placeholder} 
            onChange={change}/>     
        <BotonBuscar  funcion={change}/>      
        </Stack>                     
        {/* </div> */}
        
        </div>
    );
}
export default FieldBuscar;