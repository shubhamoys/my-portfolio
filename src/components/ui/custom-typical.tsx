"use client";

import React, { useEffect, useState } from "react";

interface CustomTypicalProps {
  steps: (string | number)[];
  className?: string;
  wrapper?: keyof JSX.IntrinsicElements;
}

export default function CustomTypical({
  steps,
  className = "",
  wrapper: Wrapper = "span",
}: CustomTypicalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Get current item in steps (should alternate string then duration)
    const currentItem = steps[stepIndex];

    if (typeof currentItem === "number") {
      // Pause step
      timer = setTimeout(() => {
        setIsDeleting(true);
        // Move to the next text step (which is index + 1)
        const nextIndex = (stepIndex + 1) % steps.length;
        setStepIndex(nextIndex);
      }, currentItem);
    } else if (typeof currentItem === "string") {
      // Typing or Deleting text step
      if (isDeleting) {
        // Handle deleting character by character
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setTypingSpeed(40); // erase faster
        }, typingSpeed);

        if (displayedText === "") {
          setIsDeleting(false);
          // Go to next string step
          const nextIndex = (stepIndex + 1) % steps.length;
          setStepIndex(nextIndex);
        }
      } else {
        // Handle typing character by character
        timer = setTimeout(() => {
          const nextChar = currentItem.charAt(displayedText.length);
          setDisplayedText((prev) => prev + nextChar);
          setTypingSpeed(100 - Math.random() * 40); // variable speed
        }, typingSpeed);

        if (displayedText === currentItem) {
          // If we fully typed, check if the next step is a pause (number)
          const nextStep = steps[(stepIndex + 1) % steps.length];
          if (typeof nextStep === "number") {
            setStepIndex((stepIndex + 1) % steps.length);
          } else {
            // No pause, delete immediately
            setIsDeleting(true);
          }
        }
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, stepIndex, isDeleting, steps, typingSpeed]);

  return <Wrapper className={className}>{displayedText}</Wrapper>;
}
