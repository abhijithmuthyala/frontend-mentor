export default function NumberCard({ number, title }) {
  return (
    <div className="">
      <div className="relative flex flex-col gap-y-[1px] bg-blue-900 pb-2 mb-1 aspect-square md:mb-8">
        <FlipCard />
        <FlipCard />
        <p className="absolute grid place-content-center text-soft-red font-bold text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  min-[540px]:text-5xl md:text-7xl">
          {String(number).padStart(2, "0")}
        </p>
      </div>
      <p className="text-center uppercase text-blue-300 text-[8px] tracking-[2px] md:text-lg md:tracking-[3px]">
        {title}
      </p>
    </div>
  );
}

function FlipCard() {
  return <div className="h-1/2 rounded-md bg-desat-blue"></div>;
}
