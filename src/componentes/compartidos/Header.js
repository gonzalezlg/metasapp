import estilos from './Header.module.css';
import React from 'react'
import {ReactComponent as LogoSVG} from '../../img/logo.svg'
import {ReactComponent as PerfilSVG} from '../../img/perfil.svg'
import Vinculo from './Vinculo';

function Header() {
  return (
    <header className={estilos.encabezado}>
        <div className={estilos.contenedor}>
            <LogoSVG className='logo' />
            <a href='/' className='titulo'>Metas App</a>
        </div>
        <nav className='icon-user'>
        <Vinculo href='/perfil' Icono={PerfilSVG}></Vinculo>
        </nav>
    </header>
  )
}

export default Header