import React, { useState } from 'react';

interface Challenge {
  username: string;
  fullname: string;
  id: string;
}

const ChallengeHomePage: React.FC = () => {
  const [Challenge, setChallenge] = useState<Challenge>({
    username: "john_doe",
    fullname: "John Doe",
    id: "123456"
  });

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
        <p>Username: {Challenge.username}</p>
        <p>Full Name: {Challenge.fullname}</p>
        <p>ID: {Challenge.id}</p>
      </div>
    </div>
  );
}

export default ChallengeHomePage;
