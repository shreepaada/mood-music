import type { Song, Mood } from "../types/song";

export function getSongsByMood(songs: Song[], mood: Mood): Song[] {
  return songs.filter((song) => song.mood.includes(mood));
}