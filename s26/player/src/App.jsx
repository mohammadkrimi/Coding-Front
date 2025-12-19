import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
  return (
    <PlayerProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50">
        <header className="pt-10 text-center px-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Spotify-like Playlist
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Click a song to play, pause or change from the bottom bar.
          </p>
        </header>

        <SongList />
        <PlayerBar />
      </div>
    </PlayerProvider>
  );
}

export default App;