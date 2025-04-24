export interface Workout {
  name: string;
  type: string;
  intensity: 'Low' | 'Medium' | 'High';
  description: string;
  duration: number;
  caloriesBurn: number;
  sets: number;
  imageUrl?: string;
}