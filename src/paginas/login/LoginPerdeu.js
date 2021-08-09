import React from "react"
import Input from "../forms/Input"
import Botao from "../forms/Botao"
import useForm from "../../hooks/useForm"
import useFetch from "../../hooks/useFetch"
import { PASSWORD_LOST } from "../../api"
import Error from "../../components/Erros/Error"
import Head from "../../components/helper/Head"
function LoginPerdeu() {
  const login = useForm()
  const {data ,loading,error,request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      
    }
  }

 
    
  
  return (
    <section>
      <Head title="Recuperar " description="home do site fecedogs"/>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Botao disabled>Enviando...</Botao>
          ) : (
            <Botao>Enviar Email</Botao>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
    )
}

export default LoginPerdeu;