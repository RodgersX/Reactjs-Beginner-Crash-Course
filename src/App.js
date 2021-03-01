import React, { Component } from 'react'
import './App.css'


import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Mawira', age: 24},
      {name: 'Justin', age: 25},
      {name: 'Chris', age: 23}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Rodgers'

    // setState() helps update the state and update the DOM
    this.setState({
      persons: [
        {name: newName, age: 26},
        {name: 'Justin', age: 25},
        {name: 'Chris', age: 26}
      ]
    })
  }

  // function for two-way binding
  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {name: 'Max', age: 26},
        {name: e.target.value, age: 25},
        {name: 'Chris', age: 26}
      ]
    })
  }

  render() {
    // inline styling in reactjs
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      // #JSX
      // the click prop is a reference to the
      // switchNameHandler
      // methodName.bind(this, 'arguments')
      // the bind method recommended to the anonymous function way
      // changed prop to facilitate two-way binding
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
        style={ style }
        onClick={ () => this.switchNameHandler('Christabel') }>Switch Name</button>
        <Person 
        name={ this.state.persons[0].name } 
        age={ this.state.persons[0].age }
        click={ this.switchNameHandler.bind(this, 'Rodgers') } />
        <Person 
        name={ this.state.persons[1].name } 
        age={ this.state.persons[1].age }
        changed={ this.nameChangedHandler }>My hobbies: Sneaker Collecting</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    );
  }
  
}

export default App;
