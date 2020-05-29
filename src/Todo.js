import React from 'react';
import { PropTypes } from 'prop-types';

class Todo extends React.Component {

  id         = `todo-${this.props.id}`;
  storageKey = 'todos';
  data       = localStorage.getItem(this.storageKey);

  constructor(props) {
    super(props);
    this.state = {
      complete: props.complete
    }

    this.update = this.update.bind(this);
  }

  update() {
    this.setState(state => {
      let complete = !state.complete;

      this.props.onUpdateData(this.props.id, complete);

      return {
        complete: complete
      }
    });

  }

  render() {
    if( this.props.title === '' ) {
      return null;
    }

    return (
      <div className="todo-item">
        <input className="mr-4" type="checkbox" id={this.id} checked={this.state.complete} onChange={this.update} />
        <label htmlFor={this.id} className="font-light">
          {this.props.title}
        </label>
      </div>  
    )
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  complete: PropTypes.bool,
  onUpdateData: PropTypes.func
};

export default Todo;