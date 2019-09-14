import React, {Component} from 'react';
import UserInput from './UserInput';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TranslationList extends Component{

  render() {
    return (
      <Router>
      <div className="translation-list">
          <button><Link to="/home">TrAnSlAtE sOmEtHiNg ElSe</Link></button>
      <Route path="/home" component={UserInput} />
      </div>
      </Router>
    );
  }
  
}

export default TranslationList;