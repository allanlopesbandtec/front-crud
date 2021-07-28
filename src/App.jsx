import React from "react";
import Login from "./componentes/Login"
import Cadastro from "./componentes/Cadastro"
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'


function App() {
  return (

    <>
      <BrowserRouter>
          <Route path="/" exact component={Login}/>
          <Route path="/cadastro" component={Cadastro}/>
      </BrowserRouter>
    </>
  );
};

export default App;

