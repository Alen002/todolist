function createTodo () {
    let list = document.querySelector('#list');
    let newTodo = document.createElement('li');
    
    list.appendChild(newTodo).innerHTML = document.querySelector('#input-text').value
}