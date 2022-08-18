import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BotonRetornar } from "../../Components/Botones";
import FieldBuscar from "../../Components/FieldBuscar";
import { API } from "../../Services/Conexion";

const ListaUsuarioUnidad=()=>{
  const [usuarios,setUsuarios]=useState([]);
  const [tablaUsuarios,setTablaUsuarios]=useState([]);
  const [contenido,setContenido]=useState(null);
  const [comparar,setComparar]=useState(null);
  const [seleccionado,setSeleccion]=useState({id_usuario:'',estado:false});

  const cargarUsuarios= async ()=>{
    let path="usuario/listar-usuario";
    try {
      const res=await API.get(path);
      setUsuarios(res.data);
      setTablaUsuarios(res.data);
    } catch (error) {
      console.log("No se encuentran usuarios registrados");
    }
  }  
  useEffect(()=>{
    cargarUsuarios();    
  },[])
  const handleChange=(e)=>{
    setContenido(e.target.value);    
    setComparar({...comparar, id_usuario:e.target.value});    
    filtrar(e.target.value);      
  }
  const filtrar=(buscartexto)=>{
    let busqueda=tablaUsuarios.filter((ele)=>{
      if(ele.ci.includes(buscartexto)){
        return ele;        
      }else{
        console.log("el elemento no se encuentra");
      }
    })
    setUsuarios(busqueda);
  }  

  return(
    <>
    <div>
      <h3>Lista de Usuarios Registrados</h3>
    </div>
    <div>
      <FieldBuscar 
        titulo="Busqueda de Usuario"        
        funcion={filtrar}
        valor={contenido}
        change={(e)=>handleChange(e.target.value)}
        placeholder="Ingrese un numero de carnet"   
      />
      <BotonRetornar direccionRetornar="/Unidad"/>
    </div>
    <div>
      <Table responsive className="tble table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Completo</th>
            <th>Carnet de Identidad</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map((usu)=>{
              return(
                <tr key={usu.id}>
                  <td>{usu.id}</td>
                  <td>
                    {usu.nombres} 
                    {usu.apellido_paterno} 
                    {usu.apellido_materno}
                  </td>
                  <td>{usu.ci}</td>
                  <td>{usu.id_rol}</td>
                  <td>
                    
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
    </>
  );
}

export  {ListaUsuarioUnidad};