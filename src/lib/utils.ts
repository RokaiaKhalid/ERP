// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combine class names (Tailwind-safe) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

/** Format a date string like "2024-06-11" → "Jun 11, 2024" */
export function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Capitalize the first letter of a word */
export function capitalize(text: string) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
}

/** Truncate long text with ellipsis */
export function truncate(text: string, max = 30) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

/** Debounce utility for typing/search */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay = 300) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
