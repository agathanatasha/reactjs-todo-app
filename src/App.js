import React, { Component } from 'react';
import './App.css';
import todosData from './todosData'
import ChecklistItem from './components/ChecklistItem'



class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
}
  
  render() {
    const itemList = todosData.map(item => <ChecklistItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
        <div className="todo-list">
           {itemList}
        </div>
      );
  }
}

export default App;
