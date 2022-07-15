import {useState} from 'react';

export const TaskCreator = () => {

    const [ newTaskName, setNewTaskName ] = useState()

    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('tasks', newTaskName)
      setNewTaskName('')
    }
  
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter a new task" 
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                /> 

                <button>Save task</button>

            </form>
        </div>
    )
}