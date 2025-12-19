import { usePlayer } from "../context/PlayerContext";

function SongItem({ song, index }) {
  const { currentSong, isPlaying, playSong } = usePlayer();

  const isActive = currentSong?.id === song.id;
  const isCurrentPlaying = isActive && isPlaying;

  const handleClick = () => {
    playSong(song);
  };

  return (
    <li
      className={`group flex items-center px-4 py-2 text-sm transition-colors cursor-pointer
      ${isActive ? "bg-slate-800/80" : "bg-slate-900 hover:bg-slate-800/60"}`}
      onClick={handleClick}
    >
      <div className="w-8 text-xs text-slate-500">
        {isCurrentPlaying ? "♪" : index + 1}
      </div>

      <div className="flex-1 min-w-0 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p
            className={`truncate ${
              isCurrentPlaying
                ? "text-emerald-400 font-semibold"
                : "text-slate-50"
            }`}
          >
            {song.title}
          </p>
          <p className="text-xs text-slate-400 truncate">{song.artist}</p>
        </div>
      </div>

      <button
        type="button"
        className="ml-3 h-7 w-7 rounded-full border border-slate-600 flex items-center justify-center text-[11px] text-slate-100 hover:bg-slate-700 transition"
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      >
        {isCurrentPlaying ? "⏸" : "▶"}
      </button>
    </li>
  );
}

export default SongItem;