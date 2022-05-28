import React from "react";
import style from './Botao.module.scss'

//feito como function
/*interface Props{
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children?: React.ReactNode
}
function Botao({onClick,type, children}: Props){
    return(
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}*/

class Botao extends React.Component<{ 
    children: any, 
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
    render(){ //função obrigatória para componentes React
        const {type = "button", onClick } = this.props; //default é button
        return(
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;