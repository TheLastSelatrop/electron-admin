import React, { useEffect, useState } from 'react'
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
            {transportistas.length > 0 ? transportistas.map(({ID, NOMBRE, CORREO})=>(
                <div key={ID}>
                    <p>Nombre</p>
                    <p>{NOMBRE}</p>
                    <p>Correo</p>
                    <p>{CORREO}</p>
                </div>
            )):'no hay'}
      
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
export default Transportistas