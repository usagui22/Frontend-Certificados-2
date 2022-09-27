import React from "react";
import { FormGroup, FormLabel as Label, FormSelect  } from "react-bootstrap";
import { useField } from "formik";

const FieldSelect=({label,...props})=>{
    const [field, meta]=useField(props);

    return(
        <div>
            <Label htmlFor={props.id||props.name}>
                {label} : </Label>
            <FormGroup>
            <FormSelect
                
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