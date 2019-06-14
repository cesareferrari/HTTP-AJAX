import React from 'react';
import FriendDetails from './FriendDetails';

const FriendsList = props => {
  return(
    props.friends.map(friend => <FriendDetails friend={friend} />)
  );
}

export default FriendsList;
