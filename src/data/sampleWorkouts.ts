import { Workout } from '../types/workout';

export const sampleWorkouts: Workout[] = [
  {
    name: 'Morning Cardio Boost',
    type: 'Cardio',
    intensity: 'Medium',
    description: 'A mix of jumping jacks, high knees, and burpees to get your heart rate up.',
    duration: 20,
    caloriesBurn: 200,
    sets: 3
  },
  {
    name: 'Core Strengthening',
    type: 'Strength',
    intensity: 'Medium',
    description: 'Focus on your abs with planks, crunches, and leg raises.',
    duration: 15,
    caloriesBurn: 150,
    sets: 3
  },
  {
    name: 'Upper Body Power',
    type: 'Strength',
    intensity: 'High',
    description: 'Push-ups, dumbbell rows, and shoulder presses for upper body strength.',
    duration: 25,
    caloriesBurn: 220,
    sets: 4
  },
  {
    name: 'Leg Day Routine',
    type: 'Strength',
    intensity: 'High',
    description: 'Squats, lunges, and calf raises to build lower body strength.',
    duration: 30,
    caloriesBurn: 280,
    sets: 4
  }
];