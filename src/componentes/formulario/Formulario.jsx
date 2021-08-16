import React, { useState } from 'react'
import vizinhanca from "../../asserts/image/vizinhanca.png"
//import Api from '../../utils/Api'
import './formulario.css'
import axios from 'axios';
import {useHistory} from "react-router-dom";

function Formulario(props) {

    const janela = useHistory();

    const [values, setValues] = useState({})
    //Const [values] pega os valores dos campos

    async function reqLogin(){
        //Função para consultar o login

        await axios.post(`${props.eCadastro ? 
            'http://localhost:8080/usuarios' : 
            'http://localhost:8080/autenticacoes'}`, values)
        .then(function(response){
            if(!props.eCadastro){
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("usuarioLogado", response.data); 

                console.log(localStorage.getItem("token"))

                janela.push("/listagem");

            }else if (response === 201){
                window.location.href("/")
            }else{
                alert("Dados de cadastro, incorretos! \n Tente novamente...");
            }
            

        }).catch((e) => {
            localStorage.clear();
            alert("Dados incorretos! \n Tente novamente...");
        })
    }

    const handleSubmit = callback => event => {
        event.preventDefault();
        callback();
      };
    
    //handleSubmit envia as informações e espera um retorno
  
    const handleChange = (event) => {

        //console.log(event.taget.value)
        //console.log(values)

      const auxValues = { ...values };
      auxValues[event.target.name] = event.target.value;
      setValues(auxValues);
    };

    // handlechange verifica cada mudança no campo
    console.log(values)

    return (
        <div className="pagina">

            <fieldset className="borda">

                <legend> {props.eCadastro ? 'Cadastro' : 'Entrar' }</legend>

                <form className="formulario-entrar" onSubmit={handleSubmit(reqLogin)}>
                    <label htmlFor="email">Email</label>
                    <input  onChange={handleChange}  id="email" type="email" name="email"/>

                    {props.eCadastro ? 
                    <>
                    <label htmlFor="nome">Nome</label>
                    <input  onChange={handleChange}  id="nome" type="text" name="nome" />  
                    </> :''}

                    <label htmlFor="senha">Senha</label>
                    <input  onChange={handleChange}  id="senha" type="password" name="senha" />

                    {props.eCadastro ?
                    <>
                    <a href="/">Já possui cadastro?</a>
                    </>
                    :
                    <>
                    <a href="/">Esqueceu a senha?</a>
                    <a href="/cadastro">Não possui cadastro?</a>
                    </>}

                    <button className={props.eCadastro ? "btn-cadastrar" 
                    : "btn-entrar"}>{props.eCadastro ? 'Cadastrar' : 'Entrar'}</button>

                </form>

            </fieldset>

            <img src={vizinhanca} alt="" />

        </div>
    )
}

export default Formulario;