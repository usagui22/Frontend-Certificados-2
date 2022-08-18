import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BotonEditar, BotonEliminar } from "../../componentes/Botones";
import { API } from "../../Services/Conexion";

export const ListaDocumento =()=>{
const [certificado,setCertificado]=useState([]);

  const cargarCertificados= async ()=>{
    let path="documento/listar-documento";
    try {
      const res = await API.get(path);
      setCertificado(res.data);
    } catch (error) {      
      console.log("No tiene datos la solicitud pedida o error en solicitud")
    }
  }
  useEffect(()=>{
    cargarCertificados();
  },[])
    return(
        <>
        {/* <Lista titulos={etiquetas}/> */}
        <>
      <div className='titulo'>
        <h3>LISTA DE CERTIFICADOS REGISTRADOS</h3>      
      </div>
      <div className='btn-crear'>
        <ButtonGroup>
          <Button className='btn col-me-2 m-1'>
            <Link to={"/FormDocumento"} className="text-light text">Crear Certificado
            </Link>
          </Button>  

          <Button className='btn col-ms-2 m-1'>
            <Link to={"/VerCertificado"} className="text-light text">Ver Certificado
            </Link>
          </Button>

          <Button className='btn col-ms-2 m-1'>
            <Link to={"/ArchivoNotas"} className="text-light text">Subir Notas
            </Link>
          </Button>
          {/* <Button className='btn col-ms-2 m-1'>
            <Link to={"/DocumentoCertificado"} className="text-light text">Certificado Prueba
            </Link>
          </Button>                 */}
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
            {/* <th>Opciones</th> */}
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
                <BotonEliminar direccionEliminar={"/eliminarDocumento"}/>
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
const ListaDocumentoAprobados=()=>{

}
export {ListaDocumento, ListaDocumentoAprobados};