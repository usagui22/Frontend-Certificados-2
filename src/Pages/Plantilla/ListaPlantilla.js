import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BotonEditar, BotonEliminar } from "../../Components/Botones";
import { API } from "../../Services/Conexion";

 const ListaPlantilla =()=>{
  const [plantilla,setPlantillas]=useState([]);

  const cargarPlantillas= async ()=>{
    let path="plantilla/listar-plantillas";
    try {
      const res = await API.get(path);
      setPlantillas(res.data);
    } catch (error) {
      console.log("Error al cargar las plantillas o tabla vacia");
    }
  }

  useEffect(()=>{
    cargarPlantillas();
  },[])

    return(              
        <>
      <div className='titulo'>
        <h3>LISTA DE PLANTILLAS DE CERTIFICADO</h3>      
      </div>
      <div className='btn-crear'>
        <Button >
          <Link to={"/CrearPlantilla"} className="text-light text">Crear Plantilla</Link>
        </Button>                
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Plantilla</th>
            <th>Opciones</th>                                  
          </tr>
        </thead>
        <tbody>
          { plantilla.map((pla, k)=>{
            return(
            <tr key={k}>
              <td>{pla.id}</td>
              <td>{pla.nombre}</td>
              <td>{pla.descripcion}</td>
              <td>{pla.plantilla}</td>
              <td>
                <BotonEditar
                  direccionEditar={"/EditarPlantilla/:id"+pla.id}
                />
              </td>
              <td>
                <BotonEliminar
                direccionEliminar={"/EliminarPlantilla/:id"+pla.id}
                />
              </td>              
            </tr>)
          })}
        </tbody>
      </Table>
      </div>
      </>
      
    ); 
}
export  {ListaPlantilla};