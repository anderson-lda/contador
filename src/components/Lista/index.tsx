import Item from './Item'
import style from './Lista.module.scss'

//forma mais moderna de se criar componentes
export default function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'JavaScript',
        tempo: '01:30:00'
    }]
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