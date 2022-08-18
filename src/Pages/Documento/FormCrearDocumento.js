import { Form, Formik, yupToFormErrors } from "formik";
import React, { useEffect, useState } from "react";
import FieldContent from "../../Components/FieldContent";
import FieldSelect from "../../Components/FieldSelect";
import * as Yup from 'yup';
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
            validationSchema={
                Yup.object({
                    nombre:Yup.string()
                    .required("El campo no puede quedar en vacio")
                    .matches(/^\w+[a-zA-ZÀ-ÿ\s]+$/,"El campo solo contiene caracteres alfabeticos"),
                    hash:Yup.string()
                    //.required("El campo no puede quedar en vacio")
                    .matches()
                })
            }
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