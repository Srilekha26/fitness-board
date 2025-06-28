// src/types/workout.ts

export type Exercise = {
  name: string;
  reps?: string;
  time?: string;
  muscles: string;
  gif?: string;
  highlightImage?: string;
  purpose?: string;
};

export type WorkoutDay = {
  day: string;
  warmup: Exercise[];
  foundational: Exercise[];
  blockA: Exercise[];
  blockB: Exercise[];
  finisher: Exercise[];
  cooldown: Exercise[];
};
