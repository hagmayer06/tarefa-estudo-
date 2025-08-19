const tarefas = ["coisa1", "coisa2", "coisa3"]

function add() {
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ""
    render()
}

function render() {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    tarefas.forEach(function (tarefa, index) {
        const li = document.createElement("li");
        li.innerText = tarefa

        ul.appendChild(li)
    })
}

render()
