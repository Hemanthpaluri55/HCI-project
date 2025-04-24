import React from 'react';
import { Utensils, Leaf, Clock } from 'lucide-react';
import { Meal } from '../../types/nutrition';

interface NutritionTipsProps {
  meals: Meal[];
}

const NutritionTips: React.FC<NutritionTipsProps> = ({ meals }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Utensils size={20} className="mr-2 text-green-600" />
        Nutrition Recommendations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal, index) => (
          <div 
            key={index} 
            className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div 
              className="h-32 bg-cover bg-center" 
              style={{ backgroundImage: `url(${meal.imageUrl})` }}
            ></div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-800">{meal.name}</h3>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  {meal.type}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{meal.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {meal.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="inline-flex items-center px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                  >
                    <Leaf size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {meal.prepTime} prep
                </span>
                <span>{meal.calories} kcal</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionTips;