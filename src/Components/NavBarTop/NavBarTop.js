
import React from 'react';
import './NavBarTopStyle.css';


const NavBarTop = () => {
  return (

    <div className='Container-superior'>

      <div className="Container-Contacto">

        <i class="bi bi-geo-fill"><a href='https://g.page/RIZOSYCOLITAS?share' target="_blank" rel='noreferrer'>Villa el Salvador- Lima</a></i>
        <i className="bi bi-phone-vibrate"> <a href="tel:926963498" target="_blank" rel='noreferrer'>9269634498</a> </i>
        <i className="bi bi-whatsapp"><a href="https://wa.me/511926963498" target="_blank" rel='noreferrer'>+51 926 963 498</a> </i>
        <i className="bi bi-envelope-paper-fill"><a href='mailto:modacaninasac@gmail.com' target="_blank" rel='noreferrer'>modacaninasac@gmail.com</a></i>

        <div className="Redes">

          <a href="https://wa.me/511926963498" target="_blank" rel='noreferrer'> <i className="bi bi-whatsapp"></i></a>
          <a href="https://www.tiktok.com/@rizosycolitas" target="_blank" rel='noreferrer'><i className="bi bi-tiktok"></i></a>
          <a href="https://www.facebook.com/RIZOSYCOLITAS" target="_blank" rel='noreferrer' ><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/rizosycolitas" target="_blank" rel='noreferrer' ><i className="bi bi-instagram"></i></a>
          <a href="https://g.page/RIZOSYCOLITAS?share" target="_blank" rel='noreferrer'> <i className="bi bi-geo-alt"></i></a>
          <a href="tel:926963498" target="_blank" rel='noreferrer'><i className="bi bi-telephone"></i></a>

        </div>


      </div>

    </div>
  )
}

export default NavBarTop;