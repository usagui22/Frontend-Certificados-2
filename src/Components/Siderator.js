import React from "react";
import { ListGroup, ListGroupItem as Item } from 'react-bootstrap';
import { Link } from "react-router-dom";

export  const Siderator =()=>{
    return (
        <>
        <div className='sidebar' >          
          <div>
          <ListGroup key={'xl'} horizontal={'xl'} className="items navbar-expand-lg" >
              <Item className='caja-item nav-link ' variant="light"> 
              <Link to={"/Unidad"} className="text">UNIDADES</Link>
              </Item>
              <Item className='caja-item nav-link ' variant="light">
              <Link to={"/Evento"} className="text">EVENTOS</Link>
              </Item>
              <Item className='caja-item nav-link ' variant="light">
              <Link to={"/Documento"} className="text">CERTIFICADOS</Link>
              </Item>
              <Item className='caja-item nav-link ' variant="light">
              <Link to={"/Usuario"} className="text">USUARIOS</Link>
              </Item>
              <Item className='caja-item nav-link ' variant="light">
              <Link to={"/Plantilla"} className="text">PLANTILLAS</Link>
              </Item>              
          </ListGroup>
          </div>
        </div>
        </>
      )

}
