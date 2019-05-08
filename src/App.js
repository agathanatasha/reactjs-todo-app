import React, { Component } from 'react';
import './App.css';
import todosData from './todosData'
import ChecklistItem from './components/ChecklistItem'

const itemList = todosData.map(item => <ChecklistItem key={item.id} item={item} />)

class App extends Component {
  render() {
    return (
        <div className="todo-list">
           {itemList}
        </div>
      );
  }
}

export default App;
