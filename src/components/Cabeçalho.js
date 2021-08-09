import React from "react"
import { Link } from "react-router-dom"
import style from "./Cabeçalho.module.css"
//img
import { ReactComponent as Dogs} from "../Assets/dogs.svg"
//context
import {UserContext} from "../UserContext"
function Cabeçalho() {
  const {data ,userLogout} = React.useContext(UserContext)
  
  return (
    <header className={style.header}>
      
      <nav className={`${style.nav} container`}>
        <Link to="/" aria-label="dogs - home" className={style.logo}><Dogs/></Link>
        {data ?
        <Link to="/conta" className={style.login}  >
          {data.nome}
        </Link> 
        : 
        <Link to="/login" className={style.login} >
          Login / Cadastrar
        </Link>}
        
      </nav>
    </header>
    )
}

export default Cabeçalho;
