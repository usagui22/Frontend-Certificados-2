import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import FieldContent from "../../Components/FieldContent";
import FieldSelect from "../../Components/FieldSelect";

import { API } from "../../Services/Conexion";

const FormCrearDocumento=()=>{
    const [lista,setLista]=useState([]);
    const cargarParticipantes=()=>{
        let ruta="usuario/lista-participantes";
        try {
            const res = await API.get(path)
            setLista(res.data)
        } catch (error) {
            console.log("Lista de participantes no ha recargado");
        }
    }

useEffect(()=>{
    cargarParticipantes();
},[])

    return(
        <>
        <div>
            <h3>Crear Certificado</h3>
        </div>
        <Formik
            initialValues={{
                participante:'',
                hash:'',
                confirmacion:'',
                path:'',
            }}
            
        >
            <Form>
            <FieldSelect
                label="Seleccione Participante"
                opciones={lista}
            />
            <FieldContent
                label="Hash Generador: "
                type="text"
                name="hash"
                />                       
            <FieldContent
                label="Confirmacion de Certificado"
                type="date"
                name="confirmacion"
                    />                
            <FieldContent
                label="Enlace Generado para Compartir"
                type="text"
                name="path"
                    />
            </Form>
        </Formik>
        </>
    );
}

export default FormCrearDocumento;