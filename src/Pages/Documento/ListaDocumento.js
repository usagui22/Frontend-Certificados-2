import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BotonEditar, BotonEliminar, BotonVer } from "../../Components/Botones";
import { API } from "../../Services/Conexion";

export const ListaDocumento =()=>{
const [certificado,setCertificado]=useState([]);

  const cargarCertificados= async ()=>{    
    let path="documento/listar-documento";
    try {      
      const resC = await API.get(path)
        setCertificado(resC.data)      
    } catch (error) {      
      console.log("No tiene datos la solicitud pedida o error en solicitud")
    }
  }
  
  useEffect(()=>{
    cargarCertificados()
  },[])

  const handleDelete=(id)=>{    
    try{
      const r="documento/eliminar-documento"
      API.delete(r+"?$id_usu"+id)
      .then(
        cargarCertificados()
        )
    }catch(error){
      console.log("Error al eliminar elemento");
    }
  }
    return(   
        <>
      <div className='titulo'>
        <h3>LISTA DE CERTIFICADOS REGISTRADOS</h3>      
      </div>
      <div className='btn-crear'>
        <ButtonGroup className="p-1"> 
          <Button >
            <Link to={"/CrearDocumento"} className="text-light text">Crear Certificado
            </Link>
          </Button>  

          <Button className='mx-2'>
            <Link to={"/ArchivoNotas"} className="text-light text">Subir Notas
            </Link>
          </Button>
        </ButtonGroup>
      </div>

      <div className='table-responsive'>
      <Table responsive  className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Evento</th>
            <th>Fecha Confirmacion</th>
            <th>Nota</th>
            <th>Plantilla</th>            
          </tr>
        </thead>
        <tbody>
          {certificado.map((cer)=>{
            return(
            <tr key={cer.id_documento}>
              <td>{cer.id_documento}</td>
              <td>{cer.nombre_integrante}</td>
              <td>{cer.id_evento}</td>
              <td>{cer.fecha_confirmacion}</td>              
              <td>{cer.nota_valoracion}</td>
              <td>{cer.id_plantilla}</td>
              <td>
                <BotonEditar direccionEditar={"/editarDocumento"} />
              </td>
              <td>
                <BotonEliminar
                  direccionEliminar="/ElimininarEvento"
                  funcion={()=>handleDelete(cer.id)}
                />                
              </td>            
              <td>    
                <BotonVer
                  direccionVer={"/VerDocumento"}
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
