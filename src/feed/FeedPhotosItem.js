import React from "react"
import Image from "../components/helper/Image";
import style from "./FeedPhotosItem.module.css"


function FeedPhotosItem({photo,setModalPhoto}) {
  function handleClick() {
    setModalPhoto(photo)
  }
  return (
    <li className={style.foto} onClick={handleClick}>
      <Image alt={photo.title} src={photo.src}/>
      <span className={style.visualizaçao}>{photo.acessos}</span>
    </li>
    )
}

export default FeedPhotosItem;