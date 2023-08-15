import NumberCard from "./NumberCard";

const LAUNCH_TIME = new Date("2023-8-20T00:00:00.000Z");

export default function Timer() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(64px,_1fr))] gap-x-4 gap-y-8 max-w-2xl mx-auto px-6 md:gap-x-10 md:px-0">
      <NumberCard title="days" number={8} />
      <NumberCard title="hours" number={23} />
      <NumberCard title="minutes" number={55} />
      <NumberCard title="seconds" number={41} />
    </div>
  );
}
