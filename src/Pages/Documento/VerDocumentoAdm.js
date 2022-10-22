import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { API } from "../../Services/Conexion";
import logoUmss from "../../Assets/Images/logoUMSS.png";
import QR from "../../Components/QrAValidar";

const Certificado=(props)=>{
    const{id_pla,id_eve,id_doc,nombre_integrante}=props;
    //datos desde database en linea
    const [plantilla, setPlantilla]=useState([]);
    const [evento,setEvento]=useState([]);
    const [documento,setDocumento]=useState([])

    const cargarElementos=async()=>{
        const rplan="documento/get-plantilla";        
        const dataP=await API.post(rplan,id_pla)
        setPlantilla(dataP);
        const reve="documento/get-evento";
        const dataE=await API.post(reve,id_eve);
        setEvento(dataE);
        const rdoc="documento/getdocumento";
        const dataD=await API.post(rdoc,id_doc);
        setDocumento(dataD);
    }
    const obtenerFechaHash = () =>{
        //cuando el estudiante ha confirmado                
        //o cuando el estudiante no ha confirmado
        let rfc="documento/get-fecha-hash";      
        const datahash=API.get(rfc);
        return datahash.hash;
    }

    useEffect(()=>{
        cargarElementos();
    },[]);
    return(
        <>
        <div>
            <div
                className="container mw-75 mh-100 position-relative certificado-cabecera"            
                bg-sz="cover"
                style={{                    
                    backgroundImage: `url(${plantilla.plantilla})`,
                    backgroundRepeat:'no-repeat',
                    heigth:"550px",
                    width:"950px",
                }}                
            >
                <br/>
                <div>
                    <Image 
                        src={logoUmss} 
                        className="col-sm-1 float-end"
                        />
                    <h5
                    className="text-capitalize text-center"
                    >{evento.nombre}</h5>
                    <h1
                    className="text-center"
                    >{plantilla.nombre}</h1>
                </div>
            </div>
            <br/>
            <div className="container certificado-cuerpo mx-auto w-75 h-25 bottom-50 start-75 traslate-middle text-center">
                <h5
                className="bottom-50 start-50 text-uppercase fw-bolder"
                >{nombre_integrante}</h5>
                <br/>
                <h6
                className="w-75 fst-italic lh-lg text-break text-start traslate-middle-y"
                >{plantilla.descripcion}</h6>
            </div>
            <br/>
            <div className="container certificado-pie">
                <div className="col-sm-4">
                    <QR
                    fecha_validar={obtenerFechaHash}
                    />
                </div>                
            </div>            
        </div>
        </>
    );
}
export default Certificado;