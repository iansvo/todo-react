import React from 'react';
import './App.css';

// Components

import TodoList from './TodoList';

function App() {
  return (
    <div className="todo-mvc">
      <header className="header">
        <h1>Welcome to TodoReact</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
