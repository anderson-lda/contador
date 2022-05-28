# contador
Projeto em React que permite adicionar tarefas, determinar um intervalo de tempo e inicializar um temporizador. São vistos conceitos de class e function components, assim como manipular estados nesses 2 casos.

Packages Adicionados
criação de id's aleatórios: npm i uuid; npm i --save-dev @types/uuid 
Formatação: npm install --save-dev sass; npm install -D typescript-plugin-css-modules

Em tsconfig.json, foi necessário adicionar as seguintes configurações:
"downlevelIteration": true,
"plugins": [{ "name": "typescript-plugin-css-modules" }]
