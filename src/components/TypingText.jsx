import { useEffect, useState } from "react";

const phrases = [
  "I build interactive systems",
  "I visualize complex ideas",
  "I turn algorithms into experiences",
];

const maxLength = Math.max(...phrases.map((p) => p.length));

const TypingText = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mode, setMode] = useState("typing"); // typing | pause | deleting

  useEffect(() => {
    const current = phrases[phraseIndex];

    let timeout;

    if (mode === "typing") {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setCharIndex((c) => c + 1);
          setText(current.slice(0, charIndex + 1));
        }, 55); // ⬅ faster typing
      } else {
        timeout = setTimeout(() => setMode("pause"), 1000);
      }
    }

    if (mode === "pause") {
      timeout = setTimeout(() => setMode("deleting"), 300);
    }

    if (mode === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((c) => c - 1);
          setText(current.slice(0, charIndex - 1));
        }, 30); // ⬅ faster delete
      } else {
        // RESET CLEANLY before next phrase
        setMode("typing");
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setCharIndex(0);
        setText("");
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, mode, phraseIndex]);

  return (
    <span
      className="inline-block text-blue-400"
      style={{ minWidth: `${maxLength}ch` }}
    >
      {text}
    </span>
  );
};

export default TypingText;
