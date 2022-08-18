import React from "react";
import { FormControl, FormLabel } from "react-bootstrap";
import { BotonBuscar } from "./Botones";

const FieldBuscar=(props)=>{
    const {titulo, change,placeholder,valor}=props;
    
    // const [contenido,setContenido]=useState(null);
    // const [comparar, setComparar]=[{id_usuario:null}];
    
    // const handleChange=(e)=>{
    //     setContenido(e.target.value);    
    //     setComparar({...comparar, id_usuario:e.target.value});    
    //     funcion(e.target.value);        
    // }    

    return(
        <div>
        <FormLabel>{titulo}</FormLabel>
        <div className="row">        
        <FormControl 
            className="col" 
            value={valor} 
            placeholder={placeholder} 
            onChange={change}/>                
        <BotonBuscar  funcion={change}/>                          
        </div>
        </div>
    );
}
export default FieldBuscar;