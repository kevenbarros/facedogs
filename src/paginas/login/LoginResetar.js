import React from "react"
import Input from "../forms/Input"
import Botao from "../forms/Botao"
import useForm from "../../hooks/useForm"
import useFetch from "../../hooks/useFetch"


function LoginResetar() {
  const [login,setLogin] = React.useState('')
  const [key,setKey]= React.useState('')
  const password = useForm()

  React.useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key){
      setKey(key)
      setLogin(login)
    }
  },[])
  return (
    <div>
      teste
      {login}
      {key}
      <form >
        <Input label='nova senha' type='password' name='password'/>
        <Botao>Resetar</Botao>
      </form>
    </div>
    )
}

export default LoginResetar;