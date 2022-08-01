import { Formik,Form } from "formik";
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import FieldContent from "../../Components/FieldContent";

const IngresarUsuario=()=>{
    return(
        <>
        <div>
            <h3>
                INICIAR SESION
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
                    <Button>
                        INGRESAR CON GOOGLE

                    </Button>
                    <Button>
                        INGRESAR CON CUENTA MICROSOFT
                        
                    </Button>
                </ButtonGroup>
            </Form>
        </Formik>
        </>
    );
}

export default IngresarUsuario;