import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import FieldContent from "../../Components/FieldContent";
//import FieldSelect from "../../Components/FieldSelect";
import * as Yup from 'yup';
import { API } from "../../Services/Conexion";
//import SelectSearch from "react-select-search";
import { Button, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

const FormCrearDocumento=()=>{
    //lista de Usuarios
    const [listaParticipante,setListaParticipante]=useState([]);
    //seleccionar Opcion Usuario
    const [select,setSelect]=useState();
    //seleccionar Opcion Plantilla
    const [plantilla,setPlantilla]=useState();
    //seleccionar opcion Evento
    const [eventoSeleccionado,setEventoSeleccionado]=useState();
    //lista de eventos
    const [listaEvento,setListaEvento]=useState([]);
        
    const cargarData=async()=>{
        const part="documento/listar-participante";
        const even="documento/listar-evento";

        const resPar= await API.get(part);
        const resEve=await API.get(even);

                setListaParticipante(resPar.data);
                setListaEvento(resEve.data)
        
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
                participante:'',
                plantilla:'',
                nota:'',
            }}
            validationSchema={
                Yup.object({
                    participante:Yup.string()
                    .required("El campo no puede quedar en vacio")
                    .matches(/^\w+[a-zA-ZÀ-ÿ\s]+$/,"El campo solo contiene caracteres alfabeticos"),                    
                    plantilla:Yup.string(),
                    nota:Yup.number(),
                })
            }
            onSubmit={(values)=>{
                
            }}
        >
            <Form>
                {/* crear certificado desde administracion */}
            <FormGroup>
                <FormLabel>Seleccione Participante: </FormLabel>
                <div>
                <FormSelect                    
                                
                    value={select}                    
                    onChange={e=>setSelect(e.target.value)}              
                    name="participante"                                    
                >
                {listaParticipante.map((par)=>(
                    <option key={par.id}>{par.nombres} {par.apellido_paterno} {par.apellido_materno}</option>))
                    }
                </FormSelect>
                </div>
            </FormGroup>
            <FormGroup>
                <FormLabel>Seleccione Plantilla: </FormLabel>
                <FormSelect
                    value={plantilla}
                    onChange={e=>setPlantilla(e.target.value)}
                    name="plantilla"
                    placeholder="Seleccionar..."
                >
                {

                }
                </FormSelect>
            </FormGroup>

            <FormGroup>
                <FormLabel>Seleccione Evento: </FormLabel>
                <FormSelect
                    value={eventoSeleccionado}
                    onChange={e=>setEventoSeleccionado(e.target.value)}
                    name="evento"                    
                >
                {listaEvento.map((lista)=>(
                    <option key={lista.id_evento}>{lista.nombre}</option>
                ))}
                </FormSelect>
            </FormGroup>        
            <FieldContent
                label={"Nota: "}
                type="number"
                name="nota"
            />
            <Button type="Submit">Aceptar</Button>
            
            </Form>
        </Formik>
        </>
    );
}

export default FormCrearDocumento;