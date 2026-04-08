export type Mood = "happy" | "sad" | "party";

export interface Song {
  id: number;
  title: string;
  artist: string;
  mood: Mood[];
  genre: string[];
  energy: number;
}

export interface UserProfile {
  mood: Mood;
  likedGenres: Record<string, number>;
  dislikedGenres: Record<string, number>;
  energyPreference: number;
}