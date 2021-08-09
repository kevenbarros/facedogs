import React from "react"
import { STATS_GET } from "../api";
import Error from "../components/Erros/Error";
import Head from "../components/helper/Head";
import Loading from "../components/helper/Loading";
import useFetch from "../hooks/useFetch";
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));



function UserStats() {
  const {data,error ,loading ,request} = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);
  if(loading )return <Loading/>
  if(error )return <Error error={error}/>
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="estatisticas " description="home do site fecedogs"/>
      <UserStatsGraphs data={data}/>
    </React.Suspense>
    )
  else{
    return null
  }
}

export default UserStats;