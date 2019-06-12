import React from 'react';
import FriendPage from './FriendPage';
import FriendForm from './FriendForm';

const FriendsList = props => {
  return(
    <div>
      {props.friends.map(friend => <FriendPage friend={friend} key={friend.id} />)}
      <FriendForm />
    </div>
  );
}

export default FriendsList;
