import React from "react";
import { Container, Navbar, Nav, Figure} from "react-bootstrap";
import { Link } from "react-router-dom";
import imagen from '../Assets/Images/marcaHorizontal-02.png';

const Logo=()=>{
    return (
        <Container className="align-baseline">
            <Figure >
                <Figure.Image                                        
                    width={90}
                    className="bg-light d-inline h-50"
                    src={imagen}
                />                
                <Link className='nav-brand text text-white' 
                to="/"
                >Certificados En Linea</Link>                                
            </Figure>            
        </Container>
      )
}

 const Navigator =()=>{
    return(
        <div>
        
        <Navbar className='navbar navbar-expand fixed-top ' >
            <Container >                
                <div className="nav-brand text-white">
                <Logo/>                
                </div>

                <Nav className='nav-link ' variant="dark">                    
                    <Link className="nav-link text text-white" to="/IngresarUsuario">Ingresar</Link>                    
                </Nav>

            </Container>
        </Navbar>
        
      </div>
    );
}
export default Navigator;
