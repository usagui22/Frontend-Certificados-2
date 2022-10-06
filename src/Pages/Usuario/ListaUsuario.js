import React, { useEffect, useState } from "react";
import { ButtonGroup, Table } from "react-bootstrap";
import swal from "sweetalert";
import { BotonCargar, BotonCrear,BotonEditar, BotonEliminar } from "../../Components/Botones";
import { API } from "../../Services/Conexion";

export const ListaUsuario = () => {
  const [usuario, setUsuario] = useState([])

  const getUsuarios = async () =>{
    let path="usuario/listar-usuario";
    try {
      const res = await API.get(path)
        setUsuario(res.data)
    } catch (error) {
      console.log("No se encuentran usuarios registrados");
    }
  }

  const handleDelete=(id)=>{
    const p="usuario/eliminar-usuario";
    try {
      API.post(p,id)
      //API.delete(p+"$id_usu"+id)
      
    .then(
      getUsuarios(),
      swal({
        title:"Eliminar Usuario Exitosamente",
        text:"EL elemento se ha eliminado exitosamente",
        icon:"success",
        buttons:["Cancelar","Aceptar"]
      })
    );
    } catch (error) {
      console.log("Error al eliminar elemento");
      swal({
        title:"Eliminar Usuario",
        text:"No se ha podido eliminar Usuario",
        icon:"danger",
        buttons:"ok"
      })
    }    
  }

  useEffect(() => {
    getUsuarios();
  }, [])

  return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE USUARIOS</h3>      
      </div>              
      <div >
        <ButtonGroup className="p-3">
        <BotonCrear direccionFormulario="/CrearUsuario" etiqueta="Crear Usuario"/>
        <BotonCargar direccionFormularioArchivo="/CargarArchivo" etiqueta="Seleccionar Archivo"/>
        </ButtonGroup>
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
                <BotonEliminar funcion={()=>handleDelete(usu.id)}/>  
                {/* <Button className="btn-danger" 
                  onClick={()=>handleDelete(usu.id)}>
                    Eliminar</Button> */}
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