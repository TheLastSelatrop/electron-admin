import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clienteAxios from "../axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true)
    const [carrito, setCarrito] = useState([])
    const navigate = useNavigate()
    const {pathname} = useLocation();
    const [config, setConfig] = useState({})

    useEffect(()=>{
        const autenticarAdmin = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                setCargando(false)
                return
            }
            
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await clienteAxios('/usuario/perfil', config)
                setAuth(data)
                setConfig(config)

                // console.log(data.ID_ROL)
                const local = JSON.parse(localStorage.getItem('carrito'))
                // console.log(local.length > 0)
                // console.log(auth.ID_ROL)
                if(local){
                    setCarrito(local); // no tocar

                }

                if(pathname !== '/' && auth.ID_ROL === 2 && local.length > 0){
                    setCarrito(local);
                    return
                }

                if(pathname === '/'){

                    if(auth.ID_ROL === 2){
                        setCarrito(local);

                        navigate('/inicio')
                        return
                    }
                }
                
            } catch (error) {
                console.log(error)
                setAuth({})
                
            } finally{
                setCargando(false)

            }
        }
        autenticarAdmin();

    },[navigate,setCarrito,pathname,auth.ID_ROL])
    

    return (
        <AuthContext.Provider value={{setAuth, auth, cargando, carrito, setCarrito, config}}> 
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;