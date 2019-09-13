import React, {Component} from 'react';

class Keyboard extends Component{

handleInput = (e) => {
  e.preventDefault();
  console.log(this.state.untranslated)
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
      <form onSubmit={this.handleInput}>
        <input type="text" onChange={this.handleTyping}/>
        <button >TrAnSlAtE mE</button>
      </form>
    </div>
  )
  }
}

export default Keyboard;