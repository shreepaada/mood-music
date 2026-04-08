import type { Song } from "../types/song";

interface Props {
  song: Song;
  onLike?: (song: Song) => void;
  onDislike?: (song: Song) => void;
}

export default function SongCard({ song, onLike, onDislike }: Props) {
  const openYouTube = () => {
    const query = `${song.title} ${song.artist}`;
    window.open(
      `https://music.youtube.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  };

  const openSpotify = () => {
    const query = `${song.title} ${song.artist}`;
    window.open(
      `https://open.spotify.com/search/${encodeURIComponent(query)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        background: "#1f2937",
        color: "white",
        marginBottom: "12px",
      }}
    >
      <h3>{song.title}</h3>
      <p style={{ opacity: 0.7 }}>{song.artist}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={openYouTube}>▶ YouTube</button>
        <button onClick={openSpotify}>🎧 Spotify</button>

        {onLike && (
          <button onClick={() => onLike(song)}>👍</button>
        )}

        {onDislike && (
          <button onClick={() => onDislike(song)}>👎</button>
        )}
      </div>
    </div>
  );
}