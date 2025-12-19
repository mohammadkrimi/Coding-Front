import { useEffect, useRef } from "react";
import { usePlayer } from "../context/PlayerContext";

function PlayerBar() {
  const { currentSong, isPlaying, togglePlayPause, stop } = usePlayer();
  const audioRef = useRef(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (!currentSong) {
      audioEl.pause();
      audioEl.src = "";
      return;
    }

    audioEl.src = currentSong.url;

    if (isPlaying) {
      audioEl
        .play()
        .catch(() => {
          // autoplay blocked or missing file
        });
    } else {
      audioEl.pause();
    }
  }, [currentSong, isPlaying]);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950/95 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] text-slate-500 uppercase tracking-wide">
            Now playing
          </p>
          <p className="text-sm font-medium text-slate-50 truncate">
            {currentSong.title}
          </p>
          <p className="text-xs text-slate-400 truncate">
            {currentSong.artist}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-9 px-4 rounded-full bg-emerald-500 text-slate-950 text-xs font-semibold hover:bg-emerald-400 transition"
            onClick={togglePlayPause}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            className="h-9 px-3 rounded-full border border-slate-600 text-slate-100 text-xs hover:bg-slate-800 transition"
            onClick={stop}
          >
            Stop
          </button>
        </div>
      </div>

      <audio ref={audioRef} onEnded={stop} />
    </div>
  );
}

export default PlayerBar;