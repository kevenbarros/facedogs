import React from "react"
import { useParams } from "react-router-dom";
import Head from "../components/helper/Head";
import Feed from "../feed/Feed";



function UserProfile() {
  const {user} = useParams()
  return (
    
    <section className="container mainContainer">
      <Head title={user} description="home do site fecedogs"/>
      <h1 className='title'>{user}</h1>
      <Feed user={user}/>
    </section>
    )
}

export default UserProfile;
