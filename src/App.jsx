import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ShowTask from './components/ShowTask/ShowTask'

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <Header></Header>
      <AddTask taskList = {taskList} setTaskList = {setTaskList} ></AddTask>
      <ShowTask taskList = {taskList} setTaskList = {setTaskList} ></ShowTask>
    </>
  )
}

export default App
