import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/logo192.png";



const NavOverLay = () => {
    return  (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a href="#">
                            <img src={image} id="IcoNav"></img>
                        </a>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-terminal fa-w-20"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Panel Principal</a>
                            <NavLink to='/UserControl' className={'dropdown-item'}>User Control</NavLink>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Cerrar Sesion</a>
                            <NavLink to='/Login' className={'dropdown-item'}>Login</NavLink>
                            <NavLink to='/' className={'dropdown-item'}>Blank</NavLink>
                            
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavOverLay;


