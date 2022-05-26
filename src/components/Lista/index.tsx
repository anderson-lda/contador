import React from "react";
import style from './Lista.module.scss'

//forma mais moderna de se criar componentes
export function Lista(){
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
                    <li key="index" className={style.item}>{/*recomendado uma key para o react saber distinguir qual item se está trabalhando */}
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}