import React from 'react';
import ProfileForm from '../components/UserInput/ProfileForm';
import { User } from '../types/user';

interface ProfileProps {
  user: User | null;
  updateUser: (userData: Partial<User>) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, updateUser }) => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Your Profile</h1>
        <p className="text-gray-600 mt-1">
          Update your information to get personalized fitness recommendations
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <ProfileForm user={user} onSave={updateUser} />
        
        {user && (
          <div className="bg-white rounded-xl shadow-sm p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Workouts Completed</p>
                <p className="text-2xl font-semibold text-indigo-700">{user.workoutsCompleted || 0}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Current Streak</p>
                <p className="text-2xl font-semibold text-purple-700">{user.streak || 0} days</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Flexibility Level</p>
                <p className="text-2xl font-semibold text-teal-700">{user.flexibilityLevel || 'Beginner'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;