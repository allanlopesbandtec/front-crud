import React from 'react'
import "./head.css"
import logoCondominio from "../../asserts/image/logoCondominio.png"
import {useHistory} from "react-router-dom";

function Banner() {

    const janela = useHistory();

    function home(){
        janela.push("/listagem");
    }

    
    return (
    
        <div className="Banner">
        <figure onClick={home}>
           <img src={logoCondominio} alt="São Brás"/>
           <figcaption>São Brás</figcaption>
        </figure>

        </div>
    )
}

export default Banner;