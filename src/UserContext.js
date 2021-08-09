import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { TOKEN_POST , TOKEN_VALIDATE_POST, USER_GET} from "./api.js"

export const UserContext = React.createContext()

export const UserStorage = ({children}) =>{
  const [data, setData] = React.useState(null)
  const [login,setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const navigate = useNavigate()

  React.useEffect(()=>{
    
    async function autologin() {
      const token = window.localStorage.getItem('token')
      if(token){
        try{
          setError(null)
          setLoading(true)
          const {url , options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url,options)
          if(!response.ok)throw new Error('token invalido')
          await getUser(token)
          
        }catch(err){
          userLogout()
        }finally{
          setLoading(false)
        }
      }else{
        setLogin(false)
      }
    }
    autologin()
  },[])

  async function getUser(token){
    const {url, options} = USER_GET(token)
    const response = await fetch(url,options)
    const json = await response.json()
    setLogin(true)
    setData(json)
    setLoading(true)
  }
  async function userLogout() {
    setLoading(false)
    setLogin(false)
    setData(null)
    setError(null)
    window.localStorage.removeItem('token')
    navigate("/login")
  }

  async function userLogin(username, password) {
    try{
      setLogin(null)
      setError(null)
      setLoading(true)
      const {url , options} =TOKEN_POST({username,password})
      const tokenRes = await fetch(url, options)
      if(!tokenRes.ok) throw new Error(`usuario ou senha invalido`)
      const {token} = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      setLogin(true)
      navigate("/conta")
    }catch(err){
      setError(err.message)
      setLogin(false)
    }finally{
      setLoading(false)
    }
  }

  return(
    <UserContext.Provider value={{userLogin ,userLogout, data , userLogout , error, loading,login}}>
      {children}
    </UserContext.Provider>
  )
}