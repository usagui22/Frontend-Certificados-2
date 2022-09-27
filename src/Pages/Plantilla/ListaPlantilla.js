import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BotonEliminar } from "../../Components/Botones";
import { API } from "../../Services/Conexion";

 const ListaPlantilla =()=>{
  const [plantilla,setPlantillas]=useState([]);

  const getPlantillas= async ()=>{
    let path="plantilla/listar-plantillas";
    try {
      const res = await API.get(path);
      setPlantillas(res.data);
    } catch (error) {
      console.log("Error al cargar las plantillas o tabla vacia");
    }
  }
  const handleDelete=(id)=>{    
    const p="plantilla/eliminar-plantilla";
    try {
      API.delete(p+"$id_usu"+id)
    .then(
      getPlantillas()
    )
    } catch (error) {
      console.log("Error al eliminar elemento");
    }    
  }

  const setToLocalStorage=(id, nombre,descripcion,plantilla)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("descripcion",descripcion);
    localStorage.setItem("plantilla",plantilla);
  }

  useEffect(()=>{
    getPlantillas();
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
                {/* <BotonEditar
                  direccionEditar={"/EditarPlantilla/:id"+pla.id}
                /> */}
                <Link to={"/EditarPlantilla"} >
                  <Button
                    onClick={()=>setToLocalStorage(                      
                      pla.id,
                      pla.nombre,
                      pla.descripcion,
                      pla.plantilla
                    )}
                  >
                    Actualizar
                  </Button>
                </Link>
              </td>            
              <td>
                <BotonEliminar
                //direccionEliminar={"/EliminarPlantilla/:id"+pla.id}
                funcion={()=>handleDelete(pla.id)}
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