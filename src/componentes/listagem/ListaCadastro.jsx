import React from 'react'
import './cadastro.css'

function ListaCadastro(props){

    const cadastros = props.obj;

    return cadastros.map((cadastro) => {
        return(

            <div className="card"  key={cadastro.cpf}>
                <ul>
                    <li>Nome: {cadastro.nome} </li>
                    <li>Email: {cadastro.email} </li>
                    <li>Cpf: {cadastro.cpf} </li>
                </ul>
            </div>
        )

    })
}

export default ListaCadastro;