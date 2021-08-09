import React from "react"
import style from "./UserStatsGraphs.module.css"
import {VictoryPie, VictoryChart,VictoryBar} from 'victory'


function UserStatsGraphs({data}) {
  const [graph , setGraph] = React.useState([])
  const [total, setTotal] = React.useState(1);
  
  React.useEffect(()=>{
    const graficodata = data.map(item =>{
      return {
        x:item.title,
        y:Number(item.acessos)
      }
    })
    if(data.length > 0){
    setTotal(
          data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
        );
    }
    setGraph(graficodata)
  },[data])

    return(
      <section className={`${style.graph} animeLeft` }>
        <div className={`${style.total} ${style.graphItem}`}>
          <p>acessos:{total}</p>
        </div>
        <div className={style.graphItem}>
          <VictoryPie 
          data={graph} 
          innerRadius={50} 
          padding={{top:20,bottom:20,left:80,right:80}}
          style={{data:{
            fillOpacity:0.9,
            stroke:'#fff',
            strokeWidth: 2,
          },
          labels:{
            fontSize:14,
            fill:"#333"
          }
        }
      }
          />
          
      
        </div>
        <div className={style.graphItem}>
          <VictoryChart>
            <VictoryBar alignment='start' data={graph}></VictoryBar>
          </VictoryChart>
        </div>
      </section>
    )
}

export default UserStatsGraphs;