document.querySelector(".button").addEventListener('click', e => {
    e.preventDefault()
    const container = document.querySelector('.container')
    const input = document.querySelector('.text')
    if(input.value == "") input.value = ""
    else{
        const task = document.createElement('div');
        const taskText = document.createElement('p');
        const bdelete = document.createElement('button');
        //Aniadiendo clases
        //Aniadiendo clases a Task
        task.classList.add('Tareas')

        //Poniendo bonito el texto de la tarea
        taskText.classList.add('tareita')
        taskText.innerHTML = input.value;

        //Poniendo Bonito El boton
        bdelete.classList.add('delete')
        bdelete.textContent = 'Eliminar'

        //Appendchildo los elementos
        container.appendChild(task)
        task.appendChild(taskText)
        task.appendChild(bdelete)
        
        input.value = ""

        //Poniendo a elminar la eliminacion
        bdelete.addEventListener('click', e => container.removeChild(task))
    }
});