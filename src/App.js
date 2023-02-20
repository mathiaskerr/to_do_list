// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy Shopping", priority:"High"}, 
    {name: "Clean Bathroon", priority:"Low"},
    {name: "Car's MOT", priority:"High"}
  ]);

const[priority, setPriority] = useState("");

const newPriority = (event) => {
  setPriority(event.target.value);
};

  const taskList = tasks.map((task,index) =>{
    return(
      <div key={index}>
      {task.priority ==="High" ? <li className="high" key={index}><span>{task.name} </span> <p>{task.priority}</p></li> :
      <li className="low" key={index}><span>{task.name} </span><p>{task.priority}</p></li>}

      </div>


    // <li class="tasks" key={index}><span>{task.name} </span>
    //  <span className = "highPriority">{task.priority}</span> : <span className = "lowPriority">{task.priority}</span>}</li>
    
    )
  });

  const [newTask, setNewTask] = useState("");

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  };






  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name:newTask, priority: priority})
    setTasks(copyTasks);
    setNewTask("")

  };

  return (
    <div>
    <h1>To Do List</h1>

    <form className='form' onSubmit={saveNewTask}>
    <label htmlFor="new-task"></label>
    <input id="new-task" type="text" value = {newTask}
      onChange = {handleTaskInput}
    />


    <input type="radio" name= "priority" value = "High" onChange = {newPriority}/>High
  
    <input type="radio" name="priority" value = "Low" onChange= {newPriority}/>Low

    <input type="submit" value="Save New Task"/>

    </form>
    <ul className='ul'>
      {taskList}
    </ul>
    </div>
  );
}

export default App;
// const saveNewItem = (event) => {
//   event.preventDefault();
//   const copyItems = [...items]
//   copyItems.push({name:newItem, isPurchased: false})
//   setItems(copyItems)
//   setNewItem("")
// };