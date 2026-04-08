import { useState } from "react";
import type { Mood } from "./types/song";
import MoodSelector from "./components/moodSelector";
import SongFeed from "./components/songFeed";
export default function App() {
  const [mood, setMood] = useState<Mood>("happy");

  return (
    <div>
      <h1>Mood Music</h1>
      <MoodSelector mood={mood} setMood={setMood} />
      <SongFeed mood={mood} />
    </div>
  );
}
