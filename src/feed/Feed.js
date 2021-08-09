import React, { useEffect } from "react"
import FeedModal from "./FeedModal"
import FeedPhotos from "./FeedPhotos"



function Feed({user}) {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages , setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)
  useEffect(()=>{
    let wait = false
    function infinitScroll() {
      if(infinite){
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if( scroll > height* 0.75 && !wait){
          setPages((pages)=>[...pages,pages.length + 1 ])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500);
        }
      }
    } 
    window.addEventListener('wheel', infinitScroll)
    window.addEventListener('scroll', infinitScroll)
    return ()=>{
      window.removeEventListener('wheel', infinitScroll)
      window.removeEventListener('scroll', infinitScroll)
    }
  },[infinite])
  return (
    <div>
      {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo = {modalPhoto}/> }
      {pages.map((pg)=>(
        <FeedPhotos user={user} key={pg} page={pg} setInfinite={setInfinite} setModalPhoto={setModalPhoto}/>
      ))}
      
    </div>
    )
}

export default Feed;