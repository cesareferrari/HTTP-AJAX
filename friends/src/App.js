import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://10.0.0.3:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch()
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
