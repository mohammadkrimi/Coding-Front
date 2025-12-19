import { songs } from "../utils/songs";
import SongItem from "./SongItem";

function SongList() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 shadow-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-50">
              Classic Hits
            </h2>
            <p className="text-xs text-slate-400">
              A simple Spotify-like playlist UI.
            </p>
          </div>
          <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-300">
            {songs.length} songs
          </span>
        </div>

        <ul>
          {songs.map((song, index) => (
            <SongItem key={song.id} song={song} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SongList;