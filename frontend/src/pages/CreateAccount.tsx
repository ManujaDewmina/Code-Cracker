import React, { useState } from 'react';
import { createUser } from '../api/UserEndpoints';
import axios from 'axios';

const CreateAccountPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullName] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const generateId = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    setId(randomNumber.toString()); 
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !fullname || !userpassword || !id) {
      setError('Click Generate ID button');
      return;
    }

    const user = { id: parseInt(id), username, fullname, userpassword};
    try {
      await createUser(axios, user);
      window.location.href = '/';
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Create Account</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '10px' }} required />
        <br />
        <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullName(e.target.value)} style={{ marginBottom: '10px' }} required />
        <br />
        <input type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserPassword(e.target.value)} style={{ marginBottom: '10px' }} required />
        <br />
        <button type="button" onClick={generateId} style={{ marginBottom: '10px' }}>Generate ID</button>
        <p>Auto-generated ID: {id}</p>
        <br />
        <button type="submit">Create Account</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default CreateAccountPage;
