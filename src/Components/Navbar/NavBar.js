import React from 'react';
import './NavBarStyle.css';

const NavBar = () => {
    return (
        <div className='container-nav-principal'>
            <nav className='container-nav'>
                <ul>
                    <li> <a href=" #"> Inicio</a> </li>
                    <li> <a href=" #"> Cortes y Peinados</a> </li>
                    <li><a href="#">Acicalado Intesivo</a> </li>
                    <li><a href="#">Recuperacion de Pelaje</a> </li>
                    <li> <a href="#"> Colorimetria</a> </li>
                    <li><a href="#">Control Antiparasitario</a> </li>
                    <li><a href=""> VideoBlog</a> </li>
                    <li><a href="">Contactanos </a> </li>
                </ul>


            </nav>

        </div>
    )
}

export default NavBar