import React from "react"
import { Route, Routes } from "react-router-dom"
import Head from "../components/helper/Head";
import NotFound from "../components/NotFound";
import Feed from "../feed/Feed";
import { UserContext } from "../UserContext";
import UserHeader from "./UserHeader"
import UserPhotoPost from "./UserPhotoPost"
import UserStats from "./UserStats";


function User() {
  const {data} = React.useContext(UserContext)
  return (
    <section className='container'>
      <Head title="Perfil " description="home do site fecedogs"/>
      <UserHeader/>
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route path="estatisticas" element={<UserStats/>}/>
        <Route path="*" element={<NotFound/>}/> //404
      </Routes>
    </section>
    )
}

export default User;