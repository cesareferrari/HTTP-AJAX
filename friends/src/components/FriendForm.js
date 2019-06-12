import React from 'react';

const FriendForm = props => {
  return(
    <div>
      <form>
        <input type="text" name="name" placeholder="Name"  />
        <input type="text" name="age" placeholder="Age"  />
        <input type="email" name="age" placeholder="Email"  />
        <input type="submit" value="Add Friend" />
      </form>
    </div>
  );
}

export default FriendForm;
