import React from 'react';

interface DashboardProps {
  onLogout: () => void;
  userEmail: string;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, userEmail }) => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white px-8 py-4 shadow-sm flex justify-between items-center">
        <h1 className="text-3xl text-gray-800 m-0">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm">Welcome, {userEmail}</span>
          <button 
            onClick={onLogout} 
            className="bg-red-600 text-white border-none px-4 py-2 rounded cursor-pointer text-sm hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-base text-gray-600 mb-2 mt-0">Today's Date</h3>
            <p className="text-2xl font-bold text-blue-600 m-0">{currentDate}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-base text-gray-600 mb-2 mt-0">Current Time</h3>
            <p className="text-2xl font-bold text-blue-600 m-0">{currentTime}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-base text-gray-600 mb-2 mt-0">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600 m-0">1,234</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-base text-gray-600 mb-2 mt-0">Active Sessions</h3>
            <p className="text-2xl font-bold text-blue-600 m-0">56</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-gray-800 mb-4 mt-0">Recent Activity</h2>
          <div className="flex flex-col gap-2">
            <div className="flex p-3 bg-gray-50 rounded gap-4">
              <span className="font-bold text-blue-600 min-w-20">10:30 AM</span>
              <span className="text-gray-800">User logged in successfully</span>
            </div>
            <div className="flex p-3 bg-gray-50 rounded gap-4">
              <span className="font-bold text-blue-600 min-w-20">10:15 AM</span>
              <span className="text-gray-800">Database backup completed</span>
            </div>
            <div className="flex p-3 bg-gray-50 rounded gap-4">
              <span className="font-bold text-blue-600 min-w-20">9:45 AM</span>
              <span className="text-gray-800">New user registration</span>
            </div>
            <div className="flex p-3 bg-gray-50 rounded gap-4">
              <span className="font-bold text-blue-600 min-w-20">9:30 AM</span>
              <span className="text-gray-800">System maintenance completed</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-gray-800 mb-4 mt-0">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-blue-600 text-white border-none px-4 py-3 rounded cursor-pointer text-sm hover:bg-blue-700 transition-colors">
              View Reports
            </button>
            <button className="bg-blue-600 text-white border-none px-4 py-3 rounded cursor-pointer text-sm hover:bg-blue-700 transition-colors">
              Manage Users
            </button>
            <button className="bg-blue-600 text-white border-none px-4 py-3 rounded cursor-pointer text-sm hover:bg-blue-700 transition-colors">
              System Settings
            </button>
            <button className="bg-blue-600 text-white border-none px-4 py-3 rounded cursor-pointer text-sm hover:bg-blue-700 transition-colors">
              Export Data
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;