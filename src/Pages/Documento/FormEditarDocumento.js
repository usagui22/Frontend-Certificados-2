import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import FieldContent from "../../Components/FieldContent";
import { API } from "../../Services/Conexion";

const FormEditarDocumento=()=>{
    const [documentoSeleccionado,setSeleccionado]=useState([])

    const cargarDocumento=async ()=>{
        let ruta ="documento/get-documento";
        try {
            const res = await API.get(ruta);
            setSeleccionado(res.data)
        } catch (error) {
            console.log("El documento seleccionado no ha sido encontrado")
        }
    }
    useEffect(()=>{
        cargarDocumento();
    },[])
    return(
        <>
        <div>
            <h3>Editar Documento {documentoSeleccionado.id_documento}</h3>
        </div>
        <Formik
        >
            <Form>
                
            </Form>
        </Formik>
        </>
    );
}
export default FormEditarDocumento;