import style from '../Lista.module.scss'

export default function Item({tarefa,tempo}:{tarefa:string,tempo:string}){
    return(
        <li key="index" className={style.item}>{/*recomendado uma key para o react saber distinguir qual item se está trabalhando */}
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}