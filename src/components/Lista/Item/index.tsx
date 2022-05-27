import style from '../Lista.module.scss'
import { ITarefa } from '../../../types/tarefa'

export default function Item({tarefa,tempo, selecionado, completado, id}: ITarefa){
    return(
        <li key="index" className={style.item}>{/*recomendado uma key para o react saber distinguir qual item se está trabalhando */}
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}