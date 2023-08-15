import NumberCard from "./NumberCard";

const LAUNCH_TIME = new Date("2023-8-20T00:00:00.000Z");

export default function Timer() {
  return (
    <div className="flex flex-wrap justify-between gap-8 max-w-xl mx-auto ">
      <NumberCard title="days" number={8} />
      <NumberCard title="hours" number={23} />
      <NumberCard title="minutes" number={55} />
      <NumberCard title="seconds" number={41} />
    </div>
  );
}
