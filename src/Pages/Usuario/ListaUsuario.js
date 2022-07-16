import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BotonCargar, BotonCrear,BotonEditar, BotonEliminar } from "../../Components/Botones";
import { API } from "../../Services/Conexion";

export const ListaUsuario = () => {
  const [usuario, setUsuario] = useState([])

  const cargarUsuarios = async () =>{
    let path="usuario/listar-usuario";
    try {
      const res = await API.get(path)
        setUsuario(res.data)
    } catch (error) {
      console.log("No se encuentran usuarios registrados");
    }
  }

  useEffect(() => {
    cargarUsuarios();
  }, [])

  return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE USUARIOS</h3>      
      </div>              
      <div >
        <BotonCrear direccionFormulario="/CrearUsuario" etiqueta="Crear Usuario"/>
        <BotonCargar direccionFormularioArchivo="/CargarArchivo" etiqueta="Seleccionar Archivo"/>
      </div>    
      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>            
            <th>Correo Electronico</th>            
            <th>Cargo</th>
            <th>CI</th>
          </tr>
        </thead>
        <tbody>
          {usuario.map((usu)=>{
            return(<tr key={usu.id} >
              <td>{usu.id}</td>
              <td>{usu.nombres}</td>
              <td>{usu.apellido_paterno}</td>
              <td>{usu.apellido_materno}</td>
              <td>{usu.correo}</td>    
              <td>{usu.id_rol}</td>        
              <td>{usu.ci}</td>  
              <td>
                <BotonEditar direccionEditar={"/editarUsuario"}/>
                
              </td>                           
              <td>
                <BotonEliminar direccionEliminar={"/eliminarUsuario"}/>  
              
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