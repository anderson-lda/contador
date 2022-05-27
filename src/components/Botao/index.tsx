import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{ 
    children: any, 
    type?: "button" | "submit" | "reset" | undefined }> {
    render(){ //função obrigatória para componentes React
        const {type = "button"} = this.props; //default é button
        return(
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;