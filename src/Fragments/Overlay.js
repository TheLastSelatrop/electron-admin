import React, { Component } from "react";
import image from "./assets/logo192.png";


const NavOverLay = () => {
    return  (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a href="#">
                            <img src={image} id="IcoNav"></img>
                        </a>
                        <a class="nav-link" href="#"><i class="fa fa-terminal fa-w-20"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavOverLay;


