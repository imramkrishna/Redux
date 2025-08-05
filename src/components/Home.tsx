import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { removeUser, setUser } from '../features/todo/userSlices';
import { useDispatch } from 'react-redux';
interface LoginFormData {
  email: string;
  password: string;
}

const Home: React.FC = () => {
    const dispatch=useDispatch()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock login - in real app, you'd make an API call
    if (formData.email === 'user@example.com' && formData.password === 'password') {
      dispatch(setUser(formData.email))
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    dispatch(removeUser(formData))
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} userEmail={formData.email} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please sign in to your account
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded text-base box-border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded text-base box-border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="bg-blue-600 text-white p-3 border-none rounded text-base cursor-pointer mt-4 hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 p-4 bg-gray-100 rounded text-sm text-center">
          <p className="font-bold mb-2">Demo credentials:</p>
          <p className="mb-1">Email: user@example.com</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  );
};

export default Home;