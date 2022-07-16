import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BotonEditar =(props)=>{
  const {direccionEditar}=props;
  return (
    <div>
      <Button>
        <Link className="text-light text" to={direccionEditar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>                   
        </Link>   
      </Button>
    </div>
  );  
}

const BotonEliminar =(props)=>{
  const {direccionEliminar}=props;
  return (
    <div>
      <Button>
        <Link className="text-light text" to={direccionEliminar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </Link>
      </Button> 
    </div>
  );
}

const BotonAsignar=(props)=>{
  const {direccionAsignar,identificador}=props;
  return(
    <div>
      <Button >
        <Link className="text-light text" to={direccionAsignar}  uni_resp={identificador}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
          </svg>
        </Link>                      
      </Button>
    </div> 
  );
}
const BotonBuscar=(props)=>{
  const {funcion}=props;
  return(
    <div>
      <Button onClick={funcion}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </Button>
    </div>
  );

}

const BotonGuardarAsinacion=(props)=>{
  const {direccionGuardar}=props;
  return(
    <div>
      <Button className="mx-2">
          <Link  className="text-light text" to={direccionGuardar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
              <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg>
          </Link>
      </Button>
    </div>
  );
}

const BotonCrear=(props)=>{
  const {direccionFormulario, etiqueta}=props;
  return(
    <div className="btn-crear">
      <Button >
        <Link to={direccionFormulario} className="text text-white">
          {etiqueta}
        </Link>
      </Button>
    </div>
  );
}
const BotonCargar=(props)=>{
  const {direccionFormularioArchivo, etiqueta}=props;
  return(
    <div>
      <Button className="btn-crear">
        <Link to={direccionFormularioArchivo} className="text text-white">{etiqueta}</Link>
      </Button>            
    </div>
  );
}
export {BotonEditar,BotonEliminar,BotonAsignar,BotonBuscar,BotonGuardarAsinacion,BotonCrear,BotonCargar};