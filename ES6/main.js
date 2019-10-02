class TodoList{
    constructor(){
        this.todos = [];
    }

    addToDo(){
        this.todos.push('Novo item');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').click = function(){
    MinhaLista.addToDo();
}