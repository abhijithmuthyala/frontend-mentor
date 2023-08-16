import { useEffect, useRef, useState } from "react";
import NumberCard from "./NumberCard";

const LAUNCH_TIME = new Date("2023-08-25T00:00:00.000Z");
const NOW = Date.now();

export default function Timer() {
  const [secondsLeft, setSecondsLeft] = useState((LAUNCH_TIME - NOW) / 1000);
  const { days, hours, minutes, seconds } = formatTime(secondsLeft);
  const secondsLeftRef = useRef(secondsLeft);

  useEffect(function timeEffect() {
    const timerId = setInterval(function updateTime() {
      if (Math.floor(secondsLeftRef.current) === 0) {
        return clearInterval(timerId);
      }

      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      secondsLeftRef.current -= 1;
    }, 1000);

    return function cleanupTimeEffect() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(64px,_1fr))] gap-x-4 gap-y-8 max-w-2xl mx-auto px-6 md:gap-x-10 md:px-0">
      <NumberCard title="days" number={days} />
      <NumberCard title="hours" number={hours} />
      <NumberCard title="minutes" number={minutes} />
      <NumberCard title="seconds" number={seconds} />
    </div>
  );
}

function formatTime(timeInSeconds) {
  const days = Math.floor(timeInSeconds / (3600 * 24));
  const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  return { days, hours, minutes, seconds };
}
