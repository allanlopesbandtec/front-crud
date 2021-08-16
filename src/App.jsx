import React from "react";
import Login from "./componentes/Login"
import Cadastro from "./componentes/Cadastro"
import Listagem from "./componentes/Listagem"

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
          <Route path="/listagem" component={Listagem}/>
      </BrowserRouter>
    </>
  );
};

export default App;

