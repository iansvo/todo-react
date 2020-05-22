import React from 'react';
import { PropTypes } from 'prop-types';

class Todo extends React.Component {

  id = `todo-${this.props.id}`;

  constructor(props) {
    super(props);
    this.state = {
      complete: props?.complete
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({
      complete: !this.state.complete
    })
  }

  render() {

    if( this.props.title === '' ) {
      return null;
    }

    return (
      <div className="todo-item">
        <input className="todo-item_input" type="checkbox" id={this.id} checked={this.state.complete} onChange={this.updateState} />
        <label htmlFor={this.id}>
          {this.props.title}
        </label>
      </div>  
    )
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  complete: PropTypes.bool
};

export default Todo;