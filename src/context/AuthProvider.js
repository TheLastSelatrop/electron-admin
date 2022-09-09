import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clienteAxios from "../axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const autenticarAdmin = async () => {
            const token = localStorage.getItem('token')
            if(!token){

            }


        }

    })
    

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;