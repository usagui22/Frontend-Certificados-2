import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import FormCrearEvento from './Pages/Evento/FormCrearEvento';
import Navigator from './Components/Navigator';
import { Siderator } from './Components/Siderator';
import { ListaEvento } from './Pages/Evento/ListaEvento';
import ListaUnidad from './Pages/Unidad/ListaUnidad';
import { ListaUsuario } from './Pages/Usuario/ListaUsuario';
import HomeAdmin from './Components/HomeAdmin';
import FormCrearUnidad from './Pages/Unidad/FormCrearUnidad';
import FormCrearUsuario from './Pages/Usuario/FormCrearUsuario';
import IngresarUsuario from './Pages/Usuario/IngresarUsuario';
import { ListaPlantilla } from './Pages/Plantilla/ListaPlantilla';
import FormCrearPlantilla from './Pages/Plantilla/FormCrearPlantilla';

import FormEditarEvento from './Pages/Evento/FormEditarEvento';
import FormEditarUnidad from './Pages/Unidad/FormEditarUnidad';
import FormEditarUsuario from './Pages/Usuario/FormEditarUsuario';
import FormEditarPlantilla from './Pages/Plantilla/FormEditarPlantilla';
import { ListaUsuarioUnidad } from './Pages/Unidad/ListaUsuarioUnidad';
import { ListaDocumento } from './Pages/Documento/ListaDocumento';
import FormCrearDocumento from './Pages/Documento/FormCrearDocumento';
import FormFileNotes from './Pages/Documento/FormFileNotes';
import Certificado from './Pages/Documento/VerDocumentoAdm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigator/>   
                                 
        <div className='auth-wrapper'>
        <Siderator/>
          <div className='auth-inner'>            
            <br/>            
            <br/>
            <Routes>
              <Route path='/' element={<HomeAdmin/>}/>
              <Route path='/Evento' element={<ListaEvento/>}/>
              <Route path='/CrearEvento' element={<FormCrearEvento/>}/>
              <Route path='/EditarEvento' element={<FormEditarEvento/>}/>
              <Route path='/Unidad' element={<ListaUnidad/>}/>
              <Route path='/CrearUnidad' element={<FormCrearUnidad/>}/>
              <Route path='/EditarUnidad' element={<FormEditarUnidad/>}/>
              <Route path='/ListaUsuario' element={<ListaUsuarioUnidad/>}/>
              <Route path='/Usuario' element={<ListaUsuario/>}/>
              <Route path='/CrearUsuario' element={<FormCrearUsuario/>}/>
              <Route path='/EditarUsuario'element={<FormEditarUsuario/>}/>
              <Route path='/IngresarUsuario' element={<IngresarUsuario/>}/>
              <Route path='/Plantilla' element={<ListaPlantilla/>}/>
              <Route path='/CrearPlantilla' element={<FormCrearPlantilla/>}/>
              <Route path='/EditarPlantilla' element={<FormEditarPlantilla/>}/>
              <Route path='/Documento' element={<ListaDocumento/>}/>
              <Route path='/CrearDocumento' element={<FormCrearDocumento/>}/>
              <Route path='/VerDocumento' element={<Certificado/>}/>
              <Route path='/ArchivoNotas' element={<FormFileNotes/>}/>
            </Routes>                
          </div>
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
