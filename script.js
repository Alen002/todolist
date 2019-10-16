function createTodo () {
    let text = document.querySelector('#input-text').value
    if (text !== "") {
        // create a new task and append it
        let list = document.querySelector('#list');
        let newTodo = document.createElement('li');
        list.appendChild(newTodo).innerHTML = text; 
        document.querySelector('#input-text').value = '';

        // create the close button
        let closeButton = document.createElement('span');
        let icon = document.createTextNode('\u00D7');
        closeButton.className = 'close';
        closeButton.appendChild(icon);
        newTodo.appendChild(closeButton);
        

    } else {
        alert('Please enter a task');
    };

    // close functionality
    closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach((entries) => {
        entries.onclick = function() {
            this.parentNode.style.display = 'none';
        }
    });  
};



