// import React, { useEffect, useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import FieldBuscar from "../../Components/FieldBuscar";
// //import { BuscadorLista } from "../../Components/buscadorLista";
// import { API } from "../../Services/Conexion";

// export const ListaUsuarioUnidad2=(props)=>{
//    // const {id_unidad}=props;
//     //lista de usuarios participantes
//     const [usuarios,setUsuarios]=useState([]);
//     //tablaBusqueda
//     const [lista,setLista]=useState([]);
//     //variable de busqueda
//     const [busqueda,setBusqueda]=useState("");
//     //variable de control
//     const [seleccionado,setSeleccionado]=useState(null);
//     //mostrar el elemento con el id seleccionado
//     const [responsable,setRes]=useState({
//         nombre_completo:'',
//         ci:''
//     });    
//     //carga Elementos
//     const cargarUsuarios=async()=>{
//         try {
//             const res=await API.get("unidad/listar-participantes");        
//             setUsuarios(res.data);      
//             setLista(res.data);
//         } catch (error) {
//             console.log("error en lista");
//         }        
//     }    
//     //cambia de check en lista
//     const cambiarSeleccionado=()=>{
//         if (seleccionado!==null && seleccionado!==0) {
//             console.log(seleccionado);
//             //let ruta="unidad/cambiar-responsable";
//             //API.post(ruta,seleccionado,id_unidad);
//         } else {
//             console.log("no se puede actualizar unidad");
//         }
//     }
      
//     useEffect(()=>{
//         cargarUsuarios();                         
//     },[]) ;
//     //realiza busqueda y muestra los cambios en la lista
//     const handleBuscar=(e)=>{
//         setBusqueda(e.target.value);
//         filtrar(busqueda);
//     }
//     const filtrar=(elemento)=>{
//         let resultado=lista.filter((ele)=>{
//             if(ele.ci?.includes(elemento)|| 
//                 ele.nombres?.toString().toLowerCase().includes(elemento.toLowerCase())){
//                     return ele;
//                 }else{
//                     return null;
//                 }
//         })
//         setUsuarios(resultado);
//     }  
//     return(
//         <>
//         <div>
//             <h3>Lista de Usuarios Registrados</h3>
//         </div>
//         <div>
//             <FieldBuscar
//                 titulo="Busqueda de Usuario"
//                 valor={busqueda}
//                 change={handleBuscar}
//                 placeholder="Ingrese un numero de carnet"
//             />
//         </div>
//         <div >
//             {/* mostrar resultado de seleccion */}       
//             Seleccionado: 
//             <div className="vr"/>
//             <span className="border border-dark rounded">                 
//                 {seleccionado} {responsable.nombre_completo} {responsable.ci}            
//             </span>            
//         </div>
//         <br/>
//         <div>
//             <Table responsive className="table table-bordered">                
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Nombre Completo</th>
//                         <th>Carnet de Identidad</th>
//                         <th>Cargo</th>      
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         usuarios.map((usu)=>{
//                             return(
//                                 <tr key={usu.id}>
//                                     <td>{usu.id}</td>
//                                     <td>{usu.nombres} {usu.apellido_paterno} {usu.apellido_materno}</td>
//                                     <td>{usu.ci}</td>
//                                     <td>Participante</td>
//                                     <td>
//                                         <input
//                                             className="form-check-input"
//                                             type={"radio"}
//                                             id={usu.id}
//                                             name="usuario"
//                                             value={usu.id}                                        
//                                             onChange={
//                                                 (e)=>{setSeleccionado(e.target.value)                                                
//                                                 setRes({
//                                                     nombre_completo:usu.nombres+' '+usu.apellido_paterno+' '+usu.apellido_materno,
//                                                     ci:usu.ci
//                                                 })
//                                                 }
//                                             }
//                                         />
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </Table>
//         </div>
//         <div>
//             <Button onClick={cambiarSeleccionado}>
//                 Aceptar
//             </Button>
//         </div>
//         </>
//     );
// }

//anterior elemento
/*
// import React, { useEffect, useState } from "react";
// import { Button, Table } from "react-bootstrap";
// //import { BotonRetornar } from "../../Components/Botones";
// import FieldBuscar from "../../Components/FieldBuscar";
// import { API } from "../../Services/Conexion";

// const ListaUsuarioUnidad=()=>{
//   //constantes de buscador 
//   const [usuarios,setUsuarios]=useState([]);
//   const [tablaUsuarios,setTablaUsuarios]=useState([]);
//   const [busqueda,setBusqueda]=useState("");  
//   //seleccion de usuario  
//   let [opcionCheck,setOptionCheck]=useState('0000000');
//   //participante seleccionado
//   const [seleccionado,setSeleccionado]=useState(null);

//   const cargarLista= async ()=>{
//     let path="unidad/listar-usuario";
//     try {
//       const res=await API.get(path);
//       setUsuarios(res.data);
//       setTablaUsuarios(res.data);
//     } catch (error) {
//       console.log("No se encuentran usuarios registrados");
//     }
//   }  
//   useEffect(()=>{
//     cargarLista();    
//   },[])
//   //busqueda de usuario por carnet
//   const handleBuscar=(e)=>{
//     setBusqueda(e.target.value);  
//     console.log("Busqueda: "+e.target.value)  
//     //setComparar({...comparar, id_usuario:e.target.value});    
//     filtrar(e.target.value);      
//   }
//   const filtrar=(textoBusqueda)=>{
    
//     let resultado=tablaUsuarios.filter((ele)=>{
//       if(ele.ci?.includes(textoBusqueda)||
//       ele.nombres?.toString().toLowerCase().includes(textoBusqueda.toLowerCase())){
//         return ele;        
//        }
//        else{
//         return null;        
//        }    
//     })
//     setUsuarios(resultado);
//   }  
// //
// const buscarIdLista=(eleBuscar)=>{
//   const siExiste=null;
//   for(let r=0;r<usuarios.length;r++){
//      eleBuscar=usuarios[r]?siExiste===true:siExiste===false;
//      return siExiste;
//   }  
// }

// const handleCheck=(ev)=>{
//   console.log("Entrando a Handle");
//   if(opcionCheck==='0000000'){
//     setOptionCheck(ev.target.value);
//     console.log("EL usuario es "+opcionCheck+" Responsable de Unidad")
//   }else{
//     console.log("Ningun usuario no ha sido seleccionado");
//     if(opcionCheck!=='0000000' && buscarIdLista(opcionCheck)===true){
//       console.log("El usuario seleccionado ya ha sido elegido")
//     }
//   }
// }
// const GuadarSeleccion=()=>{
//   if(opcionCheck!=='0000000'){
//     setSeleccionado()
//   }else{
//     console.log(seleccionado);
//     return seleccionado;
//   }  
// }
//   return(
//     <>
//     <div>
//       <h3>Lista de Usuarios Registrados</h3>
//     </div>
//     <div className="align-baseline">
//       <FieldBuscar 
//         titulo="Busqueda de Usuario"                
//         valor={busqueda}        
//         change={handleBuscar}
//         placeholder="Ingrese un numero de carnet"   
//       />      
//       {/* <div className="vr"/> */
//       <p>{seleccionado}</p>
//       {/* <BotonRetornar direccionRetornar="/Unidad"/> */}
//       <Button className="" onClick={GuadarSeleccion}>
//         Aceptar
//       </Button>
//     </div>
//     <div>
//       <Table responsive className="table table-bordered">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Nombre Completo</th>
//             <th>Carnet de Identidad</th>
//             <th>Cargo</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             usuarios.map((usu)=>{
//               return(
//                 <tr key={usu.id}>
//                   <td>{usu.id}</td>
//                   <td>
//                     {usu.nombres}  {usu.apellido_paterno}  {usu.apellido_materno}
//                   </td>
//                   <td>{usu.ci}</td>
//                   <td>{usu.id_rol}</td>
//                   <td>
//                     <input
//                     className="form-check-input"
//                     type={"radio"}
//                     id={usu.id}      
//                     name="usuarios"              
//                     value={usu.id}
//                     checked={opcionCheck===usu.id?false:true}
//                     onChange={handleCheck}
//                     />

//                   </td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </Table>
//     </div>
//     </>
//   );
// }

// export  {ListaUsuarioUnidad};
 