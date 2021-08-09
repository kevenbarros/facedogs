import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { UserContext } from "../UserContext";
import {ReactComponent as Minhasfotos} from "../Assets/feed.svg"
import {ReactComponent as Estatistica} from "../Assets/estatisticas.svg"
import {ReactComponent as Adicionar} from "../Assets/adicionar.svg"
import {ReactComponent as Sair} from "../Assets/sair.svg"

import style from "./UserNavHeader.module.css"
import useMedia from "../hooks/useMedia";



function UserNavHeader() {
  const mobile = useMedia('(max-width:40rem)')
  const {userLogout} = React.useContext(UserContext)
  const [mobileMenu, setMobileMenu] = React.useState(false)
  function handleClick(e) {
    e.preventDefault()
    userLogout()
  }
  const {pathname}=useLocation()
  React.useEffect(()=>{
    setMobileMenu(false)
  },[pathname])
  return (
    <>
    {mobile && <button 
    aria-label="menu" 
    className={`${style.mobileButton} ${mobileMenu && style.mobileButtonActive}`} 
    onClick={()=>setMobileMenu(!mobileMenu)}></button>}
    
    <nav className={`${mobile ? style.navMobile : style.nav} ${mobileMenu && style.navMobileActive}`}>
      <NavLink to="/conta" end activeClassName={style.active}><Minhasfotos/>{mobile && 'minhas fotos' }</NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={style.active} ><Estatistica/>{mobile && 'Estatisticas' }</NavLink>
      <NavLink to="/conta/postar" activeClassName={style.active} ><Adicionar/> {mobile && 'Adicionar fotos' } </NavLink>
      <button onClick={handleClick}> <Sair/>{mobile && 'sair'}</button>
    </nav>
    </>
    )
}

export default UserNavHeader;