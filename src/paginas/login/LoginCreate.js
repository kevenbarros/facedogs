import React from "react"
import { USER_POST } from "../../api"
import Error from "../../components/Erros/Error"
import Head from "../../components/helper/Head"
import useFetch from "../../hooks/useFetch"
import useForm from "../../hooks/useForm"
import { UserContext } from "../../UserContext"
import Botao from "../forms/Botao"
import Input from "../forms/Input"
function LoginCreate() {
  const username = useForm()
  const password = useForm()
  const email = useForm('email')

  const {userLogin} = React.useContext(UserContext)
  const {loading,error,request} = useFetch()
  async function handleSubmit(event) {
    event.preventDefault();
    const {url,options} = USER_POST({
      username:username.value,
      email:email.value,
      password:password.value,
    })
    const {response} = await request(url, options)
    if(response.ok){
      userLogin(username.value,password.value)
    }
    
  }
  return (
    <section className='animeLeft'>
      <Head title="Criar " description="home do site fecedogs"/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
      <Input label="Usuario" place="user" type="text" name="username" {...username} />
      <Input label="Email" place="email" type="email" name="email" {...email}/>
      <Input label="senha" place="senha" type="password" name="senha" {...password}/>
      {loading ?  <Botao disabled>cadastrando...</Botao> : <Botao>entrar</Botao>}
      {error ? <Error error='email ou usuario já cadastrado'/>:''}
      
      </form>
    </section>
    )
}

export default LoginCreate;