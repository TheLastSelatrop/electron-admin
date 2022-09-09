import { faCircleXmark, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { CardClientes } from '../components/CardClientes';
import { agregarProductor, obtenerClientes, editarClientes, borrarClientes} from '../helpers/getAdmin';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [activeModal, setActiveModal] = useState(false);
    const [alerta, setAlerta] = useState({msg:'', error:false})
    const [formValues, setFormValues] = useState({nombre: '', correo: ''});
    const {nombre, correo } = formValues;
    useEffect(() => {
        const cargarClientes = async()=>{
          const respuesta = await obtenerClientes();
          console.log(respuesta)
          setClientes(respuesta);
        }
    
        cargarClientes();
      },[] )

      const onChange = ({target}) =>{
        setFormValues({
          ...formValues,
          [target.name] : target.value
        });
      }


      const activateModal = () =>{
        setActiveModal(true);
      }

      const RemoveCliente = async(ClienteID)=>{
        await borrarClientes(ClienteID)

        window.location.reload();
      }

      const closeModal = () =>{
        setActiveModal(false)
        window.location.reload();
      }

      const handleAgregarProductor = async(e) =>{
        e.preventDefault();
        if([correo, nombre].includes('')){
          setAlerta({error: true, msg:'Todos los campos son obligatorios'});
          setTimeout(() => {
            setAlerta({error: false, msg:''})
          }, 2000);
          return
        }
        try {
          const respuesta = await agregarProductor(formValues);
          setAlerta({error: false, msg:`${respuesta.msg}`})
          setFormValues({correo: '', nombre: ''})
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
      
      const handleEditarCliente = async(e) =>{
        e.preventDefault();
        if([correo, nombre].includes('')){
          setAlerta({error: true, msg:'Todos los campos son obligatorios'});
          setTimeout(() => {
            setAlerta({error: false, msg:''})
          }, 2000);
          return
        }
        try {
          const respuesta = await editarClientes(formValues);
          setAlerta({error: false, msg:`${respuesta.msg}`})
          setFormValues({correo: '', nombre: ''})
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
    <Div>
        <Titulo>Clientes</Titulo>

        <AgregarContainer>
          <BotonAdd onClick={activateModal}> 
            <FontAwesomeIcon icon={faUserPlus}/>
            Crear Clientes
            </BotonAdd>
        </AgregarContainer>
        {/* -------------------FORM------------------------ */}
        {activeModal && 
            <ContainerForm>
              <TituloForm>
                  <FontAwesomeIcon onClick={closeModal} style={{color: 'red', fontSize: '20px', cursor: 'pointer'}}  icon={faCircleXmark}/>
                  <Titulo>Complete el Formulario</Titulo>
              </TituloForm>
              {
                alerta.msg.length > 0 && <Alerta error={alerta.error} >{alerta.msg}</Alerta> 
              }
              <Form onSubmit={handleAgregarProductor}>
                  <CampoForm>
                    <label htmlFor="nombre">Nombre :</label>
                    <InputForm name='nombre' onChange={onChange} type="text" style={{marginLeft: '1.5rem'}} placeholder='Nombre' value={nombre} />
                  </CampoForm>
                  <CampoForm>
                    <label htmlFor="correo">Correo :</label>
                    <InputForm name="correo" onChange={onChange} type="text" style={{marginLeft: '1.7rem'}} placeholder='ej: correo@correo.com' value={correo} />
                  </CampoForm>
                  <BotonAdd type='submit'>Agregar Productor</BotonAdd>
              </Form>
            </ContainerForm>
        }
        {/* -------------------------------------------- */}

        <Table>
          <Thead>
            <Tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </Tr>
          </Thead>
          <tbody>
            {/* <tr> */}
            {clientes.length > 0 ? clientes.map((cliente)=>(
                <CardClientes cliente={cliente} onChange={onChange} />
            )):'no hay'}
            {/* </tr> */}
        </tbody>
        </Table>
    </Div>
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
const InputForm = styled.input`
  height: 2rem;
  border-radius: 5px;
  border: 1px gray thin;
`;

const CampoForm = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: right;
`;
const TituloForm = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
`;
const ContainerForm = styled.div`
  position: absolute;
  margin-top: 12rem;
  background-color: white;
  border: 1px black solid;
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
`;


const BotonAdd = styled.button`
  background-color:#64BC7C; 
  border: none;
  padding: 10px 15px 10px 15px;
  display: flex;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const AgregarContainer = styled.div`
  margin-bottom: 2rem;
`;

const Icono = styled.td`
  text-align: center;
  cursor: pointer;

`;
const Titulo = styled.h2`
    color: black;
    text-align:center;
`;
const Thead = styled.thead`
  /* background-color: red; */
`;

const Tr = styled.tr`
  text-align: left;
  

`;

const Table = styled.table`
  width: 120%;
  border: 1px gray  solid;
  padding: 5px 15px 5px 15px;
  border-radius: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Clientes