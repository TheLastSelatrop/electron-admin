import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { obtenerProductores } from '../helpers/getAdmin';

const Productores = () => {
    const [productores, setProductores] = useState([])
    useEffect(() => {
        const cargarProductores = async()=>{
          const respuesta = await obtenerProductores();
          console.log(respuesta)
          setProductores(respuesta);
        }
    
        cargarProductores();
      },[] )
  return (
    <div>
        <Titulo>Productores</Titulo>
        <ContainerProductores>
            {productores.length > 0 ? productores.map(({ID, NOMBRE, CORREO})=>(
                <div key={ID}>
                    <p>Nombre</p>
                    <p>{NOMBRE}</p>
                    <p>Correo</p>
                    <p>{CORREO}</p>
                </div>
            )):'no hay'}
      
        </ContainerProductores>
    </div>
  )
}

const Titulo = styled.h2`
    color: black;
    text-align:center;
`;
const ContainerProductores = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content:center;
  margin: 0 auto;
  width: 70%;
  gap: 1rem;
`;
export default Productores