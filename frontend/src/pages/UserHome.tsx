import React, { useState } from 'react';

interface User {
  username: string;
  fullname: string;
  id: string;
}

const UserHomePage: React.FC = () => {
  const [user, setUser] = useState<User>({
    username: "john_doe",
    fullname: "John Doe",
    id: "123456"
  });

  const updateUser = () => {
    const newUsername = prompt("Enter new username:");
    const newFullname = prompt("Enter new full name:");
    if (newUsername && newFullname) {
      setUser({
        ...user,
        username: newUsername,
        fullname: newFullname
      });
    }
  };

  const deleteUser = () => {
    // Logic to delete user
  };

  const userHome = () => {
    window.location.href = '/user-home'; 
  };

  const challengeHome = () => {
    window.location.href = '/challenge-home'; 
  };

  const submissionHome = () => {
    window.location.href = '/submission-home'; 
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
          <li style={{ marginRight: '10px' }}><button onClick={userHome} >User</button></li>
          <li style={{ marginRight: '10px' }}><button onClick={challengeHome} >Challenges</button></li>
          <li><button onClick={submissionHome} >Submissions</button></li>
        </ul>
      </nav>

      <div>
        <img src="user_icon_url" alt="User Icon" />
        <p>Username: {user.username}</p>
        <p>Full Name: {user.fullname}</p>
        <p>ID: {user.id}</p>
      </div>

      <div>
        <button onClick={updateUser} style={{ marginRight: '30px' }}>Update User</button>
        <button onClick={deleteUser}>Delete User</button>
      </div>
    </div>
  );
}

export default UserHomePage;
