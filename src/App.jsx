import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import ShowTask from './components/ShowTask/ShowTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <AddTask></AddTask>
      <ShowTask></ShowTask>
    </>
  )
}

export default App
