import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserInput from './UserInput';

class Keyboard extends Component{

  constructor() {
    super()
    this.state = {
      untranslated: " "
    }
  }

handleInput = (e) => {
  if (!e.target.checkValidity()) {
  e.preventDefault();
    alert("tYpE sOmEtHiNg iN tHe BoX nExT tImE");
    return;
  }
  e.preventDefault();
  const data = new FormData(e.target);
  //manipulate data here

  fetch(`{e.target.value}`, {
    method: 'POST',
    body: data,
  });
  let translated = this.state.untranslated
  ReactDOM.render(<UserInput untranslated={translated} />, document.getElementById('root'));
}

handleTyping = (e) => {
  this.setState({
    untranslated: e.target.value
  })
}

render(){
  return(
    <div className="input-box">
      <h1>What would you like to translate?</h1>
      <form onSubmit={this.handleInput} noValidate>
        <input type="text" onChange={this.handleTyping} placeholder="type something to translate..." required />
        <button >TrAnSlAtE mE</button>
      </form>
    </div>
  )
  }
}

export default Keyboard;