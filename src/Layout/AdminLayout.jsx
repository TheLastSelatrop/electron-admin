import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const AdminLayout = () => {
  return (
    <Div>
        <Navbar>
            <Link to={'/inicio'} style={{textDecoration: 'none'}}>
                <Titulo>Administrador MaipoGrande</Titulo>   
            </Link>
            <hr />
           <Opciones>
                <div>
                    <Tituloopcion>Usuarios</Tituloopcion>
                    <ContainerOpciones>
                        <SubtituloOpcion to={'productores'}>Productores</SubtituloOpcion>
                        <SubtituloOpcion to={'transportistas'}>Transportista</SubtituloOpcion>
                        <SubtituloOpcion to={''}>Consultor</SubtituloOpcion>
                    </ContainerOpciones>
                </div>
                <div>
                    <Tituloopcion>Pedidos</Tituloopcion>
                    <ContainerOpciones>
                        <SubtituloOpcion to={''}>Subastas</SubtituloOpcion>
                        <SubtituloOpcion to={''}>Pedidos</SubtituloOpcion>
                    </ContainerOpciones>
                </div>
                <div>
                    <Tituloopcion>Contratos</Tituloopcion>
                    <ContainerOpciones>
                        <SubtituloOpcion to={''}>Productores</SubtituloOpcion>
                        <SubtituloOpcion to={''}>Transportistas</SubtituloOpcion>
                    </ContainerOpciones>
                </div>
                <div>
                    <Tituloopcion>Graficas</Tituloopcion>
                    <ContainerOpciones>
                        <SubtituloOpcion to={''}>Ventas</SubtituloOpcion>
                        <SubtituloOpcion to={''}>Informes</SubtituloOpcion>
                    </ContainerOpciones>
                </div>
           </Opciones>
        </Navbar>
        <Container>
            <Outlet/>
        </Container>
    </Div>
  )
}

const SubtituloOpcion = styled(Link)`
  cursor: pointer;  
  text-decoration: none;
  color: white;
`;

const ContainerOpciones = styled.div`
    margin-left: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Tituloopcion = styled.h3`
    color: white;
    font-weight: 500;
    background-color: #424242;
    width: 80%;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    /* text-decoration: underline; */
`

const Opciones = styled.nav`
  margin-top: 4rem;  
  padding-left: 2rem;
`;

const Titulo = styled.h2`
    color: white;
`;

const Navbar = styled.aside`
    padding: 10px 10px 10px 10px;
    background-color: #222A2D;
    min-height: 100vh;
    width: 18% ;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;  
  padding-top: 1rem;
`;

const Div = styled.div`
    display: flex;
`
export default AdminLayout