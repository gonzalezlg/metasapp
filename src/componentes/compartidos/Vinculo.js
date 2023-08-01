import React from 'react'
import estilos from './Vinculo.module.css';

function Vinculo({Icono,texto, href}) {
  return (
<a href={href} className={estilos.link}>
        <Icono className={estilos.icon}/>
        {texto && <span className={estilos.text}>{texto}</span>}
    </a>
  )
}

export default Vinculo