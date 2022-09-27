import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BotonEditar } from "../../Components/Botones";
import { API } from "../../Services/Conexion";

export const ListaDocumento =()=>{
const [certificado,setCertificado]=useState([]);

  const getCertificados= async ()=>{
    let path="documento/listar-documento";
    try {
      const res = await API.get(path);
      setCertificado(res.data);
    } catch (error) {      
      console.log("No tiene datos la solicitud pedida o error en solicitud")
    }
  }
  useEffect(()=>{
    getCertificados();
  },[])
  const EliminarDocumento=async(id)=>{
    let path="documento/eliminar-documento";
    try {
      API.delete(path+id)
      // .then(
      //   getDocumentos();
      // )
    } catch (error) {
      console.log("error al eliminar elemento")
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
            <th>Hash</th>
            <th>Fecha Confirmacion</th>
            <th>Nota</th>
            <th>Path</th>
            
          </tr>
        </thead>
        <tbody>
          {certificado.map((cer)=>{
            return(<tr key={cer.id}>
              <td>{cer.id}</td>
              <td>{cer.nombre}</td>
              <td>{cer.hash}</td>
              <td>{cer.fecha_confirmacion}</td>              
              <td>{cer.nota_valoracion}</td>
              <td>{cer.path}</td>
              <td>
                <BotonEditar direccionEditar={"/editarDocumento"} />
              </td>
              <td>
                <Button onClick={()=>{EliminarDocumento(cer.id)}}/>
              </td>              
            </tr>)
          })}
        </tbody>
      </Table>
      </div>
      </>

    );
}
