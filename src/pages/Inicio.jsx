import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import grafico from './img/grafico.jpg'
const Inicio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") == null ) {
      navigate('/')
    }
  })





  return (
    <Container>
        <h1>Inicio</h1>
        <Img src={grafico} alt="" />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Img = styled.img`
    object-fit: contain;
    width: 80%;
`
export default Inicio