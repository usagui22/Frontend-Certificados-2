import { Formik,Form } from "formik";
import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";

import GoogleLogin from "react-google-login";


const IngresarUsuario=()=>{
    const [loginData,setLoginData]=useState(
        localStorage.getItem('loginData')?
        JSON.parse(localStorage.getItem('loginData')):null
    );

    const handleLogin=async (googleData)=>{
        console.log(googleData);
    }
    const handleFailure=(result)=>{
        alert(result);
    }
    const handleLogout=()=>{
        localStorage.removeItem('loginData');
        setLoginData(null);
    }

    // const authHandle=(err, data)=>{
    //     console.log(err, data);
    // }

    return(
        <>
        <div>
            <h3>
                INICIO SESION
            </h3>
        </div>
        <Formik>
            <Form>
                <FieldContent
                    label="Usuario"
                    type="text"
                    name="nombre_usuario"
                />
                <FieldContent
                    label="Contraseña"
                    type="text"
                    name="password_usuario"
                />
                <Button>Ingresar</Button>
                <br/>
                <ButtonGroup className="pt-3">
                    {
                        loginData?(
                            <div>
                                <h3>You Logged In</h3>
                                <Button onClick={handleLogout}></Button>
                            </div>
                        ):
                        <GoogleLogin
                        clientId={process.env.REACT_GOOGLE_CLIENT_ID}                                
                        onSuccess={handleLogin}
                        onFailure={handleFailure}
                        buttonText="Login With Google"
                        cookiePolicy="single_host_origin"
                        />
                    }
                        <Button                             
                        >
                            {/* <MicrosoftLogin/> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-microsoft" viewBox="0 0 16 16">
                            <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"/>
                            </svg>  
                            
                            Login With Microsoft                      
                        </Button>                            
                   
                    <br/>

                    
                </ButtonGroup>
            </Form>
        </Formik>
        </>
    );
}

export default IngresarUsuario;