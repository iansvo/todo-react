import React from 'react';

// Components

import TodoList from './TodoList';
import Container from './Container';

function App() {
  return (
    <div className="todo-mvc">
      <header className="header p-8 bg-purple-600 text-white mb-8">
        <Container children={
          <h1 className="text-3xl">Welcome to TodoReact</h1>
        } />
      </header>
      <Container children={<TodoList />} />
    </div>
  );
}

export default App;
