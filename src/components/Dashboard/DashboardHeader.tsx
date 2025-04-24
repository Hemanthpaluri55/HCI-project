import React from 'react';
import { User } from '../../types/user';
import { Calendar, TrendingUp } from 'lucide-react';

interface DashboardHeaderProps {
  user: User | null;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ user }) => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Welcome back{user?.name ? `, ${user.name}` : ''}
        </h1>
        <div className="flex items-center mt-2 md:mt-0 text-gray-500">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{formattedDate}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">Today's Goal</p>
              <p className="text-xl font-semibold text-gray-800">
                {user?.goal || 'Get fit'}
              </p>
            </div>
            <div className="bg-indigo-100 p-2 rounded-lg">
              <TrendingUp size={20} className="text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">Streak</p>
              <p className="text-xl font-semibold text-gray-800">
                {user?.streak || 0} days
              </p>
            </div>
            <div className="bg-orange-100 p-2 rounded-lg">
              <Calendar size={20} className="text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">Calories Target</p>
              <p className="text-xl font-semibold text-gray-800">
                {user?.caloriesTarget || 2000} kcal
              </p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp size={20} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">Flexibility Level</p>
              <p className="text-xl font-semibold text-gray-800">
                {user?.flexibilityLevel || 'Beginner'}
              </p>
            </div>
            <div className="bg-purple-100 p-2 rounded-lg">
              <TrendingUp size={20} className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;