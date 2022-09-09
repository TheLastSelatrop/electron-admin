import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled from 'styled-components';
import { editarClientes, borrarClientes} from '../helpers/getAdmin';

export const CardClientes = ({cliente}) => {
    const {ID,CORREO,NOMBRE} = cliente;
    const [alerta, setAlerta] = useState({msg:'', error:false})
    const [Form, setForm] = useState({correo:CORREO, nombre:NOMBRE })

    const onChange = ({target}) =>{
      setForm({
        ...Form,
        [target.name] : target.value
      });
    }

    const onClick = () => {
        console.log(ID)
        handleEditarCliente()
    }

    
    const RemoveCliente = async(ClienteID)=>{
        await borrarClientes(ClienteID)

        window.location.reload();
      }

    const handleEditarCliente = async(e) =>{
    //e.preventDefault()
        if([CORREO, NOMBRE].includes('')){
            setAlerta({error: true, msg:'Todos los campos son obligatorios'});
            setTimeout(() => {
            setAlerta({error: false, msg:''})
            }, 2000);
            return
        }
        try {
            const respuesta = await editarClientes(ID,Form);
            setAlerta({error: false, msg:`${respuesta.msg}`})
            setForm({correo: '', nombre: ''})
            setTimeout(() => {
            setAlerta({error: false, msg:''})
            }, 2000);
        } catch (error) {
            setAlerta({error: true, msg:`${error.response.data.msg}`})
            setTimeout(() => {
            setAlerta({error: false, msg:''})
            }, 2000);
        }
    }


  return (
        <Tr key={ID}>
                    <td>
                      <input value={Form.nombre} onChange={onChange} name="nombre"/>
                    </td>
                    <td>
                        <input value={Form.correo} onChange={onChange} name="correo"/>
                    </td>
                    <button id={ID} onClick={onClick}>
                      <Icono >
                        <FontAwesomeIcon style={{color: 'blue'}} icon={faPenToSquare} />
                      </Icono>
                    </button>
                    <button id={ID} onClick={()=>{RemoveCliente(ID)}}>
                      <Icono>
                        <FontAwesomeIcon style={{color: 'red'}} icon={faTrash}/>
                      </Icono>
                    </button>
                </Tr>
    
  )
}


const Alerta = styled.p`
  text-align: center;
  color:  white;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 20px;
  text-transform: capitalize;
  background-color: ${props => props.error ? 'red' : 'blue'}

`;








const Icono = styled.td`
  text-align: center;
  cursor: pointer;

`;


const Tr = styled.tr`
  text-align: left;
  

`;

