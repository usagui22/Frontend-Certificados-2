import { Form } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";

const FormFileNotes=async(e)=>{
    const subirArchivo=()=>{
        let path="documento/subirFile";
        //subirArchivo llamando a la funcion del API
    }
    return(
        <>
        <Form>
            <FieldContent
                label={"Seleccione Archivo: "}
                type="file"
            />
            <br/>
            <Button onClick={subirArchivo} onSubmit={"Submit"}>Aceptar</Button>
        </Form>
        </>
    );
}
export default FormFileNotes;