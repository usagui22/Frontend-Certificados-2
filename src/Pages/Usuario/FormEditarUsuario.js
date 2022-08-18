import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";
import * as Yup from 'yup';
import { API } from "../../Services/Conexion";

const FormEditarUsuario=()=>{
const[seleccionado, setSeleccionado]=useState([]);
const[mensajeEnviado,setMsj]=useState(false)

const cargarUsuario=async()=>{
    let ruta="usuario/get-usuario"
    try {
        const res= await API.get(ruta)
        setSeleccionado(res.data)
    } catch (error) {
        console.log("El usuario seleccionado no existe")
    }
}
useEffect(()=>{
    cargarUsuario();
},[])
    return(
        <>
        <div>
            <h3>Editar Usuario {seleccionado.id_usuario}</h3>
        </div>
        <Formik
            initialValues={{
                nombres:seleccionado.nombres,
                apellido_paterno:seleccionado.apellido_paterno,
                apellido_materno:seleccionado.apellido_materno,
                correo:seleccionado.correo,
                celular:seleccionado.celular,
                password:seleccionado.password,
                ci:seleccionado.ci,
                cargo:seleccionado.cargo,
                cod_sis:seleccionado.cod_sis
            }}
            validationSchema={                
                Yup.object({
                    nombres:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\w+[a-zA-ZÀ-ÿ\s]+$/,"El campo solo contiene caracteres alfabeticos"),
                    apellido_paterno:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\w+[a-zA-ZÀ-ÿ]+$/,"El campo contiene caracteres alfabeticos"),
                    apellido_materno:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\w+[a-zA-ZÀ-ÿ]+$/,"El campo contiene caracteres alfabeticos"),
                    correo:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"El campo contiene caracteres alfanumericos y simbolos -_@."),
                    celular:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\W?(591)?[\s-]?\d{1,3}([\s-]?\d{1,7}){1,3}$/,"El campo contiene caracteres numericos y simbolos -+"),
                    password:Yup.string()
                    .required("El campo no puede estar vacio")
                    .matches(/^\W?[a-zA-Z0-9]{8}$/,"El campo contiene 8 caracteres alfanumericos y simbolos -_*"),
                    cargo: Yup.string().required("EL campo no puede quedar vacio")
                    .matches(),
                    cod_sis:Yup.string()
                    .matches(/^[0-9A-Z]{7}$/,"El campo contiene 9 numeros")
                })
            }

            onSubmit={(values,{resetForm}) => {                                
                console.log(values)                
                const ruta="usuario/editar-usuario"
                try {                                        
                    API.post(ruta,values).then(
                    console.log("El formulario ha sido actualizado"))                                        
                    resetForm();                                        
                    setMsj(true)               
                } catch (error) {
                    console.log("No se puede enviar la informacion")
                    
                }
              }}
        >
            <Form className="formulario">
            <FieldContent 
                label="Nombres" 
                type="text" 
                name="nombres"                    
                />              
            <FieldContent 
                label="Apellido Paterno" 
                type="text" 
                name="apellido_paterno"         
                />
            <FieldContent 
                label="Apellido Materno" 
                type="text" 
                name="apellido_materno"             
                />
            <FieldContent 
                label="Correo Electronico" 
                type="email" 
                name="correo" 
                />
            <FieldContent 
                label="Celular" 
                type="text" 
                name="celular" 
                />    
            <FieldContent 
                label="Contraseña" 
                type="password" 
                name="password"         
                />
            <FieldContent 
                label="Codigo Siss" 
                type="text" 
                name="cod_sis"                 
                />            
            <FieldContent 
                label="Carnet de Identidad" 
                type="text" 
                name="ci" 
                />
            <Button className="btn-crear" type="submit">
                Editar
            </Button>
            {mensajeEnviado && <p className="is-valid">EL FORMULARIO HA SIDO ENVIADO CON EXITO!!</p>}
            </Form>
        </Formik>
        </>
    );
}
export default FormEditarUsuario;