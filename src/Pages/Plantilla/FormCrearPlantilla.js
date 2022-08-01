import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";
import FieldSelect from "../../Components/FieldSelect";
import * as Yup from'yup';
import { API } from "../../Services/Conexion";

const FormCrearPlantilla=()=>{
    const [formularioEnviado,setFormularioEnviado]=useState(false);
    const [plantillaSeleccionada,setSeleccionado]=useState([])
    const tipo=[
        {value:"aprobacion",label:"Aprobacion"}, 
        {value:"participante",label:"Participación"}, 
        {value:"expositor",label:"Expositor"}
    ];
    const cargarPlantillaId= async()=>{
        try {
            let res=await API.get("unidad/get-unidad");
            setSeleccionado(res.data);
        } catch (error) {
            console.log("No se encuentra la unidad seleccionada")
        }
    }
    
    useEffect(()=>{
        cargarPlantillaId();
    },[])

    return(
        <>
        <div>
            <h3>Nueva Plantilla</h3>
        </div>
        <Formik
        initialValues={{
            nombre:'',
            descripcion:'',
            plantilla:''
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
        onSubmit={(values)=>{
            console.log("Submiting");
            setFormularioEnviado(true);
        }}
        >
            <Form>
                <FieldSelect
                    label="Seleccione Tipo de Plantilla"                    
                    opciones={tipo}    
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
                >Aceptar</Button>
                {formularioEnviado && <p>Formulario Enviado Exitosamente!</p>}
            </Form>
        </Formik>
        </>
    );
}

export default FormCrearPlantilla;