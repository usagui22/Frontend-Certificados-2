import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Image } from "react-bootstrap";
import { QrWithHash } from "../../Components/QrHash";

const Certificado=()=>{
    const [nombre_evento, setNombreEvento]=useState('');
    const [nombre_integrante,setNombreIntegrante]=useState('');
    const [nombre_plantilla,setNombrePlantilla]=useState('');
    const [descripcion,setDescripcion]=useState('');
    const [plantilla,setPlantilla]=useState(null);
    const cargarElementos=()=>{
        
    }
    useEffect(()=>{
        cargarElementos();
    },[])
    return(
        <>
            <div className="container" style={{
                backgroundImage:`url(${plantila})`,
                height: "550px",  
                width:"950px",
                backgroundRepeat:"no-repeat"  
            }}>
                <br/>
                <div>
                    <Image src={logo} className="col-sm-1 float-end"/>
                    <h5>{nombre_evento}</h5>
                    <h1>CERTIFICADO</h1>
                    <h1>{nombre_plantilla}</h1>
                    <br/>
                </div>
                <div className="">
                    <h5>
                        {nombre_integrante}
                    </h5>
                    <br/>
                    <h6>{descripcion}</h6>                
                </div>
                <br/>
                <div>
                    <QrWithHash valor={"UMSS"}/>
                </div>                
            </div>
            <div>
                <ButtonGroup>
                    <Button>Volver</Button>
                    <Button>Descargar</Button>
                </ButtonGroup>
            </div>
        </>
    );
}

export default Certificado;