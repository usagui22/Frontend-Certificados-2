import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Chart as ChartJs,Tooltip, Title,ArcElement,Legend} from 'chart.js';
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip,Title,ArcElement,Legend);

const Home = () =>{
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
            data:[50,64,14],
            backgroundColor:['purple','blue','green']
        }]
    };
    const dataUsuario=
    {
        labels:["ESTUDIANTE","DOCENTE","RESPONSABLE DE UNIDAD","COORDINADOR DE UNIDAD"],
        datasets:[{
            data:[110,18,9,5],
            backgroundColor:['purple','blue','green','red']
        }]
    };
    //configuracion del grafico
    // const opciones={
    //     responsive:true,
    // }

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
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
            {/* <Card.Footer> */}
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        {/* </Card.Footer> */}
      </Card>
      <Card>
        <Card.Header>
        <div>
        <Pie data={dataCertificado} />
        </div>            
        </Card.Header>
        
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
                50
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
                64
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
                14
                </Badge>
            </ListGroup.Item>            
            </ListGroup>
            </div>
          
        </Card.Body>
        {/* <Card.Footer> */}
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        {/* </Card.Footer> */}
      </Card>
      <Card>
        <Card.Header>
        <div>
            <Pie data={dataUsuario} />
        </div>
        </Card.Header>                
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
                110
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
                18
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
                9
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
                5
                </Badge>
            </ListGroup.Item>            
            </ListGroup>
            </div>
          </div>
        </Card.Body>
        {/* <Card.Footer> */}
          {/* <small className="text-muted">Last updated 3 mins ago</small> */}
        {/* </Card.Footer> */}
      </Card>
    </CardGroup>
  
        </>
    );
}

export default Home;
