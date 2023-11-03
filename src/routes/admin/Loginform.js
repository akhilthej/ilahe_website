import React, { useRef } from 'react';
import Dashboard from './Dashboard';



function LoginWithLocalStorage() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem('emailData');
  const getPassword = localStorage.getItem('passwordData');

  const handleSubmit = () => {
    if (email.current.value === 'admin@ilahe.in' && password.current.value === '12345') {
      localStorage.setItem('emailData', 'admin@ilahe.in');
      localStorage.setItem('passwordData', '12345');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {getEmail && getPassword ? (
        <Dashboard />
      ) : (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                ref={email}
                className="w-full p-2 border border-gray-300"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                ref={password}
                className="w-full p-2 border border-gray-300"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginWithLocalStorage;
