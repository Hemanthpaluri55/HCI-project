import React from 'react';
import { Clock, CalendarCheck, Activity, BarChart3 } from 'lucide-react';
import { Workout } from '../../types/workout';

interface WorkoutPlanProps {
  title: string;
  workouts: Workout[];
}

const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ title, workouts }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Activity size={20} className="mr-2 text-indigo-600" />
        {title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {workouts.map((workout, index) => (
          <div 
            key={index} 
            className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-gray-800">{workout.name}</h3>
                <p className="text-sm text-gray-500">{workout.type}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                workout.intensity === 'High' 
                  ? 'bg-red-100 text-red-700' 
                  : workout.intensity === 'Medium' 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'bg-green-100 text-green-700'
              }`}>
                {workout.intensity}
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm text-gray-600">{workout.description}</p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {workout.duration} min
              </span>
              <span className="flex items-center">
                <BarChart3 size={14} className="mr-1" />
                {workout.caloriesBurn} kcal
              </span>
              <span className="flex items-center">
                <CalendarCheck size={14} className="mr-1" />
                {workout.sets} sets
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan;