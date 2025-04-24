import React from 'react';
import { Feather, Clock, Heart, MoveHorizontal } from 'lucide-react';
import { YogaRoutine } from '../../types/yoga';

interface YogaRoutinesProps {
  routines: YogaRoutine[];
}

const YogaRoutines: React.FC<YogaRoutinesProps> = ({ routines }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Feather size={20} className="mr-2 text-teal-600" />
        Recommended Yoga Routines
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {routines.map((routine, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div 
              className="h-36 bg-cover bg-center" 
              style={{ backgroundImage: `url(${routine.imageUrl})` }}
            ></div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-800">{routine.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  routine.level === 'Advanced' 
                    ? 'bg-purple-100 text-purple-700' 
                    : routine.level === 'Intermediate' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                }`}>
                  {routine.level}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-3">{routine.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {routine.duration} min
                </span>
                <span className="flex items-center">
                  <Feather size={14} className="mr-1" />
                  {routine.poses} poses
                </span>
                <span className="flex items-center">
                  <Feather size={14} className="mr-1" />
                  {routine.focus}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaRoutines;