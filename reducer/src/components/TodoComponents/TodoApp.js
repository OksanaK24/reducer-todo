import React, {useState, useReducer} from "react";
import ToDoForm from "./TodoForm";
import ToDoList from "./TodoList";
import "./Todo.css";
import { initialState, reducer } from "../../reducers/reducer";

export default function App(){
  const [tasks, setTasks] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
 
  const addTask = (event, taskName) => {

    event.preventDefault()

    const newTask = {
      name: taskName,
      completed: false,
      id: Date.now()
    }

    // setTasks([...tasks, newTask])

    dispatch({ type: "ADDING_NEW_TASK", payload: newTask })

    // console.log(tasks)
  }

  const clearCompleted = () => {

    dispatch({ type: "CLEAR_COMPLETED" })
    // setTasks( tasks.filter(task => {
    //     return !task.completed
    //   })
    // )
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
