import React, { useState, useEffect } from "react";

const Preloader = ({ onLoadingComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const targetText = "TITAN WORLD";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let currentIndex = 0;
    let iterationCount = 0;
    const maxIterations = targetText.length * 3;

    const intervalId = setInterval(() => {
      if (iterationCount < maxIterations) {
        const randomChar =
          characters[Math.floor(Math.random() * characters.length)];
        setText((prevText) => {
          const newText =
            prevText.substring(0, currentIndex) +
            randomChar +
            prevText.substring(currentIndex + 1);
          return newText;
        });
        iterationCount++;
        if (iterationCount % 5 === 0) {
          currentIndex++;
        }
        // Update progress
        setProgress((iterationCount / maxIterations) * 100);
      } else {
        clearInterval(intervalId);
        setText(targetText);
        setProgress(100);
        setTimeout(() => {
          setTimeout(onLoadingComplete, 500);
        }, 500);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [onLoadingComplete]);

  return (
    <div className="preloader flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-amber-500 font-arvo leading-normal tracking-wide text-3xl md:text-3xl lg:text-6xl xl:text-8xl overflow-hidden mb-4">
        {text}
      </h1>
      <div className="w-48 h-1 bg-amber-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
