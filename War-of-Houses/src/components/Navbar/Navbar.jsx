import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/img/logo_howards.png';
import { AuthContext } from '../../auth/AuthContext'
import jwt_decode from "jwt-decode";

function Navbar() {
  const { user_id } = useContext(AuthContext);
//   const {token} = useContext(AuthContext);
//   let user_id = null;
//   if (token !== null) {
//     user_id = jwt_decode(token).sub;
//   }
  

  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-display">
                <img src={Logo} alt="logo-image" className="logo-image" />
                <span className="name title"> War of Houses </span>
            </NavLink>
            <ul className="navbar-links-container">
                
                <li className="navbar-element">
                    <NavLink to="/" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Inicio
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="login" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Log In
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="signup" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Sign Up
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="main-page" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                         Pagina Principal
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="instruction1" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Instrucciones
                    </NavLink>
                </li>
                {user_id && (
                    <li className="navbar-element">
                    <NavLink to="partidas" className={({ isActive }) => isActive ? "navbar-link name" : "navbar-link"}>
                        Partidas
                    </NavLink>
                    </li>
                )}
                {user_id && (
                    <li className="navbar-element">
                    <NavLink to="logout" className={({ isActive }) => isActive ? "navbar-link name" : "navbar-link"}>
                        Cerrar Sesión
                    </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;