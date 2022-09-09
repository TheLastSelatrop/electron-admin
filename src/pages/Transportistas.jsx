import React, { useEffect, useState } from 'react'
import { faCircleXmark, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { obtenerTransportistas } from '../helpers/getAdmin';
// import { obtenerProductores } from '../helpers/getAdmin';

const Transportistas = () => {
    const [transportistas, setTransportistas] = useState([])
    useEffect(() => {
        const cargartransportistas = async()=>{
          const respuesta = await obtenerTransportistas();
          console.log(respuesta)
          setTransportistas(respuesta);
        }
    
        cargartransportistas();
      },[] )
  return (
    <div>
        <Titulo>Transportistas</Titulo>
        <ContainerTransportistas>
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
              {transportistas.length > 0 ? transportistas.map(({ID, NOMBRE, CORREO})=>(
                  <Tr key={ID}>
                      <td>{NOMBRE}</td>
                      <td>{CORREO}</td>
                      <Icono>
                        <FontAwesomeIcon style={{color: 'blue'}} icon={faPenToSquare} />
                      </Icono>
                      <Icono>
                        <FontAwesomeIcon style={{color: 'red'}} icon={faTrash}/>
                      </Icono>

                  </Tr>
              )):'no hay'}
              {/* </tr> */}
          </tbody>
          </Table>
        </ContainerTransportistas>
    </div>
  )
}

const Titulo = styled.h2`
    color: black;
    text-align:center;
`;
const ContainerTransportistas = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content:center;
  margin: 0 auto;
  width: 70%;
  gap: 1rem;
`;
const Thead = styled.thead`
  /* background-color: red; */
`;

const Tr = styled.tr`
  text-align: left;
  

`;
const Icono = styled.td`
  text-align: center;
  cursor: pointer;

`;

const Table = styled.table`
  width: 120%;
  border: 1px gray  solid;
  padding: 5px 15px 5px 15px;
  border-radius: 10px;
`;
export default Transportistas