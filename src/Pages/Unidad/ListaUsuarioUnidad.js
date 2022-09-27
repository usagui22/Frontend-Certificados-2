import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BotonRetornar } from "../../Components/Botones";
import FieldBuscar from "../../Components/FieldBuscar";
import { API } from "../../Services/Conexion";

const ListaUsuarioUnidad=()=>{
  //constantes de buscador 
  const [usuarios,setUsuarios]=useState([]);
  const [tablaUsuarios,setTablaUsuarios]=useState([]);
  const [busqueda,setBusqueda]=useState("");  
  //seleccion de usuario  
  let [opcionCheck,setOptionCheck]=useState('0000000');

  const cargarUsuarios= async ()=>{
    let path="unidad/listar-usuario";
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
  //busqueda de usuario por carnet
  const handleBuscar=(e)=>{
    setBusqueda(e.target.value);  
    console.log("Busqueda: "+e.target.value)  
    //setComparar({...comparar, id_usuario:e.target.value});    
    filtrar(e.target.value);      
  }
  const filtrar=(textoBusqueda)=>{
    
    let resultado=tablaUsuarios.filter((ele)=>{
      if(ele.ci?.includes(textoBusqueda)||
      ele.nombres?.toString().toLowerCase().includes(textoBusqueda.toLowerCase())){
        return ele;        
       }
       else{
        return null;        
       }    
    })
    setUsuarios(resultado);
  }  
//
const buscarIdLista=(eleBuscar)=>{
  const siExiste=null;
  for(let r=0;r<usuarios.length;r++){
     eleBuscar=usuarios[r]?siExiste===true:siExiste===false;
     return siExiste;
  }  
}

const handleCheck=(ev)=>{
  console.log("Entrando a Handle");
  if(opcionCheck==='0000000'){
    setOptionCheck(ev.target.value);
    console.log("EL usuario es "+opcionCheck+" Responsable de Unidad")
  }else{
    console.log("Ningun usuario no ha sido seleccionado");
    if(opcionCheck!=='0000000' && buscarIdLista(opcionCheck)===true){
      console.log("El usuario seleccionado ya ha sido elegido")
    }
  }
}
  return(
    <>
    <div>
      <h3>Lista de Usuarios Registrados</h3>
    </div>
    <div className="align-baseline">
      <FieldBuscar 
        titulo="Busqueda de Usuario"                
        valor={busqueda}        
        change={handleBuscar}
        placeholder="Ingrese un numero de carnet"   
      />      
      <div className="vr"/>
      <BotonRetornar direccionRetornar="/Unidad"/>
    </div>
    <div>
      <Table responsive className="table table-bordered">
        <thead>
          <tr>
            {/* <th>#</th> */}
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
                  {/* <td>{usu.id}</td> */}
                  <td>
                    {usu.nombres}  {usu.apellido_paterno}  {usu.apellido_materno}
                  </td>
                  <td>{usu.ci}</td>
                  <td>{usu.id_rol}</td>
                  <td>

                    <input
                    className="form-check-input"
                    type={"radio"}
                    id={usu.id}      
                    name="usuarios"              
                    value={usu.id}
                    checked={opcionCheck===usu.id?false:true}
                    onChange={handleCheck}
                    />

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