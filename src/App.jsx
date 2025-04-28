import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ShowTask from './components/ShowTask/ShowTask'

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <>
      <Header></Header>
      <AddTask 
        taskList = {taskList} 
        setTaskList = {setTaskList}
        task = {task}
        setTask = {setTask} 
        ></AddTask>
      <ShowTask 
        taskList = {taskList} 
        setTaskList = {setTaskList} 
        task = {task}
        setTask = {setTask} 
      ></ShowTask>
    </>
  )
}

export default App
