import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import FieldBuscar from "../../Components/FieldBuscar";
//import { BuscadorLista } from "../../Components/buscadorLista";
import { API } from "../../Services/Conexion";

export const ListaUsuarioUnidad=()=>{
   // const {id_unidad}=props;
    //lista de usuarios participantes
    const [usuarios,setUsuarios]=useState([]);
    //tablaBusqueda
    const [lista,setLista]=useState([]);
    //variable de busqueda
    const [busqueda,setBusqueda]=useState("");
    //variable de control
    const [seleccionado,setSeleccionado]=useState(null);
    //mostrar el elemento con el id seleccionado
    const [responsable,setRes]=useState({
        nombre_completo:'',
        ci:''
    });    
    //carga Elementos
    const cargarUsuarios=async()=>{
        try {
            const res=await API.get("unidad/listar-participantes");        
            setUsuarios(res.data);      
            setLista(res.data);
        } catch (error) {
            console.log("error en lista");
        }        
    }    
    //cambia de check en lista
    const cambiarSeleccionado=()=>{
        if (seleccionado!==null && seleccionado!==0) {
            console.log(seleccionado);
            //let ruta="unidad/cambiar-responsable";
            //API.post(ruta,seleccionado,id_unidad);
        } else {
            console.log("no se puede actualizar unidad");
        }
    }
      
    useEffect(()=>{
        cargarUsuarios();                         
    },[]) ;
    //realiza busqueda y muestra los cambios en la lista
    const handleBuscar=(e)=>{
        setBusqueda(e.target.value);
        filtrar(busqueda);
    }
    const filtrar=(elemento)=>{
        let resultado=lista.filter((ele)=>{
            if(ele.ci?.includes(elemento)|| 
                ele.nombres?.toString().toLowerCase().includes(elemento.toLowerCase())){
                    return ele;
                }else{
                    return null;
                }
        })
        setUsuarios(resultado);
    }  
    return(
        <>
        <div>
            <h3>Lista de Usuarios Registrados</h3>
        </div>
        <div>
            <FieldBuscar
                titulo="Busqueda de Usuario"
                valor={busqueda}
                change={handleBuscar}
                placeholder="Ingrese un numero de carnet"
            />
        </div>
        <div >
            {/* mostrar resultado de seleccion */}       
            Seleccionado: 
            <div className="vr"/>
            <span className="border border-dark rounded">                 
                {seleccionado} {responsable.nombre_completo} {responsable.ci}            
            </span>            
        </div>
        <br/>
        <div>
            <Table responsive className="table table-bordered">                
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
                                    <td>{usu.nombres} {usu.apellido_paterno} {usu.apellido_materno}</td>
                                    <td>{usu.ci}</td>
                                    <td>Participante</td>
                                    <td>
                                        <input
                                            className="form-check-input"
                                            type={"radio"}
                                            id={usu.id}
                                            name="usuario"
                                            value={usu.id}                                        
                                            onChange={
                                                (e)=>{setSeleccionado(e.target.value)                                                
                                                setRes({
                                                    nombre_completo:usu.nombres+' '+usu.apellido_paterno+' '+usu.apellido_materno,
                                                    ci:usu.ci
                                                })
                                                }
                                            }
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
        <div>
            <Button onClick={cambiarSeleccionado}>
                Aceptar
            </Button>
        </div>
        </>
    );
}
