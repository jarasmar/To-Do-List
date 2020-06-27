import React from 'react';
import './App.css';
import ListItems from './ListItems.js'

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

        <ListItems items={this.state.items}></ListItems>
      </div>
    );
  }
}

export default App;
