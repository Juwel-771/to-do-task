import React from 'react';
const task = [
    {id: 1001, name: "Task A", time: "2:09:01 AM 9/14/2024"},
    {id: 1002, name: "Task B", time: "2:10:01 AM 9/14/2024"},
    {id: 1003, name: "Task C", time: "2:11:01 AM 9/14/2024"},

]


const ShowTask = () => {
    return (
       <section className='showTask'>
            <div className="head">
                <div>
                    <span className='title' >Task Lis</span>
                    <span className='count'>0</span>
                </div>
                <button className='clearAll'>Clear All</button>
            </div>
            <ul>
                {
                    task.map( tasks => 
                    <li>
                        <p>
                            <span className="name">{tasks.name}</span>
                            <span className="time">{tasks.time}</span>
                        </p>
                        <i className='bi bi-pencil-square'></i>
                        <i className='bi bi-trash'></i>
                    </li>
                    )
                }
            </ul>
       </section>
    );
};

export default ShowTask;