"use client";
import { useState } from "react";

export default function CopyEmail({ email }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setDone(true); setTimeout(() => setDone(false), 1800); }
    catch { location.href = "mailto:" + email; }
  };
  return <button className="mail" type="button" onClick={copy} data-c="Copy">{done ? "Copied to clipboard" : email}</button>;
}
