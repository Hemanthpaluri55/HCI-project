export interface YogaRoutine {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  duration: number;
  poses: number;
  focus: string;
  imageUrl: string;
}