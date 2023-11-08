import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRelativeTime(postedAt) {
  const currentTime = Date.now();
  const timeDifference = currentTime - postedAt;
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);

  if (minutesAgo < 1) {
    return "just now";
  } else if (minutesAgo === 1) {
    return "1 minute ago";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  } else if (hoursAgo === 1) {
    return "1 hour ago";
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else {
    const postedDate = new Date(postedAt * 1000); // Convert to seconds
    const day = postedDate.getDate();
    const month = postedDate.toLocaleString("default", { month: "short" });
    const year = postedDate.getFullYear();

    return `${day} ${month} ${year}`;
  }
}

// Example usage:
const postedAt1 = 1638888000; // Example timestamp in seconds (less than 24 hours ago)
const postedAt2 = 1638724800; // Example timestamp in seconds (more than 24 hours ago)
const relativeTime1 = getRelativeTime(postedAt1);
const relativeTime2 = getRelativeTime(postedAt2);
console.log(relativeTime1); // Output: "more than an hour ago"
console.log(relativeTime2); // Output: "6 Nov 2022"

