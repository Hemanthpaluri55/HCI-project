import React, { useState } from 'react';
import AppLayout from './components/Layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import { User } from './types/user';

function App() {
  const [currentPage, setCurrentPage] = useState<'onboarding' | 'dashboard' | 'profile'>('onboarding');
  const [user, setUser] = useState<User | null>(null);

  const handleOnboardingComplete = (userData: Partial<User>) => {
    const newUser: User = {
      id: '1',
      name: userData.name || '',
      email: 'user@example.com',
      age: userData.age || 25,
      weight: userData.weight || 70,
      gender: userData.gender || 'Not specified',
      goal: userData.goal || 'Get fit',
      activityLevel: userData.activityLevel || 'Moderate',
      workoutsCompleted: 0,
      streak: 0,
      level: 1,
      flexibilityLevel: 'Beginner',
      caloriesTarget: 2000,
      healthConcerns: userData.healthConcerns || [],
      fitnessLevel: userData.fitnessLevel || 'Beginner',
      preferredWorkoutTime: userData.preferredWorkoutTime || 'Morning'
    };
    
    setUser(newUser);
    setCurrentPage('dashboard');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({
        ...user,
        ...userData
      });
    }
  };

  if (currentPage === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="font-sans">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      
      <AppLayout user={user}>
        {currentPage === 'dashboard' && <Dashboard user={user} />}
        {currentPage === 'profile' && <Profile user={user} updateUser={updateUser} />}
        
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 flex justify-around p-2">
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className={`p-3 rounded-lg ${currentPage === 'dashboard' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentPage('profile')}
            className={`p-3 rounded-lg ${currentPage === 'profile' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500'}`}
          >
            Profile
          </button>
        </div>
      </AppLayout>
    </div>
  );
}

export default App