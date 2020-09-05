import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 20},
      {name: 'Nada', age: 18}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked')
    this.setState({
      persons:[
        {name: newName, age: 26},
        {name: 'Manu', age: 20},
        {name: 'Nada', age: 25}
      ]})
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name: "Max", age: 26},
        {name: event.target.value, age: 20},
        {name: 'Nada', age: 25}
      ]})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!!</p>
        <button
          style={style}
         onClick={() => this.switchNameHandler("Max!!")}>Switch Name</button>
        <Person 
           name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
        <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this, 'mario')}
           changed={this.nameChangeHandler}> My Hobbies: Reacting </Person>
        <Person
           name={this.state.persons[2].name} 
           age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
