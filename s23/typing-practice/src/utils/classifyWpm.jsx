export function classifyWpm(wpm) {
  if (wpm < 20) return "Beginner";
  if (wpm < 40) return "Intermediate";
  if (wpm < 60) return "Advanced";
  return "Master";
}