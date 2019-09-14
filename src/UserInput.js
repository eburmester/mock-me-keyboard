import React, { Component } from 'react';
import TranslationList from './TranslationList';

class UserInput extends Component{
 constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
   
    e.target.focus();
    this.setState({ copySuccess: 'CoPiEd tO cLiPbOaRd!' });
  };

render() {
  return (
    <div className="input">
        {
         document.queryCommandSupported('copy') &&
          <div>
          <textarea 
              ref={(textarea) => this.textArea = textarea}
              value={this.props.untranslated}
              readOnly
          /> <button id="copybutton" onClick={this.copyToClipboard}>CoPy ThIs</button> 
            {this.state.copySuccess}
          </div>
        }

      <footer>
      < TranslationList />
      </footer>
    </div>
  );
}
}

export default UserInput;