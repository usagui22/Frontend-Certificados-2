
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import FormCrearEvento from './Pages/Evento/FormCrearEvento';
import Navigator from './Components/Navigator';
import { Siderator } from './Components/Siderator';
import { ListaEvento } from './Pages/Evento/ListaEvento';
import ListaUnidad from './Pages/Unidad/ListaUnidad';
import { ListaUsuario } from './Pages/Usuario/ListaUsuario';

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
              <Route path='/Evento' element={<ListaEvento/>}/>
              <Route path='/CrearEvento' element={<FormCrearEvento/>}/>
              <Route path='/Unidad' element={<ListaUnidad/>}/>
              <Route path='/Usuario' element={<ListaUsuario/>}/>
            </Routes>                
          </div>
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
