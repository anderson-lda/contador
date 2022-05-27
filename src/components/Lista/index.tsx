import { ITarefa } from '../../types/tarefa'
import Item from './Item'
import style from './Lista.module.scss'

//forma mais moderna de se criar componentes
export default function Lista({tarefas}:{tarefas: ITarefa[]}){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do Dia</h2>
            <ul>
                {tarefas.map((item, index)=>(//() para retornar diretamente;{} indica escopo
                    <Item 
                      key={index}
                      {...item}
                    />
                ))}
                
            </ul>
        </aside>
    )
}