import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Posture } from '../../types/posture';

interface PostureTipsProps {
  postures: Posture[];
}

const PostureTips: React.FC<PostureTipsProps> = ({ postures }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <AlertCircle size={20} className="mr-2 text-orange-600" />
        Posture Suggestions
      </h2>

      <div className="space-y-4">
        {postures.map((posture, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex-1 mb-3 md:mb-0">
              <h3 className="font-medium text-gray-800 mb-1">{posture.title}</h3>
              <p className="text-sm text-gray-600">{posture.description}</p>
            </div>
            <div className="self-center md:self-auto md:ml-4">
              <button className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                <span className="text-sm font-medium mr-1">Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostureTips;