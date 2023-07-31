import React from 'react'

function Header() {
  return (
    <header>
        <div>
            <svg></svg>
            <a href='/'>Metas App</a>
        </div>
        <nav className='flex'>
        <a href='/perfil'> Perfil </a>
        </nav>
    </header>
  )
}

export default Header