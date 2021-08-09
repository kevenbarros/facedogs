import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { UserContext } from "../../UserContext.js";
import LoginCreate from "./LoginCreate.js";
import LoginForm from "./LoginForm.js"
import LoginPerdeu from "./LoginPerdeu.js";
import LoginResetar from "./LoginResetar.js";
import style from "./Login.module.css"
import NotFound from "../../components/NotFound.js";
import Head from "../../components/helper/Head.js";
function Login() {
  const {login} = React.useContext(UserContext)

  if(login === true){ 
    return <Navigate to='/conta' />
  }
  return (
    <section className={style.login}>
      <div className={style.forms}>
      <Head title="Login " description="login do site fecedogs"/>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="criar" element={<LoginCreate/>} />
          <Route path="resetar" element={<LoginResetar/>} />
          <Route path="perdeu" element={<LoginPerdeu/>} />
          <Route path="*" element={<NotFound/>}/> //404
        </Routes>
      </div>
  </section>
    )
}

export default Login;
