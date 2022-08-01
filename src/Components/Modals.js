import React, { useState } from "react";
import { Form, FormControl, FormLabel, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

const ModalCrear=(props)=>{
    const {producto}=props;
    return (
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Agregar {producto}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Formulario Enviado con Exito</h4>
                <p>
                La informacion que se ha enviado esta almacenada en la lista de los {producto}s.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button>
                    <Link className="text text-white" to={"/Evento"}>
                    Ir a Lista
                    </Link>                    
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );    
}
const ModalErrorCrear=(props)=>{
    return (
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Error
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Formulario no se ha enviado con Exito</h4>
                <p>
                La informacion que se ha enviado no puede estar ser almacenada en la lista de los elementos.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}
const ModalSubirArchivo=(props)=>{
    const [file, setFile]=useState(null);

    const subirArchivo=(archivos)=>{
        Array.from(archivos).forEach(archivo=>{
            let reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload=function(){
                let base64 =reader.result;
                console.log(base64);
            }
        })
    }

    return(
        <>
        <Modal
        {...props}
        size="lg"
        centered
        >
            <ModalHeader>
                <ModalTitle>
                    Seleccionar Archivo: 
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormLabel>Buscar</FormLabel>
                    <FormControl
                    type="file"                    
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onSubmit={"submit"}>
                    Subir Notas
                </Button>
            </ModalFooter>
        </Modal>
        </>
    );
}
export {ModalCrear,ModalErrorCrear, ModalSubirArchivo};