import React from "react"
import Head from "../components/helper/Head";

import Feed from "../feed/Feed"


function Home() {
  return (
    <div className='container mainContainer'>
      <Head title="Fotos " description="home do site fecedogs"/>
      <Feed/>
    </div>
    )
}

export default Home;