import "./globals.css";
import Intro from "../components/Intro";
import Cursor from "../components/Cursor";
import Player from "../components/Player";
import { site } from "../data";

export const metadata = { title: `${site.name} · Software Engineer`, description: site.tagline };
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Intro />
        {children}
        <Player />
        <Cursor />
      </body>
    </html>
  );
}
