import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component {
    render(){ //função obrigatória para componentes React
        return(
            <button className={style.botao}>Botão</button>
        )
    }
}

export default Botao;