import React, { useEffect, useState }from 'react'
import Banner from './head/Banner';
import axios from 'axios';
import ListaCadastro from './listagem/ListaCadastro'
import '../asserts/css/listagem.css'


function Listagem() {

    const [cadastros, setCadastros] = useState([]);

    const [pesquisa, setPesquisa] = useState({})

    useEffect( () => {
        try{
            axios.get(`http://localhost:8080/cadastros`, {params : {
                cpf: null,
                nome: null
            },}, { headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }})
            .then((response) => {
                console.log(response.data.content)
                setCadastros(response.data.content)
                //Objeto de retorno contem páginação, 
                //neste momento estou listando somente o conteúdo!!!
            });
        } catch (error) {
            console.log(error)
        }
    }, [])
    //Esse par de colchetes serve pra não bugar as requisições!!!

    const handleChange = (event) => {
      const auxValues = { ...pesquisa };
      auxValues[event.target.name] = event.target.value;
      setPesquisa(auxValues);
    } 

    async function euOdeioReact(){

        if(pesquisa){
            axios.get(`http://localhost:8080/cadastros`, {params : {
                cpf: `${pesquisa}`
    
            }}, { headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }})
    
            //503.151.158-31
            .then((response) => {
            console.log("RODOU ESSA DESGRAMAAAAAA")
            setCadastros(response.data.content)
            //Objeto de retorno contem páginação, 
            //neste momento estou listando somente o conteúdo!!!
            });
        } else{
            console.log('eu odeio isso cara mds...')
        }
       
    }
  


    return (
        <div className="conteudo">

            <input type="text"  placeholder="Pesquisa de cadastro Nome/Cpf"
            onChange={handleChange} onKeyUp={euOdeioReact} />

                <Banner/>
                <div className="lista">
                <h3>Atualmente Cadastrados</h3>
                <ListaCadastro obj={cadastros}/>
            
            </div>

        </div>
    )
}

export default Listagem;