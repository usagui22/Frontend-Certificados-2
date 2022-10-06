import { Form, Formik } from "formik";
import React from "react";
import { Button, 
    FormGroup, 
    FormLabel
} from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";
import FieldSelect from "../../Components/FieldSelect";
import * as Yup from'yup';
import { API } from "../../Services/Conexion";
import swal from "sweetalert";
import { Input } from "reactstrap";

const FormCrearPlantilla=()=>{             
    
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
                // plantilla:Yup.mixed()
                // .required("El campo no puede quedar vacio, seleccione un archivo")
            })
        }
        onSubmit={(values, actions)=>{
            try {            
            const ruta="plantilla/crear-plantilla"
            let data= new FormData();
            data.append('nombre',values.nombre);
            data.append('descripcion',values.descripcion);
            data.append('plantilla',values.plantilla);                   
            console.log("Los datos son:"+ data);
            API.post(ruta,data)            
            .then(                                        
                swal({
                    title:"Plantilla Creada",
                    text:"La plantilla ha sido creada exitosamente",
                    icon:"success",
                    buttons:["Cancelar","Aceptar"]
                })
                    
            )
                actions.resetForm();
            } catch (error) {
                swal({
                    title:"Error al Crear Elemento",
                    text:"Error al crear elemento, revise la informacion ingresada",
                    icon:"Warning",
                    buttons:"Aceptar"
                })
            }                                
        }}
        >
            {(formProps)=>(
            <Form>                
                <FieldSelect                    
                    name="nombre"                    
                    label={"Seleccionar Tipo Certificado"}
                >
                    <option value={""}>Seleccione... </option>
                    <option value={"Aprobación"}>Aprobación</option>
                    <option value={"Participación"}>Participación</option>
                    <option value={"Expositor"}>Expositor</option>
                
                </FieldSelect>
                <FieldContent
                    label="Descripcion"
                    type="text"
                    name="descripcion"               
                />                
                <FormGroup>
                    <FormLabel>Seleccionar Archivo: </FormLabel>
                <Input                   
                    type="file"
                    name="plantilla"
                    onChange={(e)=>formProps.setFieldValue('plantilla',e.target.files[0])}
                />
                </FormGroup>                
                <Button 
                className="btn-crear"
                type="submit"
                >Crear</Button>               

            </Form>)}
        </Formik>
        </>
    );
}

export default FormCrearPlantilla;