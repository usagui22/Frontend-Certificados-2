import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { BotonCrear, BotonEditar, BotonEliminar } from "../../Components/Botones";
import { API } from "../../Services/Conexion";

export const ListaEvento=()=>{
  const [evento,setEvento]=useState([]);

  const getEventos =async ()=>{
    let path="evento/listar-eventos";
    try {
      const res =await API.get(path)
      setEvento(res.data)
    } catch (error) {
      console.log("La lista no esa cargando")
    }
  }
  const handleDelete=(id)=>{
    const p="evento/eliminar-evento";
    try {
      API.delete(p+"$id_usu"+id)
    .then(
      getEventos()
    );
    } catch (error) {
      console.log("Error al eliminar elemento");
    }
  }
  useEffect(()=>{    
    getEventos();
  },[])

    return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE EVENTOS REGISTRADOS</h3>      
      </div>
      <div className="p-3">
        <BotonCrear direccionFormulario="/CrearEvento" etiqueta="Crear Evento"/>
      </div>        

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Nombre</th>
            <th>Nombre de Unidad</th>
            <th>Enlace de Convocatoria</th>
            <th>Inicio de Evento</th>
            <th>Fin de Registro</th>
            <th>Inicio de Actividades</th>                        
            <th>Fin de Actividades</th>                        
            <th>Inicio de Emision</th>
            <th>Fin de Evento</th>
                                  
          </tr>
        </thead>
        <tbody>
          { evento.map((eve,k)=>{
            return(
            <tr key={k}>
              {/* <td>{eve.id}</td> */}
              <td>{eve.nombre}</td>
              <td>{eve.id_unidad}</td>
              <td>{eve.url_convocatoria}</td>
              <td>{eve.fecha_inicio}</td>
              <td>{eve.registro_fin}</td>
              <td>{eve.inicio_actividades}</td>
              <td>{eve.fin_actividades}</td>
              <td>{eve.inicio_emision}</td>
              <td>{eve.fecha_fin}</td>
              <td>
                <BotonEditar direccionEditar="/EditarEvento" props={eve.id_evento}/>
              </td>
              <td>
                <BotonEliminar 
                direccionEliminar="/EliminarEvento"
                funcion={()=>handleDelete(eve.id)}
                />
              </td>              
            </tr>)
          })}
        </tbody>
      </Table>
      </div>
      </>
      </>
    );
}