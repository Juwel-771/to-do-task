import React from 'react';

const AddTask = ({taskList, setTaskList, task, setTask}) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(task.id){
            const date = new Date();
            const updateTask = taskList.map(todo => (
                todo.id === task.id ? {
                    id: task.id, 
                    name: e.target.task.value, 
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ));

            setTaskList(updateTask);
            setTask({});

        }else {
            
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }

            setTaskList([...taskList, newTask]);
            setTask({});
        }

        
    }


    return (
       <section className='addTask'>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="task" autoComplete="off" value={task.name || " "} placeholder='Add Task' maxLength="25" onChange={e => setTask({...task, name: e.target.value})}/>
                <button type='submit'>{task.name ? "Update" : "Add"}</button>
            </form>
       </section>
    );
};

export default AddTask;