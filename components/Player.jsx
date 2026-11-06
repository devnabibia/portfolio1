"use client";
import { useEffect, useRef, useState } from "react";
import { songs } from "../data";

export default function Player() {
  const audio = useRef(null);
  const [i, setI] = useState(0);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    if (on) a.play().catch(() => setOn(false)); else a.pause();
  }, [on, i]);
  if (!songs.length) return null;
  const next = () => setI((i + 1) % songs.length);
  return (
    <div className="mp">
      <button onClick={() => setOn(!on)} aria-label={on ? "Pause music" : "Play music"} data-c={on ? "Pause" : "Play"}>{on ? "❚❚" : "▶"}</button>
      <div><small>Now playing · {i + 1}/{songs.length}</small><b>{songs[i].title}</b></div>
      <button onClick={next} aria-label="Next song" data-c="Next">▶▶</button>
      <audio ref={audio} src={songs[i].src} onEnded={next} preload="none" />
    </div>
  );
}
