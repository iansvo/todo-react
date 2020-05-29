import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  storageKey = 'todos';
  cached     = JSON.parse(localStorage.getItem(this.storageKey));
  data       = this.cached ?? [
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
    <li key={todo.id} className="mb-4">
      <Todo title={todo.title} id={todo.id} complete={todo.complete} onUpdateData={this.updateData} />
    </li>
  );


  constructor() {  
    super();  

    this.updateData = this.updateData.bind(this);

    this.state = {
      todos: this.data
    };

    if( !localStorage.getItem(this.storageKey) ) {
      var serializedData = JSON.stringify(this.data);
      localStorage.setItem(this.storageKey, serializedData);
    }
  }

  updateData(id, complete) {
    
    console.log(id, complete, this);

    // let data     = JSON.parse(this.state.data),
    //     modified = false; 
    
    // console.log(data);
    // for( let todo of data ) {
    //   if( todo.id === id ) {
    //     todo.complete = complete;
    //     modified = true;

    //     break;
    //   }
    // }
    // console.log(data);

    // data = data.map((todo) => {
    //   if( todo.id === id ) {
    //     todo.complete = complete;
    //     modified = true;
    //   }

    //   return todo;
    // })


    // if( modified ) {
    //   this.data = JSON.stringify(data);
    //   localStorage.setItem(this.storageKey, this.data);
    //   console.log('local storage updated');
    // }
    // else {
    //   console.log('no data changed');
    // }   
  }

  render() {
    console.log(this.state);
    return ( 
      <ul id="todo-list" className="todo-list">
        {this.todos}
      </ul>
    );
  }
}

export default TodoList;