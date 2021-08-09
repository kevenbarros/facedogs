import React from "react"
import style from "./Rodape.module.css"
import {ReactComponent as DogsFooter} from "../Assets/dogs-footer.svg"
function Rodape() {
  return (
    <footer className={style.footer}>
      <DogsFooter/>
      <p>Dogs alguns direitos reservados.</p>
    </footer>
    )
}

export default Rodape;
