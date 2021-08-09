import React from "react"
import style from "./image.module.css"

function Image({alt,...props}) { 
  const [skeleton, setSkeleton] = React.useState(true)
  function handleLoad({target}) {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
  <div className={style.wrapper}>
    {skeleton && <div className={style.skeleton}></div>}
    
    <img className={style.img} alt={alt} onLoad={handleLoad} {...props}/>
  </div>
    )
}

export default Image;