import './Header.css';
import React from 'react'
import {ReactComponent as LogoSVG} from '../../img/logo.svg'
import {ReactComponent as PerfilSVG} from '../../img/perfil.svg'

function Header() {
  return (
    <header className='encabezado'>
        <div className='contenedor'>
            <LogoSVG className='logo' />
            <a href='/' className='titulo'>Metas App</a>
        </div>
        <nav className='icon-user'>
            <a href='/perfil' className='link'>
              <PerfilSVG className='icon' />
            </a>
        </nav>
    </header>
  )
}

export default Header