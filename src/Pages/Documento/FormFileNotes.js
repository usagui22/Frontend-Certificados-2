import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";
import { API } from "../../Services/Conexion";

const FormFileNotes= ()=>{
    const [file,setFile]=useState(null);
    const subirArchivo=async(e)=>{
        
        setFile(e);
    }
    const fileChange =async (e)=>{
        let path="documento/subirNotas";
        const f = new FormData();
        
        for(let i = 0;i<file.length;i++){
            f.append('files',file[i]);
        }
        await API.post(path,f)
        .then(response=>{
            console.log(response.data);            
        }).catch(error=>{
            console.log("error al subir archivo", error);
        })
    }
    return(
        <>
        <div>
        <h3>Generador de Certificado por Estudiante</h3>
        </div>
        <Formik>
            
            <Form>
                <FieldContent
                    label={"Seleccione Archivo: "}
                    type="file"
                    name="fileNotas"
                    onChange={(e)=>subirArchivo(e.target.files)}
                />
                <br/>
                <Button onClick={fileChange} onSubmit={"Submit"}>Aceptar</Button>
            </Form>
        </Formik>
        
        </>
    );
}
export default FormFileNotes;