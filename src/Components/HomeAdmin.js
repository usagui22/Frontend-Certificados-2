import React, { useEffect, useState } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Chart as ChartJs,Tooltip, Title,ArcElement,Legend} from 'chart.js';
import { Pie } from "react-chartjs-2";
import { API } from "../Services/Conexion";
ChartJs.register(Tooltip,Title,ArcElement,Legend);

const Home = () =>{
const [usuarios,setUsuarios]=useState({
    responsable:' ',
    participante:' ',
    expositor:' ',
    coordinador:''
});
const [plantillas,setPlantillas]=useState({
    aprobacion:'',
    participacion:'',
    exposicion:''
});

    const cargarDatos=async(e)=>{
        const usup="usuario/get-usuario-participante";
        const usur="usuario/get-usuario-responsable";
        const usuc="usuario/get-usuario-coordinador";
        const usue="usuario/get-usuario-expositor";
        //const documentos="documento/get-documentos-data";
        const planA="plantilla/plantillas-aprobacion";
        const planPA="plantilla/plantillas-participacion";
        const planEX="plantilla/plantillas-expositor";
        //count usuarios
        const resP= await API.get(usup);
        const resR=await API.get(usur);
        const resC=await API.get(usuc);
        const resE=await API.get(usue);
        //count plantillas
        const resA=await API.get(planA);
        const resPA=await API.get(planPA);
        const resEX=await API.get(planEX);

        setUsuarios({
            //...usuarios,
            responsable:resR.data,
            participante:resP.data,
            expositor:resE.data,
            coordinador:resC.data    
        })                
        setPlantillas({
            //...plantillas,
            aprobacion:resA.data,
            participacion:resPA.data,
            exposicion:resEX.data
        })        
    }

    const dataEvento=
    {
        labels:["FINALIZADOS","EN CURSO"],
        datasets:[{
            data:[8,10],
            backgroundColor:['blue','green']
        }],
    };
    const dataCertificado=
    {
        labels:["APROBADOS","PARTICIPANTE","EXPOSITOR"],
        datasets:[{
            data:[plantillas.aprobacion,plantillas.participacion,plantillas.exposicion],
            backgroundColor:['purple','blue','green']
        }]
    };
    const dataUsuario=
    {
        labels:["ESTUDIANTE","DOCENTE","RESPONSABLE DE UNIDAD","COORDINADOR DE UNIDAD"],
        datasets:[{
            data:[usuarios.participante,usuarios.expositor,usuarios.responsable,usuarios.coordinador],
            backgroundColor:['purple','blue','green','red']
        }]
    };
    
    useEffect(()=>{
        cargarDatos();
    },[]);
    return(
        <>
            <h3>Bienvenido Administrador</h3>
            
    <CardGroup>
      <Card>
        <Card.Header>
        <div>            
            <Pie data={dataEvento} />
        </div>
        </Card.Header>        
        <Card.Body>
          <Card.Title>EVENTOS</Card.Title>          
            <div className="listaEvento">
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
            <div className="ms-2 me-auto">
            <div className="fw-bold">FINALIZADOS</div>            
            </div>
                <Badge bg="primary" pill>
                8
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">EN CURSO</div>                
            </div>
                <Badge bg="primary" pill>
                10
                </Badge>
            </ListGroup.Item>            
            </ListGroup>
            </div>
            
            </Card.Body>
            
      </Card>
      <Card>
        <Card.Header>
        <div>
        <Pie data={dataCertificado} />
        </div>            
        </Card.Header>               
        <Card.Body>
          <Card.Title>CERTIFICADOS</Card.Title>
          
          <div className="listaCertificado">
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
            <div className="ms-2 me-auto">
            <div className="fw-bold">APROBADOS</div>            
            </div>
                <Badge bg="primary" pill>
                {plantillas.aprobacion}
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">PARTICIPANTE</div>                
            </div>
                <Badge bg="primary" pill>
                {plantillas.participacion}
                </Badge>
            </ListGroup.Item>            
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">EXPOSITOR</div>                
            </div>
                <Badge bg="primary" pill>
                {plantillas.exposicion}
                </Badge>
            </ListGroup.Item>            
            </ListGroup>
            </div>
          
        </Card.Body>
       </Card>
      <Card>
        <Card.Header>
        <div>
            <Pie data={dataUsuario} />
        </div>
        </Card.Header>                        
        <Card.Body>
          <Card.Title>USUARIOS</Card.Title>
          <div>
          <div className="listaCertificado">
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
            <div className="ms-2 me-auto">
            <div className="fw-bold">ESTUDIANTE</div>            
            </div>
                <Badge bg="primary" pill>
                {usuarios.participante}
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">DOCENTE</div>                
            </div>
                <Badge bg="primary" pill>
                {usuarios.expositor}
                </Badge>
            </ListGroup.Item>            
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">RESPONSABLES DE UNIDAD</div>                
            </div>
                <Badge bg="primary" pill>
                {usuarios.responsable}
                </Badge>
            </ListGroup.Item>            
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
            <div className="ms-2 me-auto">
            <div className="fw-bold">COORDINADORES DE UNIDAD</div>                
            </div>
                <Badge bg="primary" pill>
                {usuarios.coordinador}
                </Badge>
            </ListGroup.Item>            
            </ListGroup>
            </div>
          </div>
        </Card.Body>
        
      </Card>
    </CardGroup>
  
        </>
    );
}

export default Home;
