import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
  }

  addFriend = event => {
    event.preventDefault();
    console.log(event.target.input[1]);

    axios.post('http://10.0.0.3:5000/friends',
      {name: 'Test',
       age: 6,
       email: 'test@example.com'})
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addFriend}>
          <input type="text" name="name" placeholder="Name"  />
          <input type="text" name="age" placeholder="Age"  />
          <input type="email" name="age" placeholder="Email"  />
          <input type="submit" value="Add Friend" />
        </form>
      </div>
    );
  }
}

export default FriendForm;
