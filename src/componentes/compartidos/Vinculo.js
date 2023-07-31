import React from 'react'
import './Vinculo.css';

function Vinculo({children,texto, href}) {
  return (
    <a href={href} className='link'>
        {children}
        <span>{texto}</span>
    </a>
  )
}

export default Vinculo