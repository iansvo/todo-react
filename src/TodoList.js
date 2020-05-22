import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  data = [
    {
      id: 1,
      title: 'Complete TodoMVC',
      complete: false
    },
    {
      id: 2,
      title: 'Learn TailwindCSS',
      complete: false
    },
    {
      id: 3,
      title: 'Learn Gatsby',
      complete: false
    },
    {
      id: 4,
      title: 'Become the Bazinga King',
      complete: true
    }
  ];

  todos = this.data.map((todo) => 
    <li key={todo.id}>
      <Todo title={todo.title} id={todo.id} complete={todo.complete} />
    </li>
  );

  render() {
    return ( 
      <ul id="todo-list" className="todo-list">
        {this.todos}
      </ul>
    );
  }
}

export default TodoList;