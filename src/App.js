import React from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import List from './components/List';


class App extends React.Component {
  state = {
    todos: [],
    filterBy: 'all',
  }

  handleTodo = (value) => {
    const todos = [
      ...this.state.todos,
      {
        id: Date.now(),
        value,
        completed: false,
      }
    ]
    this.setState({
      todos: todos,
    })
  }

  toggleCompleted = (id) => {
    const todos = this.state.todos.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item
    });

    this.setState({
      todos: todos,
    })
  }

  setFilterBy = (filterBy) => () => {
    this.setState({
      filterBy
    })
  }

  filterTodos() {
    const { todos, filterBy } = this.state
    switch (filterBy) {
      case 'active': {
        return todos.filter(item => !item.completed)
      }
      case 'completed': {
        return todos.filter(item => item.completed)
      }
      default:
        return todos;
    }
  }

  clearTodos = () => {
    this.setState({ todos: this.state.todos.filter(item => !item.completed) })
  }


  render() {
    return (
      <div className="App" >
        <ToDoInput addTodo={this.handleTodo} />
        <List toggleCompleted={this.toggleCompleted} items={this.filterTodos()} />
        <button onClick={this.setFilterBy('all')}>All</button>
        <button onClick={this.setFilterBy("completed")}>completed</button>
        <button onClick={this.setFilterBy("active")}>active</button>
        <button onClick={this.clearTodos}>clear todos</button>
      </div>
    );
  }
}

export default App;