
import React from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../UserContext"
import Image from "../helper/Image"
import PhotoComments from "./PhotoComments"
import style from "./PhotoContent.module.css"
import PhotoDelete from "./PhotoDelete"

function PhotoContent({data}) {
  const user = React.useContext(UserContext)
  const {photo,comments} = data
  
  return (
    <div className={style.photo}>
      <div className={style.img}>
        <Image alt={photo.title} src={photo.src}/>
        
      </div>
      <div className={style.detalhe}>
          <div>
            <p className={style.visuEauthor}>
              {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id}/> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
              
              <span className={style.visualizaçao}>{photo.acessos}</span>
    
              
            </p>
            <h1 className='title'>{photo.title}</h1>
            <ul className={style.atributos}>
              <li>{photo.peso}Kg</li>
              <li>{photo.idade} ano(s)</li>

            </ul>
          </div>
      </div>
              <PhotoComments id={photo.id} comments={comments}/>
    </div>
    )
}

export default PhotoContent;