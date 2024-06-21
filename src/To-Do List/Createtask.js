import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';
import './createtask.css'
const Createtask = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTask } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      const newTask = {
        id: Date.now(), // Use a unique identifier (you might want a more robust solution)
        description: inputValue.trim(),
        completed: false,
      };
      addTask(newTask);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className='b'>Add</button>
    </form>
  );
};

export default Createtask;
