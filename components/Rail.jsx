"use client";
import { useEffect, useState } from "react";

export default function Rail({ items }) {
  const [pos, setPos] = useState(items.map(() => 0));
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const root = document.documentElement;
    const max = () => Math.max(1, root.scrollHeight - innerHeight);
    let tops = [];
    const update = () => {
      const p = Math.min(1, Math.max(0, scrollY / max()));
      root.style.setProperty("--p", p);
      let c = 0;
      tops.forEach((t, i) => { if (p >= t - 0.001) c = i; });
      setCur(c);
    };
    const place = () => {
      tops = items.map((it, i) => i === 0 ? 0 : Math.min(1, (document.getElementById(it.id).offsetTop - innerHeight * 0.35) / max()));
      setPos(tops); update();
    };
    place();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", place);
    addEventListener("load", place);
    return () => { removeEventListener("scroll", update); removeEventListener("resize", place); removeEventListener("load", place); };
  }, [items]);

  return (
    <>
      <div className="bar" aria-hidden="true" />
      <nav className="rail" aria-label="Page sections">
        <div className="done" />
        {items.map((it, i) => (
          <a key={it.id} href={"#" + it.id} className={i === cur ? "on" : ""} style={{ top: pos[i] * 100 + "%" }}><b>{it.label}</b><i /></a>
        ))}
        <svg className="plane" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
      </nav>
    </>
  );
}
