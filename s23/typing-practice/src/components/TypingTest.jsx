import { useState } from "react";
import { generateFaParagraph } from "../utils/generateText";
import { countWords, calcWPM } from "../utils/wpm";
import { classifyWpm } from "../utils/classifyWpm";

export default function TypingTest() {
  const [referenceText, setReferenceText] = useState(generateFaParagraph());
  const [typedText, setTypedText] = useState("");
  const [status, setStatus] = useState("idle");
  const [startedAt, setStartedAt] = useState(null);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [rank, setRank] = useState("");

  function handleStart() {
    setReferenceText(generateFaParagraph());
    setTypedText("");
    setStatus("running");
    setWpm(0);
    setRank("");
    setElapsedMs(0);
    setStartedAt(performance.now());
  }

  function handleStop() {
    if (status !== "running") return;
    const stop = performance.now();
    const total = startedAt ? stop - startedAt : 0;
    setElapsedMs(total);

    const ok = typedText.trim() === referenceText.trim();
    if (!ok) {
      setStatus("fail");
      setWpm(0);
      setRank("");
      return;
    }

    const words = countWords(referenceText);
    const computed = calcWPM(words, total);
    setWpm(computed);
    setRank(classifyWpm(computed));
    setStatus("success");
  }

  function handleReset() {
    setReferenceText(generateFaParagraph());
    setTypedText("");
    setStatus("idle");
    setWpm(0);
    setRank("");
    setElapsedMs(0);
    setStartedAt(null);
  }

  return (
    <div>
      <h1>Typing Test (FA)</h1>
      <p>{referenceText}</p>

      <textarea
        placeholder="Type the exact text above here..."
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        disabled={status === "success" || status === "fail"}
      />

      <div>
        <button onClick={handleStart} disabled={status === "running"}>Start</button>
        <button onClick={handleStop} disabled={status !== "running"}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div>Status: {status}</div>
      <div>Elapsed (ms): {elapsedMs}</div>

      {status === "success" && (
        <div>
          <div>WPM: {wpm}</div>
          <div>Rank: {rank}</div>
        </div>
      )}

      {status === "fail" && <div>Texts did not match.</div>}
    </div>
  );
}