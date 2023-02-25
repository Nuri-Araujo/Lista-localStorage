let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas(){
    listElement.innerHTML = "";
    tarefas.map((todo) => {
        let liElemnt = document.createElement("li");
        let tarefaText = document.createTextNode(todo);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#")

        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)

        let posicao = tarefas.indexOf(todo)
        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

        liElemnt.appendChild(tarefaText);
        liElemnt.appendChild(linkElement);
        listElement.appendChild(liElemnt);
    })
}

renderTarefas();

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa")
        return false;
    }else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa)
        inputElement.value = '';
        renderTarefas();
        salvarDados();
    }
}

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}