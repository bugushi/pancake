import React from 'react';
import styles from './TodoList.css';

class TodoList extends React.Component {
  state = {
    todos: [],
    current: ''
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem('todos')) || []
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  handleChange = (e) => {
    this.setState({
      current: e.target.value
    });
  }

  addItem = () => {
    if (this.state.current) {
      this.setState({
        todos: [...this.state.todos, this.state.current]
      });
    }
  }

  deleteItem = (value) => {
    const tempTodos = [...this.state.todos];
    const index = tempTodos.indexOf(value);
    tempTodos.splice(index, 1);
    this.setState({
      todos: tempTodos
    });
  }

  render() {
    const todosDom = this.state.todos.map(value => (
      <li onClick={() => this.deleteItem(value)} key={value}>{value}</li>
    ));
    return (
      <div className={styles.todoList}>
        <div className={styles.action}>
          <input value={this.state.current} onChange={this.handleChange} />
          <button onClick={this.addItem}>添加</button>
        </div>
        <ul>
          {todosDom}
        </ul>
      </div>
    );
  }
}

export default TodoList;
