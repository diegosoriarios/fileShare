import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: ''
    }
  }

  saveFile = () => {
    console.log(this.state.file)
    axios.post('https://file.io/?expires=1', {
      file: this.state
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <input 
          type="file"
          onChange={e => this.setState({file: e.target.value})}
        /><br />
        <button onClick={() => this.saveFile()}>Save</button>
      </div>
    );
  }
}

export default App;
