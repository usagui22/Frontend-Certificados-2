
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { API } from '../../Services/Conexion';
import { BotonAsignar, BotonEditar, BotonEliminar, BotonCrear } from '../../Components/Botones';

const ListaUnidad = () =>{
  const [unidad,setUnidad]=useState([]);  

  const getUnidades = async ()=>{
    let path="unidad/listar-unidades";
      try {
        const res= await API.get(path)
          setUnidad(res.data)
      } catch (error) {
        console.log("No se encuentran unidades registradas")
      }
  }

  const handleDelete=(id)=>{
    const p="unidad/eliminar-unidad";
    try {
      API.delete(p+"$id_uni"+id)
    .then(
      getUnidades()
    );  
    } catch (error) {
      console.log("Error al eliminar elemento");
    }    
  }

  useEffect(()=>{    
    getUnidades()

  },[]);

    return (      
      <>
      <div className='titulo'>
        <h3>LISTA DE UNIDADES REGISTRADAS</h3>      
      </div>
      <div className='p-3'>
        <BotonCrear direccionFormulario={"/CrearUnidad"} etiqueta="Crear Unidad"/>
      </div>      

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Abreviatura</th>
            <th>Telefono</th>
            <th>Pagina de Referencia</th>
            <th>Correo Contacto</th>
            <th>Telefono Alternativo</th>            
            <th>Direccion</th>    
            <th>Responsable</th>        
          </tr>
        </thead>
        <tbody>
          {unidad.map((uni,k)=>{
            return( 
            <tr key={k}>

              <td>{uni.id_unidad}</td>
              <td>{uni.nombre}</td>
              <td>{uni.abreviacion}</td>
              <td>{uni.telefono}</td>
              <td>{uni.sitio_web}</td>
              <td>{uni.correo}</td>
              <td>{uni.telefono_alternativo}</td>
              <td>{uni.direccion}</td>         
              <td>{uni.responsable}</td>     
              {/* <td>{uni.responsable}</td> */}
              <td>
                <BotonEditar direccionEditar={"/editarUnidad/?id="+uni.id}/>
                                
              </td>              
              <td>
                <BotonEliminar funcion={()=>handleDelete(uni.id)}/>
                
              </td> 
              <td>
                <BotonAsignar direccionAsignar={"/ListaUsuario/"} identificador={uni.id}/>
                
              </td>  
            </tr>
            )
          })}
        </tbody>
      </Table>
      </div>
      </>
    );

}

export default ListaUnidad;


