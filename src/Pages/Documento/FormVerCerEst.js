import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import * as Yup from 'yup';

export const FormCerEst=()=>{
    const [confirmar,setConfirmar]=useState();
    return(
        <Formik
            initialValues={{                
                hash:'',
                confirmacion:'',
                path:'',
            }}
            validationSchema={
                Yup.object({
                    hash:Yup.string(),
                    //.required("El campo no puede quedar en vacio")
                    confirmacion:Yup.string()                          
                    .matches(/^[0-9-]+$/,"Seleccione una fecha valida"),
                    path:Yup.string()
                })
            }
        >
        <Form>
            {/* confirmar certificado {estudiante} */}
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
            <ButtonGroup>
                <Button type="Submit">Aceptar</Button>    
                <Button >Confirmar</Button>
                <Button>Ver</Button>
                <Button>Descargar</Button>
            </ButtonGroup>
            
        </Form>
        </Formik>
    );
}
