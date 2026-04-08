import type { Mood, Song } from "../types/song";
import { songs } from "../data/songs";
import { getSongsByMood } from "../utils/recommendation";
import SongCard from "./songCard";


interface Props {
  mood: Mood;
}

export default function SongFeed({ mood }: Props) {
  const filteredSongs: Song[] = getSongsByMood(songs, mood);

  return (
    <div>
      {filteredSongs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}