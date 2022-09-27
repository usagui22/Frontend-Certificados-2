import React from "react";
import {FormCheck, FormGroup } from "react-bootstrap";

const FieldCheck =(props)=>{
    const {id_sel, funcion, cambio}=props;
    return(
        <Form>

        <FormGroup>
        {/* <FormLabel htmlFor="name">{content}</FormLabel> */}
        <FormCheck
            className="form-check-input"
            type="radio"
            id={id_sel}            
            checked={funcion}
            onChange={cambio}
        />
        </FormGroup>

        </Form>
    );
}
export default {FieldCheck};