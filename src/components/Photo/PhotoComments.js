import React from "react"
import {UserContext} from "../../UserContext"
import PhotoCommentsForm from "./photoCommentsForm";
import style from "./PhotoComments.module.css"
function PhotoComments(props) {
  const [comments, setComments] = React.useState(()=> props.comments)
  const commentsSection = React.useRef(null)
  const {login} = React.useContext(UserContext)
  React.useEffect(()=>{
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  },[comments])
  return (
    <>
      <ul ref={commentsSection} className={style.comments}>
        {comments.map(comment =>
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </ul>
      {login && <PhotoCommentsForm setComments={setComments} id={props.id} />}
    </>
    )
}

export default PhotoComments;