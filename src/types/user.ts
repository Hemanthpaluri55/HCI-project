export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  weight: number;
  gender: string;
  goal: string;
  activityLevel: string;
  workoutsCompleted?: number;
  streak?: number;
  level?: number;
  flexibilityLevel?: string;
  caloriesTarget?: number;
  healthConcerns?: string[];
  fitnessLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
  preferredWorkoutTime?: 'Morning' | 'Afternoon' | 'Evening';
}