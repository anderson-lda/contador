import React from "react";

//forma mais moderna de se criar componentes
export function Lista(){
    return(
        <aside>
            <h2>Tarefas do Dia</h2>
            <ul>
                <li>
                    <h3>
                        React
                    </h3>
                    <span>02:00:00</span>
                </li>
                <li><h3>JavasScript</h3>
                <span>01:00:00</span></li>
            </ul>
        </aside>
    )
}