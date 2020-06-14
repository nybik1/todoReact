import React from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import List from './components/List';

class App extends React.Component {
  state = {
    todos: []
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

  render() {
    const { todos } = this.state;

    return (
      <div className="App" >
        <ToDoInput addTodo={this.handleTodo} />
        <List toggleCompleted={this.toggleCompleted} items={todos} />
      </div>
    );
  }
}

export default App;