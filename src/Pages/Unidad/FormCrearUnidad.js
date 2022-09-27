import { Formik, Form } from "formik";
import React from "react";
import FieldContent from "../../Components/FieldContent";
import * as Yup from'yup';
import { Button } from "react-bootstrap";
import { API } from "../../Services/Conexion";
import swal from "sweetalert";

const FormCrearUnidad=()=>{    
    
    return(
        <>
        <div>
            <h3>Nueva Unidad</h3>
        </div>
        <Formik
            initialValues={{
                nombre:'',
                abreviatura:'',
                telefono:'',
                sitio_web:'',
                correo_contacto:'',
                telefono_alternativo:'',
                direccion:'',
            }}
            validationSchema={
                Yup.object({
                    nombre: Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\w+[a-zA-ZÀ-ÿ\s]+$/,"El campo solo puede contener caracteres alfabeticos"),
                    abreviatura: Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^(F|U|D)[A-Z]{2,8}$/,"EL campo solo permite entre 4 a 8 letras en mayuscula"),
                    telefono:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\W?(591)[\s-]\d{1,3}([\s-]\d{1,7}){1,3}$/,"El campo solo permite numeros 0-9 y los simbolos - +"),
                    sitio_web:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^(http+s?:\/\/)?(www\.)?[a-zA-Z.-]+\.[A-Za-z0-9./-]+$/,"El campo solo permiten caracteres alfanumericos y simbolos .-_/ "),
                    correo_contacto:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"EL campo solo permite caracteres alfanumericos y simbolos .-_@"),
                    telefono_alternativo:Yup.string()
                    .matches(/^(\W?(591)[\s-])?\d{1,3}([\s-]\d{1,7}){1,3}$/,"El campo solo permite numeros 0-9 y los simbolos - +"),
                    direccion:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^[A-Za-z0-9]+[+a-zA-Z0-9\s,]+\.?[A-Za-z\s.,]+$/,"El campo solo permite caracteres alfanumericos y simbolos ./:"),
                })
            }
            onSubmit={(values, actions)=>{                
                console.log(values);                
                let rut="unidad/crear-unidad";
                try {
                    API.post(rut,values)
                    .then(
                        swal({
                            tittle:"Crear Unidad",
                            text:"El formulario de Unidad ha sido enviado con exito",
                            icon:"success",
                            buttons:["Cancelar","Aceptar"]
                        })
                    )
                    actions.resetForm();
                } catch (error) {
                    swal({
                        tittle:"Error Crear Unidad",
                        text:"Error al crear formulario revise su informacion, por favor",
                        icon:"warning",
                        buttons:"Aceptar"
                    })
                }
            }}            
        >
            <Form className="formulario">
                <FieldContent 
                    label="Nombre"
                    type="text"
                    name="nombre"                    
                />
                <FieldContent
                    label="Abreviatura"
                    type="text"
                    name="abreviatura"
                />
                <FieldContent
                    label="Telefono"
                    type="text"
                    name="telefono"
                />
                <FieldContent
                    label="Pagina de Referencia"
                    type="text"
                    name="sitio_web"
                />
                <FieldContent
                    label="Correo Contacto"
                    type="text"
                    name="correo_contacto"
                />
                <FieldContent
                label="Telefono Alternativo"
                type="text"
                name="telefono_alternativo"
                />
                <FieldContent
                label="Direccion"
                type="text"
                name="direccion"
                />
                <Button
                className="btn-crear"
                type="submit">
                    Crear
                </Button>             
               
            </Form>
        </Formik>
        </>
    );
}

export default FormCrearUnidad;