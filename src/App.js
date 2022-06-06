import './App.css';
import React,{useState} from 'react';
import Task from './Task';

function App() {

  const [taskName,setTaskName] = useState("")
  const [taskList, setTasklist]= useState([])

  const addTask = () => {
    setTasklist([...taskList, {task: taskName}])
    setTaskName('')
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <label>Task Name</label>
      <input type="text" id="task" onChange={(e) => {
       setTaskName(e.target.value)}}/>
      <button onClick={addTask}>Add</button><br></br>
      {taskList.map((task) => {
        return <Task taskName={task.task}/>
      })}
    </div>
  );
}

export default App;
