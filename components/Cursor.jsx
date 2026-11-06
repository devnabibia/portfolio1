"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const move = (e) => { el.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; };
    const over = (e) => {
      const t = e.target.closest && e.target.closest("[data-c]");
      el.textContent = t ? t.dataset.c : "";
      el.classList.toggle("show", !!t);
    };
    addEventListener("mousemove", move);
    addEventListener("mouseover", over);
    return () => { removeEventListener("mousemove", move); removeEventListener("mouseover", over); };
  }, []);
  return <div className="cursor" ref={ref} aria-hidden="true" />;
}
