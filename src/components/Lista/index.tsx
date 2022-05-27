import { ITarefa } from '../../types/tarefa'
import Item from './Item'
import style from './Lista.module.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

//forma mais moderna de se criar componentes
export default function Lista({ tarefas, selecionaTarefa }: Props){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do Dia</h2>
            <ul>
                {tarefas.map((item)=>(//() para retornar diretamente;{} indica escopo
                    <Item 
                      selecionaTarefa={selecionaTarefa}
                      key={item.id}
                      {...item}
                    />
                ))}
                
            </ul>
        </aside>
    )
}