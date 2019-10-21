import React, {useState, useReducer} from "react";
import { initialState, reducer } from "../../reducers/reducer";

export default function ToDoForm(props) {
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.addTask(event, value)

    setValue("")
  }

  const handleCompleted = (event) => {
    event.preventDefault()

    props.clearCompleted(event, value)

    setValue("")
  }

    return (
      <form>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
            Add
        </button>
        <button onClick={handleCompleted}>
            Clear Completed Tasks
        </button>
      </form>

    );
  }
