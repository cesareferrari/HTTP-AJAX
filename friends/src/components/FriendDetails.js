import React from 'react';

const FriendDetails = props => {
  return(
    <div>
      {props.friend.id} - 
      {props.friend.name} - 
      {props.friend.age} - 
      {props.friend.email}
    </div>
  );
}

export default FriendDetails;
