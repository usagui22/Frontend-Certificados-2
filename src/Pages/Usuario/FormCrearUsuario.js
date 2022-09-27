import { Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';
import FieldContent from "../../Components/FieldContent";
import { API } from "../../Services/Conexion";
import swal from "sweetalert";

const FormCrearUsuario=()=>{
    return(
        <>
        <div>
            <h3>Nuevo Usuario</h3>
        </div>
        <Formik
            initialValues={{
                nombres:'',
                apellido_paterno:'',
                apellido_materno:'',
                correo:'',
                celular:'',
                password:'',
                ci:'',
                cargo:'',
                cod_sis:''
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
                    .matches(/^[0-9A-Z]{9}$/,"El campo contiene 9 numeros")
                })
            }
            onSubmit={(values, actions)=>{
                console.log(values);
                const ruta="usuario/registrar-usuario";
                try {
                    API.post(ruta,values).then(
                        swal({
                            tittle:"Usuario Creado",
                            text:"El usuario ha sido creado con exito",
                            icon:"success",
                            buttons:["Cancelar","Aceptar"]
                        })
                    )
                    console.log("Enviado")
                    actions.resetForm();
                } catch (error) {
                    swal({
                        tittle:"Error al Crear Usuario",
                        text:"Error al crear usuario revise su informacion",
                        icon:"warning",
                        buttons:"Aceptar"
                    })
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
                Crear
            </Button>
            </Form>
        </Formik>
        </>
    );
}

export default FormCrearUsuario;