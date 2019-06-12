import React from 'react';
import FriendPage from './FriendPage';

const FriendsList = props => {
  return(
    <div>
      {props.friends.map(friend => <FriendPage friend={friend} key={friend.id} />)}
    </div>
  );
}

export default FriendsList;
