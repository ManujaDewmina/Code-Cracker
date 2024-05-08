import React, { useState } from 'react';

const CreateAccountPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  // Function to generate a random ID
  const generateId = () => {
    const randomId = Math.random().toString(36).substring(2, 10); // Generate a random string
    setId(randomId); // Update the state with the generated ID
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to create account using the entered data
    console.log('Account created:', { username, fullName, password, id });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Create Account</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '10px' }} required />
        <br />
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ marginBottom: '10px' }} required />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '10px' }} required />
        <br />
        <button type="button" onClick={generateId} style={{ marginBottom: '10px' }}>Generate ID</button>
        <p>Auto-generated ID: {id}</p>
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
