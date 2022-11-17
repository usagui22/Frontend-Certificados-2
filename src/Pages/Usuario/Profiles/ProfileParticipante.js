import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { API } from "../../../Services/Conexion";

export const perfilParticipante=(props)=>{
    const {id_usuario}=props;
    const [usuario,setUsuario]=useState({});

    const cargarUsuario=async(id_usuario)=>{
        try {
            const res= await API.get("usuario/get-usuario", id_usuario);
            setUsuario(res.data);
        } catch (error) {
            console.log("error usuario no encontrado");
        }
    }
    useEffect(()=>{
        cargarUsuario();
    },[]);
    return(
    <>
        <div className="container">
            <div>
                <Image />
            </div>
            nombre completo
            genero
            fecha de nacimiento
            lugar de nacimiento
            direccion actual
            ocupacion
            correo
            correo Alternativo
            telefono 
            celular
            ci lugar expedito ci
            estado civil
        </div>
    </>
    );
}