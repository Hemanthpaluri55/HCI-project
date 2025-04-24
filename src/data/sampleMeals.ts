import { Meal } from '../types/nutrition';

export const sampleMeals: Meal[] = [
  {
    name: 'Protein-Packed Breakfast Bowl',
    type: 'Breakfast',
    description: 'Greek yogurt with berries, nuts, and a drizzle of honey',
    calories: 320,
    prepTime: '5 min',
    tags: ['High Protein', 'Low Carb'],
    imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Energizing Green Smoothie',
    type: 'Snack',
    description: 'Spinach, banana, almond milk, and chia seed smoothie',
    calories: 180,
    prepTime: '3 min',
    tags: ['Vegan', 'Energy Boost'],
    imageUrl: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Mediterranean Lunch Bowl',
    type: 'Lunch',
    description: 'Quinoa with roasted vegetables, chickpeas, and tahini dressing',
    calories: 420,
    prepTime: '15 min',
    tags: ['Plant-based', 'Protein'],
    imageUrl: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];