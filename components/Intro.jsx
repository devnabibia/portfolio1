"use client";
import { useEffect, useState } from "react";

export default function Intro() {
  const [s, setS] = useState("closed");
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setS("gone");
  }, []);
  useEffect(() => {
    document.body.style.overflow = s === "gone" ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [s]);
  if (s === "gone") return null;
  const open = () => { setS("opening"); setTimeout(() => setS("gone"), 1100); };
  return (
    <div className={"intro" + (s === "opening" ? " open" : "")} role="dialog" aria-label="Welcome">
      <div className="door l" /><div className="door r" />
      <button className="pull" onClick={open} data-c="Open" autoFocus>Welcome aboard. Open the door</button>
    </div>
  );
}
