import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      }

    }
  }

  componentDidMount() {
    axios.get('http://10.0.0.3:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(error => console.log(error))
  }

  addFriend = event => {
    event.preventDefault();
    console.log(event.target);

    axios.post('http://10.0.0.3:5000/friends', this.state.newFriend)
      .then(res => this.setState({friends: res.data}))
      .catch(error => console.log(error))
  }

  changeAge = event => {
    this.setState(
      {
        newFriend: {
          age: event.target.value
        }
      });
  }

  changeName = event => {
    this.setState(
      {
        newFriend: {
          name: event.target.value
        }
      });
  }

  changeEmail = event => {
    this.setState(
      {
        newFriend: {
          email: event.target.value
        }
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsList friends={this.state.friends} />

        <form onSubmit={this.addFriend}>

          <input type="text"
            name="name"
            placeholder="Name"  
            value={this.state.newFriend.name}
            onChange={this.changeName}
          />

          <input type="text"
            name="age"
            placeholder="Age"
            value={this.state.newFriend.age}
            onChange={this.changeAge}
          />

          <input type="email"
            name="email"
            placeholder="Email"
            value={this.state.newFriend.email}
            onChange={this.changeEmail}
          />

          <input type="submit" value="Add Friend" />
        </form>
      </div>
    );
  }
}

export default App;
