import React, {useState} from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

export default function App(){
  const [tasks, setTasks] = useState([]);

  const addTask = (event, taskName) => {

    event.preventDefault()

    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }

    setTasks([...tasks, newTask])

    console.log(tasks)
  }

  const clearCompleted = () => {

    setTasks( tasks.filter(task => {
        return !task.completed
      })
    )
  }

  const toggleTask = ( taskID) => {

    setTasks(tasks.map(task => {
        if (task.id === taskID) {
          return {
            ...task, 
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    )
  }

  return(
    <div className = "App">
    <ToDoForm 
        addTask = {addTask}
        clearCompleted = {clearCompleted}
      />
      <ToDoList 
        tasks = {tasks}
        toggleTask={toggleTask}
      />
    </div>
  );
}
