import { Formik, Form} from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";
import * as Yup from 'yup';

const FormCrearEvento =()=>{   
    return(
        <>
         <div className='form-title'>                
            <h3>Nuevo Evento</h3>       
        </div>   
        <Formik
            initialValues={{
                nombre: '',
                nombre_unidad: '',
                url_convocatoria: '',               
                fecha_inicio:'',
                registro_fin:'',
                inicio_actividades:'',
                fin_actividades:'',
                inicio_emision:'',            
                fecha_fin:''
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
            onSubmit={(values) => {
                console.log("El formulario esta enviando?")
                   console.log(values)
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
                <Button  className="btn-crear " type="submit">Aceptar</Button>
            </Form>
        </Formik>
        
        </>
    );    
}

export default FormCrearEvento;