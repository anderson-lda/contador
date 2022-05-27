import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{ children: any }>/*<{texto:string}>*/ {
    render(){ //função obrigatória para componentes React
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;