import React from 'react';
import './App.css';
import ListItems from './ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Add the icons we need to the library
library.add(faTrash);

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      currentItem : {
        text : '',
        key : ''
      }
    }
    // hard bind the functions to the constructor
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  // Changes the state with the input value from the form
  handleInput(e) {
    this.setState({
      currentItem : {
        text : e.target.value,
        key : Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    // if text field is not empty
    if(newItem.text !== '') {
      // add items to list (Destructuring Assignment)
      const newItems = [...this.state.items, newItem];
      // update state
      this.setState({
        // add new element to array and reset currentItem
        items : newItems,
        currentItem : {
          text : '',
          key : ''
        }
      })

    }
  }

  deleteItem(key) {
    // Store in a const all the items that dont match the key
    const filteredItems = this.state.items.filter(item => 
      item.key !== key);
    
    // update state to have only the filtered items 
    this.setState ({
      items : filteredItems
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            
            <input type='text' placeholder='Enter Text'
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            
            <button type='submit'>Add</button>
          </form>
        </header>

        <ListItems items={this.state.items}
        deleteItem={this.deleteItem}></ListItems>
      </div>
    );
  }
}

export default App;
