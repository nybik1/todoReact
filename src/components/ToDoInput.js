import React, { Component } from 'react';

class ToDoInput extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target[0];
        this.props.addTodo(input.value);
        input.value = '';
    }

    render() {
        return (
            <div className="todo-input">
                <form onSubmit={this.handleSubmit}>
                    <input type="Text" />
                </form>
            </div>
        );
    }
}

export default ToDoInput;