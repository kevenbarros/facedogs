import React from "react"
import style from "./FeedModal.module.css"
import useFetch from "../hooks/useFetch"
import { PHOTO_GET } from "../api"
import Error from "../components/Erros/Error"
import Loading from "../components/helper/Loading"
import PhotoContent from "../components/Photo/PhotoContent"

function FeedModal({photo,setModalPhoto}) {
  const {data,error,loading,request} = useFetch()
  React.useEffect(()=>{
    const {url, options} = PHOTO_GET(photo.id)
    request(url,options)
  },[photo,request])
  function handleOutSideClick(event) {
    if(event.target === event.currentTarget){
      setModalPhoto(null)
    }
  }
  return (
    
    <div className={style.modal} onClick={handleOutSideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
      
    </div>
    )
}

export default FeedModal;