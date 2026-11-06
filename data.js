// Edit everything about the site here.
export const site = {
  name: "Dennis Nangendo", first: "Dennis", last: "Nangendo", email: "nangendodennis.com",
  home: "Nairobi", code: "AO-2026",
  tagline: "I build web and mobile products, from the interface to the database behind it.",
  about: ["I turn ideas into products people use every day. I care about fast interfaces, backends that hold up under load, and mobile apps that reach the stores.",
          "Outside of work I mentor junior developers and write about what I learn."],
  stats: [["5+", "Years"], ["4", "Teams"], ["12", "Apps shipped"]],
  kit: [["Frontend", "React, Next.js, Tailwind"], ["Backend", "Node, PostgreSQL, MongoDB"], ["Mobile", "React Native, Expo"], ["Deploy", "Vercel, GitHub Actions"]],
  links: [["GitHub", "#"], ["LinkedIn", "#"], ["X", "#"]],
};
export const nav = [
  { id: "top", label: "Departure" }, { id: "about", label: "About" }, { id: "line", label: "Experience" },
  { id: "routes", label: "Projects" }, { id: "pass", label: "Awards" }, { id: "arrive", label: "Contact" },
];
export const roles = [["AO 101", "Web apps", "Boarding", true], ["AO 202", "Mobile apps", "On time", true], ["AO 303", "APIs and databases", "Open for work", false]];
export const stops = [
  ["2025 – now", "Software Engineer", "safaricom co lt", "Built interfaces and APIs for an education platform used by thousands of learners."],
  ["2024 – 2025", "Mobile Engineer", "uasin gishu", "Shipped cross-platform apps and published them to the Play Store and App Store."],
  ["2023 – 2024", "Frontend Engineer", "Dessra Venture", "Led frontend for web and mobile products and set up CI/CD pipelines."],
  ["2021 – 2023", "Junior Developer", "e-waste management", "Turned designs into responsive pages for client and in-house projects."],
];
export const projects = [
  { name: "Rejection Wall", live: true, href: "#", text: "A community site for sharing rejection emails and celebrating what comes next." },
  { name: "Spa Booking", live: true, href: "#", text: "Appointment scheduling for customers and admins." },
  { name: "News Reader", live: false, href: "#", text: "A clean reading experience powered by a public news API." },
  { name: "Sticker Shop", live: false, text: "An online store for custom stickers." },
];
export const stamps = [["1ST", "City Buildathon", "2025", -4], ["1ST", "Campus Hackathon", "2024", 3], ["TOP 5", "Regional Challenge", "2025", -2]];
// Put mp3 files in /public/music and list them here. Leave empty to hide the player.
export const songs = [{ title: "Track one", src: "/music/track1.mp3" }, { title: "Track two", src: "/music/track2.mp3" }];
