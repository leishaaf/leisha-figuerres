import { useEffect, useState } from "react";

export type Period = "morning" | "day" | "evening" | "night";
export type Season = "spring" | "summer" | "autumn" | "winter";

// Which part of the day is it?
export function getPeriod(date: Date): Period {
  const hour = date.getHours(); // 0–23
  if (hour >= 5 && hour < 10) return "morning";
  if (hour >= 10 && hour < 17) return "day";
  if (hour >= 17 && hour < 20) return "evening";
  return "night";
}

// Which season is it? (Northern Hemisphere)
export function getSeason(date: Date): Season {
  const month = date.getMonth(); // 0 = January … 11 = December
  if (month >= 2 && month <= 4) return "spring"; // Mar–May
  if (month >= 5 && month <= 7) return "summer"; // Jun–Aug
  if (month >= 8 && month <= 10) return "autumn"; // Sep–Nov
  return "winter"; // Dec–Feb
}

// For testing: add ?time=night or ?season=winter to the URL to preview.
function fromUrl<T extends string>(key: string, allowed: readonly T[]): T | null {
  const value = new URLSearchParams(window.location.search).get(key);
  return allowed.includes(value as T) ? (value as T) : null;
}

// A hook: gives you the current time, and re-renders every minute
// so the sky and season update on their own while the page is open.
export function useNow() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id); // stop the timer if the component goes away
  }, []);

  return {
    now,
    period: fromUrl("time", ["morning", "day", "evening", "night"] as const) ?? getPeriod(now),
    season: fromUrl("season", ["spring", "summer", "autumn", "winter"] as const) ?? getSeason(now),
  };
}
