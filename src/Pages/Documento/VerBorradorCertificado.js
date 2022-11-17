import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "reactstrap";
import { API } from "../../Services/Conexion";

export const BorradorCertificado=()=>{    
    //datos desde database en linea
    // const [plantilla, setPlantilla]=useState([]);
    // const [evento,setEvento]=useState([]);
    // const [documento,setDocumento]=useState([])

    // const cargarElementos=async()=>{
    //     const rplan="documento/get-plantilla";        
    //     const dataP=await API.post(rplan)
    //     setPlantilla(dataP);
    //     const reve="documento/get-evento";
    //     const dataE=await API.post(reve);
    //     setEvento(dataE);
    //     const rdoc="documento/getdocumento";
    //     const dataD=await API.post(rdoc);
    //     setDocumento(dataD);
    // }
    // useEffect(()=>(
    //     cargarElementos()
    // ),[]);

    return(        
        <>
       <div               
            >
                <div>
                    
                    <h5
                    className="text-capitalize text-center"
                    >
                        {/* {evento.nombre} */}
                        Convocatoria para presentacion de herramientas pedagogicas en tiempos de pandemia
                        </h5>
                    <h1
                    className="text-center"
                    >
                        {/* {plantilla.nombre} */}
                        APROBADO
                        </h1>
                </div>            
            <br/>
            <div className="container certificado-cuerpo mx-auto w-75 h-25 bottom-50 start-75 traslate-middle text-center">
                <h5
                className="bottom-50 start-50 text-uppercase fw-bolder"
                >
                    {/* {nombre_integrante} */}
                    Adela Ruiz Quiroz
                    </h5>
                <br/>
                <h6
                className="w-75 fst-italic lh-lg text-break text-start traslate-middle-y"
                >
                    {/* {plantilla.descripcion} */}
                    La presente se entrega por la participacion en evento antes mencionado, y las horas cumplidas de actividad al mismo evento
                    Por ello se otorga este certificado en calidad de APROBADO
                    </h6>
            </div>
            <br/>
            <div>
                <ButtonGroup>
                    <Button>Descargar</Button>
                    <Button>Compartir</Button>
                    <Button>Confirmar</Button>                    
                </ButtonGroup>
            </div>                       
        </div>
        </>
        
    );
}