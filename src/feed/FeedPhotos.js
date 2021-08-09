import React from "react"
import FeedPhotosItem from "./FeedPhotosItem"
import useFetch from "../hooks/useFetch"
import { PHOTOS_GET } from "../api"
import Error from "../components/Erros/Error"
import Loading from "../components/helper/Loading"
import style from "./FeedPhotos.module.css"

function FeedPhotos({setInfinite,page,setModalPhoto , user}) {
  const {data,error,loading,request} = useFetch()
  React.useEffect(()=>{
    async function fetchPhotos() {
      const total = 3
      const {url,options}= PHOTOS_GET({page,total,user})
      const {response , json} = await request(url,options)
      if (response && response.ok && json.length <total){
        setInfinite(false)
      }
    }
    fetchPhotos()
  },[request,user,setInfinite])
  if(error) return <Error error={error}/>
  if(loading) return <Loading/>
  if(data)
  return (
    <ul className={`${style.feed} animeLeft`}>
      {data.map((photo)=><FeedPhotosItem key={photo.id} photo={photo}setModalPhoto={setModalPhoto}/>)}
     
    </ul>
    )
  else{
    return null
  }
}

export default FeedPhotos;