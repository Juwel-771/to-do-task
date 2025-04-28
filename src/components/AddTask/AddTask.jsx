import React from 'react';

const AddTask = ({taskList, setTaskList, task, setTask}) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTaskList([...taskList, newTask]);
        name: e.target.task.value = " ";
    }


    return (
       <section className='addTask'>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="task" autoComplete="off" placeholder='Add Task' maxLength="25" />
                <button type='submit'>Add</button>
            </form>
       </section>
    );
};

export default AddTask;