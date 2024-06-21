import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoProvider } from './To-Do List/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle'
ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
