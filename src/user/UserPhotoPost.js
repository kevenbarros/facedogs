import React from "react"
import style from "./UserPhotoPost.module.css"
import Input from "../paginas/forms/Input"
import Botao from "../paginas/forms/Botao"
import useForm from "../hooks/useForm"
import useFetch from "../hooks/useFetch"
import { PHOTO_POST } from "../api"
import Error from "../components/Erros/Error"
import { useNavigate } from "react-router-dom"
import Head from "../components/helper/Head"

function UserPhotoPost() {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img , setImg] = React.useState({})
  const {data,error,loading,request} = useFetch()
  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const {url,options} = PHOTO_POST(formData, token)
    request(url, options)
  }
  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],

    })
  }
  React.useEffect(()=>{
    if(data)navigate('/conta')
  },[data, navigate])


  return (
    <section className={`${style.photoPost} animeLeft`}>
      <Head title="Postar " description="home do site fecedogs"/>
      <form onSubmit={handleSubmit}>
      <Input label="nome" place="" type="text" name="nome"  {...nome}/>
      <Input label="peso" place="" type="number" name="peso" {...peso} />
      <Input label="idade" place="" type="number" name="idade"  {...idade}/>
      <input type="file" name="img" className={style.file} id="img" onChange={handleImgChange}/>
      {loading ? <Botao disabled>Enviando...</Botao>:<Botao>Enviar</Botao>}
      <Error error={error}/>
      </form>
      <div>
        {img.preview && <div className={style.preview} style={{backgroundImage:`url(${img.preview})`}}></div>}
      </div>
    </section>
    )
}

export default UserPhotoPost;