import React from "react"
import UserNavHeader from "./UserNavHeader"
import style from "./UserHeader.module.css"
import { useLocation } from "react-router-dom"



function UserHeader() {
  const [title , setTitle] = React.useState('Titulo')
  const location = useLocation()
  React.useEffect(()=>{
    if('/conta/estatisticas' === location.pathname)setTitle('Estatísticas')
    if('/conta' === location.pathname)setTitle('Minha Conta')
    if('/conta/postar' === location.pathname)setTitle('Poste sua foto')
    
  },[location])
  return (
    <header className={style.header}>
      <h1 className='title'>{title}</h1>
      <UserNavHeader/>
    </header>
    )
}

export default UserHeader;