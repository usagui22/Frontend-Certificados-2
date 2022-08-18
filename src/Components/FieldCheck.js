import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const FieldCheck =()=>{
    return(
        <>
        <FormGroup>
        <FormLabel htmlFor="name">{content}</FormLabel>
        <FormControl
            type="radio"
            id={id_sel}
            name={id_sel}
            
        />
        </FormGroup>
        </>
    );
}
export default {FieldCheck};