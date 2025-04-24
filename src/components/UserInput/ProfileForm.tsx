import React, { useState } from 'react';
import { User } from '../../types/user';
import { Save } from 'lucide-react';

interface ProfileFormProps {
  user: User | null;
  onSave: (userData: Partial<User>) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user, onSave }) => {
  const [age, setAge] = useState<number>(user?.age || 30);
  const [weight, setWeight] = useState<number>(user?.weight || 70);
  const [gender, setGender] = useState<string>(user?.gender || 'Not specified');
  const [goal, setGoal] = useState<string>(user?.goal || 'Get fit');
  const [activityLevel, setActivityLevel] = useState<string>(user?.activityLevel || 'Moderate');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      age,
      weight,
      gender,
      goal,
      activityLevel
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Profile</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              id="age"
              type="number"
              min="1"
              max="120"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Weight (kg)
            </label>
            <input
              id="weight"
              type="number"
              min="1"
              max="300"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Not specified">Prefer not to say</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
              Fitness Goal
            </label>
            <select
              id="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
              <option value="Lose weight">Lose weight</option>
              <option value="Build muscle">Build muscle</option>
              <option value="Improve flexibility">Improve flexibility</option>
              <option value="Reduce stress">Reduce stress</option>
              <option value="Get fit">Get fit</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
              Activity Level
            </label>
            <select
              id="activity"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
              <option value="Sedentary">Sedentary (little to no exercise)</option>
              <option value="Light">Light (1-3 days per week)</option>
              <option value="Moderate">Moderate (3-5 days per week)</option>
              <option value="Active">Active (6-7 days per week)</option>
              <option value="Very Active">Very Active (2x per day)</option>
            </select>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-sm transition-all flex items-center justify-center"
          >
            <Save size={18} className="mr-2" />
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;