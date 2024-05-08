import React, { useState } from 'react';

interface Submission {
  username: string;
  fullname: string;
  id: string;
}

const SubmissionHomePage: React.FC = () => {
  const [Submission, setSubmission] = useState<Submission>({
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
        <p>Username: {Submission.username}</p>
        <p>Full Name: {Submission.fullname}</p>
        <p>ID: {Submission.id}</p>
      </div>
    </div>
  );
}

export default SubmissionHomePage;
