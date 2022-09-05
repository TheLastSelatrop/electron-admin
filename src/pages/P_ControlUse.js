import React, { Component, useState, useEffect, useRef } from "react";
import Background from "../assets/DifCol.png"


const UserControlPage = () => {
    return (
        <div>
            
            <div class="login-form card" id="LoginCardBox">
                
                <svg class="bd-placeholder-img" id="HeadLoginCard">
                    <rect width="100%" height="100%" fill="#1e40ae"></rect>
                    <text x="14%" y="65%" fill="#dee2e6" id="HeadLoginInfo">Inicio Clientes</text>
                </svg>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico">
                            </input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label"></label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Clave">
                            </input>
                        </div>
    
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <a href="#">
                                <button type="button" class="Gen0 btn btn-primary">Ingresar</button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );    
}
 
export default UserControlPage;
