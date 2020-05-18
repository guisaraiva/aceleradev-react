import React, { useState } from 'react'

const Todo = () => {
    const [task, updateTask] = useState('')
    const [tasks, updateTasks] = useState([])
    

    const handleInputChange = event => updateTask(event.target.value)
    const handleFormSubmit = event => {
        event.preventDefault()
        if(task.trim()){
            updateTasks([ ...tasks, task])
            updateTask('')
        }
    }
return (
        <>
        <form onSubmit = {handleFormSubmit}>
            <input 
                data-testid = 'form-field'
                onChange = {handleInputChange}
                placeholder = "Type a new task here"
                type = "text"
                value = {task}
            />
            <button type ="submit" data-testid = 'form-btn'>Add new task</button>
        </form>
        <table data-testid = 'table'>
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((t, index) => (
                    <tr key = {index}>
                        <td>{t}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        </>
    )
}

export default Todo;