import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import FieldContent from "../../Components/FieldContent";
import * as Yup from 'yup';
import { API } from "../../Services/Conexion";
import { Button, FormGroup } from "react-bootstrap";
import FieldSelect from "../../Components/FieldSelect";
import swal from "sweetalert";

const FormCrearDocumento=()=>{
    //lista de Usuarios
    const [listaParticipante,setListaParticipante]=useState([]);    
    //lista de eventos
    const [listaEvento,setListaEvento]=useState([]);   
    //lista plantillas
    const [listaPlantillas,setListaPlantillas]=useState([]);
        
    const cargarData=async()=>{
        const part="documento/listar-participante";
        const even="documento/listar-evento";
        const plan="plantilla/listar-plantillas";

        const resPar= await API.get(part);
        const resEve=await API.get(even);
        const resPlan=await API.get(plan);

                setListaParticipante(resPar.data);
                setListaEvento(resEve.data);
                setListaPlantillas(resPlan.data);
        
    }    

useEffect(()=>{
    cargarData();    
},[])

    return(
        <>
        <div>
            <h3>Crear Certificado</h3>
        </div>
        <Formik
            initialValues={{
                nombre_integrante:'',
                plantilla:'',
                ponderacion:'',
                nota:'',
            }}
            validationSchema={
                Yup.object({
                    nombre_integrante:Yup.string()
                    .required("El campo no puede quedar en vacio"),                    
                    evento:Yup.string()
                    .required("El campo no puede quedar vacio"),                                  
                    ponderacion:Yup.number(),                    
                    nota_certificado:Yup.number()
                    .required("El campo no puede quedar en vacio"),
                    plantilla:Yup.string()
                    .required("No puede dejar el campo vacio"),                    
                })
            }
            onSubmit={(values)=>{
                const ruta="documento/crear-documento-admin";
                try {                   
                    console.log(values);
                    API.post(ruta,values)
                    .then(
                        swal({
                            title:"Nuevo Certificado Creado",
                            text:"El certificado ha sido creado vealo en lista",
                            icon:"success",
                            buttons:["Cancelar","Aceptar"]
                        })                        
                    )                    
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
            <Form>                
            <FormGroup>
                
                <div>
                <FieldSelect                                                                                   
                    name="nombre_integrante"                 
                    label={"Seleccione Participante"}                   
                >
                {listaParticipante.map((par,i)=> {
                    return (
                    <option key={i} value={par.id}>{par.nombres} {par.apellido_paterno} {par.apellido_materno}</option>)
                    })
                     } 
                </FieldSelect>
                </div>
            </FormGroup>
            <FormGroup>            
                <FieldSelect                    
                    name="evento"                    
                    label="Seleccione Evento"
                >
                {listaEvento.map((even,k)=>{
                    return(
                    // <option value=''>Seleccione integrante...</option>
                    <option key={k} value={even.id}>{even.nombre}</option>)
                })}
                </FieldSelect>
            </FormGroup>       

            <div className="container">
            <div className=" row row-cols-auto">
                <FieldContent 
                    className="col w-25"
                    label={"Nota Ponderada"}
                    type="number"
                    name="ponderacion"
                />
                <FieldContent
                    className="col w-25"
                    label={"Nota Certificado"}
                    type="number"
                    name="nota_certificado"
                />
                </div>
            </div>        

            <FormGroup>                
                <FieldSelect                    
                    name="plantilla"
                    label={"Seleccione Plantilla"}                    
                >
                {
                    listaPlantillas.map((pla,j)=>{
                        return(
                        <option key={j} value={pla.id}>{pla.nombre}</option>)
                    })
                }
                </FieldSelect>
            </FormGroup>        
            <br/>
            {/* <Button type="submit" >Aceptar</Button> */}
            <Button 
                className="btn-crear"
                type="submit"
                >Crear</Button>
            </Form>
        </Formik>
        </>
    );
}

export default FormCrearDocumento;