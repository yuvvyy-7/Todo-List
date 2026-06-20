const todoArray = JSON.parse(localStorage.getItem('todoList')) || [];
        renderTodoList();

        function renderTodoList() {

            
            let todoHTML = '';

            todoArray.forEach(function(todoObject, i){
                const { name, date } = todoObject;
                const html = `
                <div> ${name} </div>
                <div> ${date} </div> 
                <button class="todo-delete-button js-todoDelete-button">Delete</button> `;

                todoHTML += html;
            });

            document.querySelector('.todo-list')
            .innerHTML = todoHTML;

            document.querySelectorAll('.js-todoDelete-button')
            .forEach((deleteButton, index) => {
                deleteButton.addEventListener('click', () => {
                    todoArray.splice(index, 1);
                    renderTodoList();
                });
            });
            
            
            localStorage.setItem('todoList', JSON.stringify(todoArray));
        }

        function takeInput() {
            const inputName = document.querySelector('#todo-input');
            const inputDate = document.querySelector('#todo-date');
            if (inputName.value === '' || inputDate.value === '') {
                return;
            } else {
                todoArray.push({
                    name: inputName.value, 
                    date: inputDate.value
            });
               

                inputName.value = '';
                inputDate.value = ''; //emptying the input box after submission
            }
            renderTodoList();
        }

        document.querySelector('.add-button')
        .addEventListener('click', () => {
            takeInput();
        })