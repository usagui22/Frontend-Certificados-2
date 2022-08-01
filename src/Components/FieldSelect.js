import React from "react";
import Select from "react-select";
import { FormGroup, FormLabel as Label  } from "react-bootstrap";
import { useField } from "formik";

const FieldSelect=({label,opciones,...props})=>{
    const [field, meta]=useField(props);
    return(
        <div>
            <Label htmlFor={props.id||props.name}>
                {label} : </Label>
            <FormGroup>
            <Select 
                className="w-75"
                type="select"
                placeholder="Seleccionar..."
                options={opciones}
                {...field} {...props}             
            />
            </FormGroup>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

export default FieldSelect;