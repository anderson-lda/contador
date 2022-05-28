import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import { v4 as uuidv4 } from 'uuid'

//Formulario como function
/*interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}
function Formulario({ setTarefas}: Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){ //formevent: evento de formulário;<HTML.. opcional
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4() //funcao que retorna id aleatorio
                }
            ]);
            setTarefa("")
            setTempo("00:00")
    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione uma nova tarefa</label>
                    <input 
                    type="text" 
                    name="tarefa" 
                    value={tarefa}
                    onChange={e=>setTarefa(e.target.value)}
                    id="tarefa"
                    placeholder="Digite sua tarefa" 
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
    )
}*/

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
    state = { //para class components não há hooks
        tarefa:"",
        tempo:"00:00"
    }

    adicionarTarefa(evento:React.FormEvent<HTMLFormElement>){ //formevent: evento de formulário;<HTML.. opcional
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4() //funcao que retorna id aleatorio
                }
            ]);
        this.setState({
            tarefa:"",
            tempo:"00:00"
        })
    }

    render(){ //função obrigatória para componentes React
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione uma nova tarefa</label>
                    <input 
                    type="text" 
                    name="tarefa" 
                    value={this.state.tarefa}
                    onChange={e=>this.setState({...this.state,tarefa:e.target.value})}
                    id="tarefa"
                    placeholder="Digite sua tarefa" 
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    value={this.state.tempo}
                    onChange={evento => this.setState({...this.state,tempo:evento.target.value})}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;