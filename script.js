const todoArray = JSON.parse(localStorage.getItem('todoList')) || [];
        renderTodoList();

        function renderTodoList() {

            
            let todoHTML = '';

            for(let i=0; i < todoArray.length; i++){
                const todoObject = todoArray[i];
                const { name, date } = todoObject;
                const html = `
                <div> ${name} </div>
                <div> ${date} </div> 
                <button class="todo-delete-button" onclick="
                todoArray.splice(${i}, 1);
                localStorage.setItem('todoList', JSON.stringify(todoArray));
                renderTodoList();
                ">Delete</button> `;

                todoHTML += html;
            }

            document.querySelector('.todo-list')
            .innerHTML = todoHTML;

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