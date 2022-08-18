import { Formik,Form } from "formik";
import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";
import MicrosoftLogin from "react-microsoft-login";
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

    const authHandle=(err, data)=>{
        console.log(err, data);
    }

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
                   
                    <br/>
                    <MicrosoftLogin 
                        clientId={process.env.REACT_MICROSOFT_CLIENT_ID}
                        authCallback={authHandle}
                    />
                </ButtonGroup>
            </Form>
        </Formik>
        </>
    );
}

export default IngresarUsuario;