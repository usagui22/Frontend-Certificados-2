import { createContext, useCallback, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Auth_App='My_auth_app';
export const AuthContext =createContext();
 
export function AuthContextProvider({children}){
    const [isAuthenticated, setIsAuthenticated]=useState(window.localStorage.getItem(Auth_App)?? false);   

    const Login =useCallback(function(){
            window.localStorage.setItem(Auth_App, true);
            setIsAuthenticated(true);
        },[]);
    const Logout =useCallback(function(){
        window.localStorage.removeItem(Auth_App, true);
        setIsAuthenticated(false);
        },[]);
    
    

    const value = useMemo(()=>({
        Login, 
        Logout, 
        isAuthenticated
    }),
    [Login, Logout, isAuthenticated])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
    children: propTypes.object
};