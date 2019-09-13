import React, { Component } from 'react';
import Keyboard from './Keyboard';
import UserInput from './UserInput';

class App extends Component{
  render() {
    return (
    <div className="App">
      <header className="App-header">
        < Keyboard />
        < UserInput />
       </header>
    </div>
  );
}
}

export default App;
