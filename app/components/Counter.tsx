"use client";

import { useEffect, useState, useRef } from "react";

export function Counter() {
const [count, setCount] = useState(1);
const ref = useRef<HTMLSpanElement>(null);

useEffect(() => {
let startTime: number | null = null;
let animationFrame = 0;
let timeoutId: ReturnType<typeof setTimeout>;
let isVisible = false;


const duration = 2000;
const end = 10;

const step = (timestamp: number) => {
  if (!isVisible) return;

  if (startTime === null) startTime = timestamp;

  const progress = Math.min(
    (timestamp - startTime) / duration,
    1
  );

  setCount(Math.max(1, Math.floor(progress * end)));

  if (progress < 1) {
    animationFrame = window.requestAnimationFrame(step);
  } else {
    setCount(end);

    timeoutId = setTimeout(() => {
      if (!isVisible) return;

      setCount(1);
      startTime = null;
      animationFrame = window.requestAnimationFrame(step);
    }, 2000);
  }
};

const observer = new IntersectionObserver(([entry]) => {
  isVisible = entry.isIntersecting;

  if (isVisible) {
    startTime = null;
    animationFrame = window.requestAnimationFrame(step);
  } else {
    window.cancelAnimationFrame(animationFrame);
    clearTimeout(timeoutId);
    startTime = null;
  }
});

if (ref.current) {
  observer.observe(ref.current);
}

return () => {
  isVisible = false;
  observer.disconnect();
  window.cancelAnimationFrame(animationFrame);
  clearTimeout(timeoutId);
};


}, []);

return (
  <span ref={ref} className="animated-counter">{count}</span>
);
}
