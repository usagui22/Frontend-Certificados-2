import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import fondoUmss from '../assets/imagenes/logoUMSS.png';

 export const QrWithHash =(valor)=>{
    const [llave, setLlave]=useState('');

    const generarQR=()=>{
        setLlave({valor})
    }    
    useEffect(()=>{
        generarQR();
    },[])
    return(
        <>
        <div>
            <QRCode
                id="qr-verificacion"                
                size={150}
                value={llave}
                bgColor="white"
                fgColor="black"                
                level="L"
                imageSettings={{
                    src:fondoUmss,
                    excavate:true,
                    width: 50 *0.5,
                    height: 75 *0.5                 
                }}
                
            />
            <p>{llave}</p>            
        </div>
        </>
    );

}
