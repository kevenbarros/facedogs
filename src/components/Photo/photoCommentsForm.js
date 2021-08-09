import React from "react"
import style from "./PhotoCommentsForms.module.css"
import { COMMENT_POST } from "../../api"
import {ReactComponent as Enviar} from "../../Assets/enviar.svg"
import useFetch from "../../hooks/useFetch"
import Error from "../Erros/Error"


function PhotoCommentsForm({id,setComments}) {
  const [comment , setComment] = React.useState('')
  const {request,error} = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    const {url ,options} = COMMENT_POST(id,{comment})
    const {response,json} = await request(url,options)
    if(response.ok){
      setComment('')
      setComments((comments)=> [...comments,json])
    }
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea id = "comment" name="comment"
      className={style.textarea}
      placeholder="comente.."
      value={comment}
       onChange={({target})=> setComment(target.value)}/>
      <button className={style.button}><Enviar/></button>
      <Error error={error}/>
    </form>
    )
}

export default PhotoCommentsForm;