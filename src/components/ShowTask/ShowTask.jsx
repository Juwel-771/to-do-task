import React from 'react';
const task = [
    {id: 1001, name: "Task A", time: "2:09:01 AM 9/14/2024"},
    {id: 1002, name: "Task B", time: "2:10:01 AM 9/14/2024"},
    {id: 1003, name: "Task C", time: "2:11:01 AM 9/14/2024"},

]


const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const handleOnClear = ()=> {
        setTaskList([]);
    }

    const handleOnEdit = (id)=> {
        const selectedTask = taskList.find(todo => todo.id === id);
        setTask(selectedTask);
    }

    const handleOnDelete = (id)=> {
        const updateTaskList = taskList.filter(todos => todos.id !== id);
        console.log(updateTaskList);
        setTaskList(updateTaskList)
    }

    return (
       <section className='showTask'>
            <div className="head">
                <div>
                    <span className='title' >Task Lis</span>
                    <span className='count'>{taskList.length}</span>
                </div>
                <button className='clearAll' onClick={handleOnClear}>Clear All</button>
            </div>
            <ul>
                {
                    taskList.map( todo => 
                    <li key = {todo.id} >
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i onClick={() => handleOnEdit(todo.id)} className='bi bi-pencil-square'></i>
                        <i onClick={() => handleOnDelete(todo.id)} className='bi bi-trash'></i>
                    </li>
                    )
                }
            </ul>
       </section>
    );
};

export default ShowTask;