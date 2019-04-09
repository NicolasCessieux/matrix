import React, { Component } from 'react';
import MatrixNico from './MatrixNico';
import Col from './Col';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="App">
        <MatrixNico />
      </div>
    );
  }
}

export default App;