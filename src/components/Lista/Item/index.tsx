import style from './Item.module.scss'
import { ITarefa } from '../../../types/tarefa'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({tarefa,tempo, selecionado, completado, id, selecionaTarefa}: Props){
    return(
        <li 
          key="index" className={`${style.item} ${selecionado?style.itemSelecionado:''} ${completado?style.itemCompletado:''}`} 
          onClick={()=>!completado&&selecionaTarefa({tarefa,tempo,selecionado,completado,id})
        }>{/*recomendado uma key para o react saber distinguir qual item se está trabalhando */}
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}