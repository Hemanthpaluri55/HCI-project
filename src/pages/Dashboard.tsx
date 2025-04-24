import React from 'react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import WorkoutPlan from '../components/Dashboard/WorkoutPlan';
import YogaRoutines from '../components/Dashboard/YogaRoutines';
import PostureTips from '../components/Dashboard/PostureTips';
import NutritionTips from '../components/Dashboard/NutritionTips';
import { User } from '../types/user';
import { sampleWorkouts } from '../data/sampleWorkouts';
import { sampleYogaRoutines } from '../data/sampleYogaRoutines';
import { samplePostures } from '../data/samplePostures';
import { sampleMeals } from '../data/sampleMeals';

interface DashboardProps {
  user: User | null;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div>
      <DashboardHeader user={user} />
      
      <WorkoutPlan 
        title="Today's Recommended Workouts" 
        workouts={sampleWorkouts} 
      />
      
      <YogaRoutines routines={sampleYogaRoutines} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PostureTips postures={samplePostures} />
        <NutritionTips meals={sampleMeals} />
      </div>
    </div>
  );
};

export default Dashboard;