import React from "react"
import { PHOTO_DELETE } from "../../api"
import style from "./PhotoDelete.module.css"
import useFetch from "../../hooks/useFetch"


function PhotoCommentsForm({id}) {
  const {request,loading} = useFetch()
  async function handleClick() {
    const confirm = window.confirm("tem certeza que deseja deletar ?")
    if(confirm){
      const {url ,options} = PHOTO_DELETE(id)
    const {response} = await request(url,options)
    if(response.ok){
      window.location.reload()
    }
    }
    
  }
 
  return (
    <div>
      {loading ? <button onClick={handleClick} disabled className={style.delete}>deletando</button> : <button onClick={handleClick} className={style.delete}>Deletar</button>}
      
    </div>
    )
}

export default PhotoCommentsForm;