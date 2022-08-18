import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup';
import React, { useEffect, useState } from "react";
import { API } from '../../Services/Conexion'
import FieldContent from "../../Components/FieldContent";
import { Button } from "react-bootstrap";

const FormEditarUnidad=()=>{
    const [unidadSeleccionado, setEditar]=useState([]);
    const [formularioEnviado, setEnviar]=useState(false)
    const cargarUnidad=async()=>{
        let ruta="unidad/get-unidad";
        try {
            const res= await API.get(ruta);
            setEditar(res.data)
        } catch (error) {
            console.log("La unidad seleccionada no carga sus datos")
        }
    }
    useEffect(()=>{
        cargarUnidad();
    },[])

    const formik=useFormik({
        initialValues:{
            nombre:unidadSeleccionado.nombre,
            abreviatura:unidadSeleccionado.abreviatura,
            telefono:unidadSeleccionado.telefono,
            sitio_web:unidadSeleccionado.sitio_web,
            correo_contacto:unidadSeleccionado.correo_contacto,
            telefono_alternativo:unidadSeleccionado.telefono_alternativo,
            direccion:unidadSeleccionado.direccion
        },
        validationSchema:Yup.object({
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
            }),

        onSubmit:(values,{resetForm})=>{
            console.log(values)                
            const ruta="unidad/editar-unidad"
            try {                                        
                API.post(ruta,values).then(
                console.log("El formulario ha sido actualizado"))                                        
                resetForm();                                        
                setEnviar(true);               
            } catch (error) {
                console.log("No se puede enviar la informacion")
                
            }
        }
    });

    return(
        <>
        <div>
            <h3>Editar Unidad {unidadSeleccionado.id_unidad}</h3>
        </div>
        <FormikProvider
        value={formik}
        >
            <Form className="formulario">
            <FieldContent 
                    label="Nombre"
                    type="text"
                    name="nombre"  
                    value={formik.values.nombre}                  
                />
                <FieldContent
                    label="Abreviatura"
                    type="text"
                    name="abreviatura"
                    value={formik.values.abreviatura}
                />
                <FieldContent
                    label="Telefono"
                    type="text"
                    name="telefono"
                    value={formik.values.telefono}
                />
                <FieldContent
                    label="Pagina de Referencia"
                    type="text"
                    name="sitio_web"
                    value={formik.values.sitio_web}
                />
                <FieldContent
                    label="Correo Contacto"
                    type="text"
                    name="correo_contacto"
                    value={formik.values.correo_contacto}
                />
                <FieldContent
                    label="Telefono Alternativo"
                    type="text"
                    name="telefono_alternativo"
                    value={formik.values.telefono_alternativo}
                />
                <FieldContent
                    label="Direccion"
                    type="text"
                    name="direccion"
                    value={formik.values.direccion}
                />
                <Button
                    className="btn-crear"
                    type="submit">
                    Editar
                </Button>             
                    {formularioEnviado && <p className="is-valid">Formulario enviado con exito</p>}
            </Form>
        </FormikProvider>
        </>
    );
}
export default FormEditarUnidad;