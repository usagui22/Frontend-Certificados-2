import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';
import FieldContent from "../../Components/FieldContent";
import { API } from "../../Services/Conexion";

const FormEditarEvento =()=>{
    const [eventoSeleccionado,setSeleccionado]=useState([])
    const [mostrarMensaje,setEnviado]=useState(false)
    const cargarEvento=async()=>{
        let ruta="evento/get-evento"
        try {
            const res = await API.get(ruta);
            setSeleccionado(res.data)
        } catch (error) {
            console.log("EL evento seleccionado no se encuentra en la tabla")
        }
    }
    useEffect(()=>{
        cargarEvento();
    },[])
    return(
        <>
        <div>
            <h3>Editar Evento {eventoSeleccionado.id_evento}</h3>
        </div>
        <Formik
            initialValues={{
                nombre: eventoSeleccionado.nombre,
                nombre_unidad: eventoSeleccionado.nombre_unidad,
                url_convocatoria: eventoSeleccionado.url_convocatoria,               
                fecha_inicio:eventoSeleccionado.fecha_inicio,
                registro_fin:eventoSeleccionado.registro_fin,
                inicio_actividades:eventoSeleccionado.inicio_actividades,
                fin_actividades:eventoSeleccionado.fin_actividades,
                inicio_emision:eventoSeleccionado.inicio_emision,            
                fecha_fin:eventoSeleccionado.fecha_fin
            }}
            validationSchema={
                Yup.object({
                    nombre: Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\w[a-zA-Z\s]+\.$/,'El campo contiene caracteres alfabeticos y debe terminar con .'),
                    nombre_unidad: Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\w[a-zA-Z\s]+$/,"El campo contiene caracteres alfabeticos"),
                    url_convocatoria: Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^(http?s?:\/\/)?(www\.)?(fb\.me\/e\/)?[0-9A-Za-z./%-_]+$/,"El enlace no esta permitido"),
                    // .url("El enlace ingresado no esta permitido"),
                    fecha_inicio:Yup.date("ingrese una fecha valida").required("EL campo no puede quedar vacio"),
                    registro_fin: Yup.date("Ingrese una fecha valida").required("El campo no puede quedar vacio"),
                    inicio_actividades:Yup.date("INgrese una fecha valida").required("El campo no puede quedar vacio"),
                    fin_actividades: Yup.date("Ingrese una fecha valida").required("El campo no puede quedar vacio"),
                    inicio_emision:Yup.date("Ingrese una fecha valida").required("El campo no puede quedar vacio"),
                    fecha_fin: Yup.date("ingrese una fecha valida").required("EL campo no puede quedar vacio"),
                })                
            }
            onSubmit={(values,{resetForm}) => {                                
                console.log(values)                
                const ruta="evento/editar-evento"
                try {                                        
                    API.post(ruta,values).then(
                    console.log("El formulario ha sido actualizado"))                                        
                    resetForm();                                        
                    setEnviado(true)                
                } catch (error) {
                    console.log("No se puede enviar la informacion")
                    
                }
              }}
        >               
            <Form className="formulario">
                <FieldContent
                label="Nombre"
                name="nombre"
                type="text"              
                />
                <FieldContent 
                label="Enlace de Convocatoria" 
                type="text" 
                name="url_convocatoria"                                 
                />
                <FieldContent 
                label="Unidad" 
                type="text" 
                name="nombre_unidad"                                 
                />
                <FieldContent 
                label="Fecha Inicio" 
                type="date" 
                name="fecha_inicio"                            
                />
                <FieldContent 
                label="Fin de Registro de Participantes" 
                type="date" 
                name="registro_fin"                 
                />    
                <FieldContent 
                label="Inicio de Actividades de Evento" 
                type="date" 
                name="inicio_actividades" 
                />
                <FieldContent 
                label="Fin de Actividades de Evento" 
                type="date" 
                name="fin_actividades" 
                />    
                <FieldContent 
                label="Inicio de Emision de Certificados y Correcciones" 
                type="date" 
                name="inicio_emision" 
                />
                <FieldContent 
                label="Fecha Fin" 
                type="date" 
                name="fecha_fin" 
                />
                <Button              
                className="btn-crear " type="submit">Aceptar</Button>
                {mostrarMensaje && <p className="is-valid">EL FORMULARIO SE HA ACTUALIZADO CON EXITO</p>}           
            </Form>
        </Formik>
        
        </>
    );
}

export default FormEditarEvento;