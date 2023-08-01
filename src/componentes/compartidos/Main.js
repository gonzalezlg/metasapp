import React from 'react'
import estilos from './Main.module.css';
import Vinculo from './Vinculo';
import {ReactComponent as ListaSVG} from '../../img/lista.svg';
import {ReactComponent as NuevaSVG} from '../../img/nueva.svg';

function Main({children}) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
       <Vinculo href='/lista' texto='Lista de Metas' Icono={ListaSVG}></Vinculo>
       <Vinculo href='/crear' texto='Nueva Meta' Icono={NuevaSVG}></Vinculo>
      </aside>

      <main className={estilos.main}>
        {children}
      </main>
      
    </div>
  )
}

export default Main