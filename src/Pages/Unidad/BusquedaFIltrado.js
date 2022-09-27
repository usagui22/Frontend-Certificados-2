import React, { useState } from "react";

const BusquedaFiltrado=()=>{
    const [usuario,setUsuario]=useState([]);//tabla-dinamica
    const [tablaUsuarios,setTablaUsuarios]=([]);//tabla-estatica
    const [busqueda,setBusqueda]=useState("");//controla lo que digita la busqueda

    const cargarUsuarios=()=>{
        //metodos para obtener los usuarios
    }
    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    const filtrar=(terminoBusqueda)=>{
        let resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setUsuario(resultadosBusqueda);
    }
    return(
        <>
        <div>
            <input
            value={busqueda}
            placeholder="Busqueda por carnet"
            onChange={handleChange}
            />
            <button className="btn-success" >
            </button>
        </div>
        <div className="table-responsive">
            <table className="table table-borderer">
                <thead>
                    <tr>
                        <tr>atributo 1</tr>
                        <tr>atributo 2</tr>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuario && usuario.map((usuario)=>{
                            return(
                                <tr>
                                    <td>{usuario.id}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
        </>        
    );
}