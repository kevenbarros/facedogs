import React from "react"
import style from "./Botao.module.css"


function Botao({children,...props}) {
  return (
    <button {...props}className={style.botao}>
      {children}
    </button>
    )
}

export default Botao;