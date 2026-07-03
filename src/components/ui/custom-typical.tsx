"use client";

import React, { useEffect, useState } from "react";

interface CustomTypicalProps {
  steps: string[];
  period?: number;
  className?: string;
  wrapper?: keyof JSX.IntrinsicElements;
}

export default function CustomTypical({
  steps,
  period = 2000,
  className = "",
  wrapper: Wrapper = "span",
}: CustomTypicalProps) {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum]);

  const tick = () => {
    const i = loopNum % steps.length;
    const fullText = steps[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50); // Erase faster
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Pause after typing
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(100); // Reset speed for next text
    }
  };

  return <Wrapper className={className}>{text}</Wrapper>;
}
