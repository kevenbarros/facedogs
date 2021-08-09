import React from "react"
import { Link } from "react-router-dom"
import Botao from "../forms/Botao"
import Input from "../forms/Input"
import Error from "../../components/Erros/Error"
import doglogin from "../../Assets/login.jpg"
import useForm from "../../hooks/useForm"
import { TOKEN_POST , USER_GET} from "../../api"

import {UserContext} from "../../UserContext"
import style from "./loginForm.module.css"
import styleBotao from "../forms/Botao.module.css"
import '../../app.css'

function LoginForm() {
  const username = useForm()
  const password = useForm()
  
  const context = React.useContext(UserContext)
  

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()){
      context.userLogin(username.value,password.value)
    }
  }
  return (
    <section className='animeLeft'>
      <div >
      </div>
      <form className={style.forms} onSubmit={handleSubmit}>
        <h1 className='title'>Login</h1>
        <Input label="usuario" place="user" type="text" name="username" {...username}/>
        <Input label="senha" place="senha" type="password" name="password" {...password}/>
        {context.loading ? <Botao disabled>carregando...</Botao> : <Botao>entrar</Botao>}
        
        <Error error={context.error}/>
        
       
      </form>
      <Link className={style.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>ainda nao possui conta ? cadastre-se no site</p>
        <Link to="/login/criar" className={styleBotao.botao}> cadastro </Link>
      </div>
      
    </section>
    )
}

export default LoginForm;