import React, { useState } from 'react';
import { Activity, Clock, Heart } from 'lucide-react';
import { User } from '../types/user';

interface OnboardingProps {
  onComplete: (userData: Partial<User>) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<User>>({
    name: '',
    age: 25,
    weight: 70,
    gender: 'Not specified',
    healthConcerns: [],
    fitnessLevel: 'Beginner',
    preferredWorkoutTime: 'Morning',
    goal: 'Get fit',
    activityLevel: 'Moderate'
  });

  const healthConcernOptions = [
    'Back Pain',
    'Joint Pain',
    'High Blood Pressure',
    'Diabetes',
    'Stress',
    'Insomnia',
    'Poor Posture',
    'Limited Mobility'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHealthConcernToggle = (concern: string) => {
    setFormData(prev => {
      const concerns = prev.healthConcerns || [];
      if (concerns.includes(concern)) {
        return {
          ...prev,
          healthConcerns: concerns.filter(c => c !== concern)
        };
      }
      return {
        ...prev,
        healthConcerns: [...concerns, concern]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mx-auto mb-4">
            <Activity size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome to FitMind AI</h1>
          <p className="mt-2 text-gray-600">Let's personalize your fitness journey</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`w-1/3 h-1 rounded-full ${
                  i <= step ? 'bg-emerald-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    min="1"
                    max="300"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Not specified">Prefer not to say</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Do you have any health concerns?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {healthConcernOptions.map(concern => (
                      <button
                        key={concern}
                        type="button"
                        onClick={() => handleHealthConcernToggle(concern)}
                        className={`p-3 rounded-lg text-sm font-medium ${
                          formData.healthConcerns?.includes(concern)
                            ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500'
                            : 'bg-gray-50 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {concern}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="fitnessLevel" className="block text-sm font-medium text-gray-700">
                    Current Fitness Level
                  </label>
                  <select
                    id="fitnessLevel"
                    name="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
                    What's your primary fitness goal?
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="Lose weight">Lose weight</option>
                    <option value="Build muscle">Build muscle</option>
                    <option value="Improve flexibility">Improve flexibility</option>
                    <option value="Reduce stress">Reduce stress</option>
                    <option value="Get fit">Get fit</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredWorkoutTime" className="block text-sm font-medium text-gray-700">
                    When do you prefer to workout?
                  </label>
                  <select
                    id="preferredWorkoutTime"
                    name="preferredWorkoutTime"
                    value={formData.preferredWorkoutTime}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">
                    Current Activity Level
                  </label>
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="Sedentary">Sedentary (little to no exercise)</option>
                    <option value="Light">Light (1-3 days per week)</option>
                    <option value="Moderate">Moderate (3-5 days per week)</option>
                    <option value="Active">Active (6-7 days per week)</option>
                    <option value="Very Active">Very Active (2x per day)</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                {step === 3 ? (
                  <>
                    <Heart size={18} className="mr-2" />
                    Complete Profile
                  </>
                ) : (
                  <>
                    <Clock size={18} className="mr-2" />
                    Next Step
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center text-sm text-gray-500">
          Step {step} of 3 - {step === 1 ? 'Basic Info' : step === 2 ? 'Health Profile' : 'Preferences'}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;