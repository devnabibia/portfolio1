"use client";
import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function Board({ rows }) {
  const ref = useRef(null);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers = [];
    ref.current.querySelectorAll(".fl").forEach((el, n) => {
      const t = el.dataset.text;
      el.textContent = "";
      el.setAttribute("aria-label", t);
      [...t].forEach((c, i) => {
        const s = document.createElement("span");
        s.setAttribute("aria-hidden", "true");
        s.textContent = c === " " ? "\u00a0" : reduce ? c : " ";
        el.appendChild(s);
        if (reduce || c === " ") return;
        let k = 0;
        const flips = 6 + (i % 5);
        timers.push(setTimeout(() => {
          const id = setInterval(() => {
            if (k++ >= flips) { s.textContent = c; clearInterval(id); return; }
            s.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
          }, 55);
          timers.push(id);
        }, 1400 + n * 350 + i * 45));
      });
    });
    return () => timers.forEach((t) => { clearTimeout(t); clearInterval(t); });
  }, []);

  return (
    <div className="board" role="table" aria-label="What I do" ref={ref}>
      <div className="hd"><span>DEPARTURES</span><span>STATUS</span></div>
      {rows.map(([no, text, status, ok]) => (
        <div className="row" key={no}><span>{no}</span><span className="fl" data-text={text}></span><span className={"st" + (ok ? " ok" : "")}>{status}</span></div>
      ))}
    </div>
  );
}
