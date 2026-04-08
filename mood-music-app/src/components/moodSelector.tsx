import type { Mood } from "../types/song";

interface Props {
  mood: Mood;
  setMood: (m: Mood) => void;
}

export default function MoodSelector({ mood, setMood }: Props) {
  const moods: Mood[] = ["happy", "sad", "party"];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {moods.map((m) => (
        <button key={m} onClick={() => setMood(m)}>
          {m}
        </button>
      ))}
    </div>
  );
}