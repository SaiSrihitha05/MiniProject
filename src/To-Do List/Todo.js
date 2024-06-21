import React, { useContext } from 'react';
import CreateTask from './Createtask';
import Task from './Task';
import { TodoContext } from './TodoContext';
import './Todo.css'
const Todo = () => {
  const { state } = useContext(TodoContext);
  const { tasks } = state;

  return (
    <div>
      <h1 style={{color:'white',fontFamily:'monospace',fontSize:'55px',marginBottom:'0px'}}>To-Do List App</h1>
      <div className="todo-container">
      <h1 id="a">To-Do List</h1>
      <p >Total tasks: {tasks.length}</p>
      <CreateTask />
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Todo;
