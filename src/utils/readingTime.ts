export interface ReadingInfo {
  words: number;
  minutes: number;
}

export function readingTime(body: string): ReadingInfo {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return { words, minutes };
}
