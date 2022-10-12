import React, { useState } from "react";
import { API } from "../Services/Conexion";
import logo from "../Assets/Images/logoUMSS.png";
import { QRCodeCanvas as QRCode  } from "qrcode.react";

const QR=(props)=>{
    
    const {fecha_validar}=props;
    
    const [llave,setLlave]=useState();

    const validador=(fecha_validar)=>{
        let ruta="documento/validar-imagen";
        const dataL=API.get(ruta,fecha_validar);
        setLlave(dataL);
    }

    return(
        <>
            <div>
                <QRCode
                    name="qr-validado"
                    size={150}
                    value={llave}
                    bgColor="white"
                    fgColor="black"
                    level="L"
                    imageSettings={{
                        src:logo,
                        excavate:true,
                        width: 50 *0.5,
                        heigth: 75 *0.5
                    }}
                />
            </div>

        </>
    );
}
export default QR;