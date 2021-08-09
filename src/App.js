import React from "react"
import "./app.css"
//bibliotecas
import { BrowserRouter, Route, Routes } from "react-router-dom";
//componentes
import Cabeçalho from "./components/Cabeçalho";
import Rodape from "./components/Rodape";
//hook
import {UserStorage} from "./UserContext"
//paginas
import Home from "./paginas/Home.js"
import Login from "./paginas/login/Login.js";
import User from "./user/User";
import ProtectedRoute from "./components/Erros/ProtectedRoute";
import UserProfile from "./user/UserProfile";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <UserStorage>
          <Cabeçalho/>
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="login/*" element={<Login/>}/>//subrotas (/*)
              <ProtectedRoute path="conta/*" element={<User/>}/>
              <Route path="perfil/:user" element={<UserProfile/>}/> 
              <Route path="*" element={<NotFound/>}/> //qual quer rota que nao seja uma dessas mstrar 404
            </Routes>
          </main>
          <Rodape/>
        </UserStorage>
      </BrowserRouter>
    </div>
    )
}

export default App;
