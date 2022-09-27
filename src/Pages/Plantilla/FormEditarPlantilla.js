import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';
import FieldContent from "../../Components/FieldContent";
import FieldSelect from "../../Components/FieldSelect";
import { API } from "../../Services/Conexion";

const FormEditarPlantilla=()=>{
    const [mostrarEnviado,setMostrar]=useState(false);
    //const [datosSeleccionado,setDatosSeleccionado]=useState([]);
    const [id,setId]=useState(0);
    const [nombre,setNombre]=useState("");
    const [descripcion,setDescripcion]=useState("");
    const [plantilla,setPlantilla]=useState("");

    // const cargarPlantilla =async()=>{
    //     let ruta="plantilla/get-plantilla";
    //     try {
    //         let res =await API.get(ruta);
    //         setSeleccionado(res.data)
    //     } catch (error) {
    //         console.log("La plantilla seleccionada no esta en la base de datos")
    //     }
    // }
    useEffect(()=>{
        //cargarPlantilla();
        setId(localStorage.getItem("id"));
        setNombre(localStorage.getItem("nombre"));
        setDescripcion(localStorage.getItem("descripcion"));
        setPlantilla(localStorage.getItem("plantilla"));
        
    },[])
    return(
        <>
        <div>
            <h3>Editar Plantilla {id}</h3>
        </div>
        <Formik
            initialValues={{
                nombre:nombre,
                descripcion:descripcion,
                plantilla:plantilla
            }}
            validationSchema={
                Yup.object({
                    nombre:Yup.string()
                    .oneOf(['Aprobación','Participación','Expositor'],'Tipo de Certificado Invalido')
                    .required("El campo no puede estar vacio, seleccione uno"),
                    descripcion:Yup.string()
                    .required("El campo no puede quedar vacio")
                    .matches(/^\w[a-zA-Z\s]+\.$/,'El campo contiene caracteres alfabeticos y debe terminar con .'),
                    plantilla:Yup.mixed()
                    .required("El campo no puede quedar vacio, seleccione un archivo")
                })
            }
            
            onSubmit={(values,{resetForm}) => {                                
                console.log(values)                
                const ruta="evento/editar-plantilla"
                try {                                        
                    API.post(ruta,values).then(
                    console.log("El formulario ha sido actualizado"))                                        
                    resetForm();                                        
                    setMostrar(true)               
                } catch (error) {
                    console.log("No se puede enviar la informacion")
                    
                }
              }}
        >
            <Form>
                <FieldSelect
                    label="Seleccione Tipo de Plantilla"                    
//                    opciones={tipo}    
                    name="nombre"  
                    type="select"              
                />
                <FieldContent
                    label="Descripcion"
                    type="text"
                    name="descripcion"               
                />
                <FieldContent
                    label="Seleccionar Archivo"
                    type="file"
                    name="plantilla"
                />
                <Button 
                className="btn-crear"
                type="submit"
                >Editar</Button>
                {mostrarEnviado && <p>Formulario Enviado Exitosamente!</p>}
            </Form>
        </Formik>
        </>
    );
}
 export default FormEditarPlantilla;