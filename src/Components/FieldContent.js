import { useField } from "formik";
import React from "react";
import { FormControl as Input, FormGroup, FormLabel as Label} from "react-bootstrap";


 const FieldContent=({label,...props})=>{    
    const [field, meta]=useField(props);
    
    return(
        <div className=" p-1">
            <Label htmlFor={props.id||props.name}
            //  className="form-label"
             >{label} :</Label>
            <FormGroup>
                <Input                                       
                    className="w-75"
                    autoComplete="off"
                    {...field}
                    {...props}
                />                
            </FormGroup>
            {meta.touched && meta.error?(
            <div 
            className="error"
            >
                {meta.error}</div>):null}
        </div>
    );
}



export default FieldContent;