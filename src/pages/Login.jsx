import { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/AuthProvider";
import { login } from "../helpers/getAdmin";
import useAuth from "../hooks/useAuth";
import fondo from './img/fondo.jpg';



const Login = () => {
    const { setAuth } = useAuth();
    const [formValues, setFormValues] = useState({correo: '', password: ''})
    const {correo, password} = formValues;

    const navigate = useNavigate();
    const onChange = ({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }


    const onSubmit = async(e) =>{
        e.preventDefault();
       try {
        const respuesta = await login(formValues);
        console.log(respuesta)
        localStorage.setItem("token", respuesta.token);
        setAuth(respuesta);
        navigate('/inicio')
       } catch (error) {
        console.log(error.response.data.msg)
        //setAlerta(error.response.data.msg);
        
       }
        
        
        //if(respuesta.msg){
        //  console.log(respuesta.msg)  
          //
        //}
    }

  return (
    <Fondo>
        <Div onSubmit={onSubmit}>
            <Titulo>Inicio de Sesion</Titulo>
            <div>
                <Input name="correo" type="text"  value={correo} onChange={onChange}  placeholder="correo" />
            </div>
            <div>
                <Input name="password" type="password" value={password} onChange={onChange}  placeholder="contraseña" />
            </div>
            <Button type="submit">Iniciar</Button>
        </Div>
    </Fondo>
  )
}

const Input = styled.input`
  width: 17rem;  
  height: 3rem;
  border-radius: 10px;
  border: none;
  background-color: #f1f1f1;
  font-size: 1rem;
`;

const Titulo = styled.p`
  font-size: 2rem;  
`;

const Button =  styled.button`
    width: 50%;
    height: 15%;
    background-color: blue;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-size: 1rem;
    margin-top: 2rem;
` ;
const Div = styled.form`
     background-color: white;
     margin-top: 12rem;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     padding: 10px 10px 10px 10px;
     height: 20rem;
     width: 20rem;
     border-radius: 10px;
`;

const Fondo = styled.div`
  background-image: url(${fondo});
  object-fit: cover;
  min-height:100vh;
  box-sizing: content-box;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export default Login