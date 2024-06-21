import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const Task = ({ task }) => {
  const { deleteTask, toggleTask } = useContext(TodoContext);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <p>{task.description}</p>
      <button style={{fontFamily:'sans-serif',fontSize:'17px'}} onClick={handleToggle}>{task.completed ? 'Undo' : 'Done'} </button>
      <button style={{fontFamily:'sans-serif',fontSize:'17px'}} onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
