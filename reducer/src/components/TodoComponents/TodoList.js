import React from 'react';

import Task from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTask={props.toggleTask}
        />
      ))}
    </div>
  );
};

export default TodoList;