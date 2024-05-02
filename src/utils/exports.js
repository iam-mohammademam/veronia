import profile from "../assets/avatar.png";
export const baseurl = import.meta.env.VITE_API_URL;
export const tags = [];
export const noProfile = profile;
export const categories = [
  { name: "action" },
  { name: "nature" },
  { name: "adventure" },
  { name: "gaming" },
  { name: "web development" },
  { name: "animal" },
  { name: "fantasy" },
  { name: "website" },
  { name: "historical" },
  { name: "war" },
  { name: "commercial" },
  { name: "ai" },
  { name: "celebrity" },
  { name: "social" },
  { name: "entertainment" },
  { name: "music" },
  { name: "movie" },
  { name: "bollywood" },
  { name: "hollywood" },
  { name: "anime" },
  { name: "web series" },
];

export const hoverClass =
  "relative before:absolute before:scale-50 before:opacity-0 hover:before:opacity-100 before:duration-300 before:transition-all hover:before:scale-100 before:bg-black/15 before:h-7 before:w-7 before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 cursor-pointer";
