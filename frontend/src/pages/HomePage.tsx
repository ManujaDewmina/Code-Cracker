import React from 'react';

const HomePage: React.FC = () => {
  const handleLogin = () => {
    window.location.href = '/user-home';
  };

  const handleCreateAccount = () => {
    window.location.href = '/create-account'; 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Home Page</h1>
      <div style={{ textAlign: 'center' }}>
        <input type="text" placeholder="Username" style={{ marginBottom: '10px' }} />
        <br />
        <input type="password" placeholder="Password" style={{ marginBottom: '10px' }} />
        <br />
        <button onClick={handleLogin} style={{ marginBottom: '30px' }}>Login</button>
        <br />
        <button onClick={handleCreateAccount}>Create Account</button>
      </div>
    </div>
  );
}

export default HomePage;
