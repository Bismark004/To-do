const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
	if (todoInput.value) {
		const li = document.createElement('li');
		const span = document.createElement('span');
		const deleteButton = document.createElement('button');
		
		span.innerText = todoInput.value;
		deleteButton.innerText = 'Delete';
		
		deleteButton.addEventListener('click', () => {
			li.remove();
		});

		li.appendChild(span);
		li.appendChild(deleteButton);
		todoList.appendChild(li);

		todoInput.value = '';
	}
});      
