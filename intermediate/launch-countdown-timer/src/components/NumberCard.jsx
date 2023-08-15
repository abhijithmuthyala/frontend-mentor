export default function NumberCard({ number, title }) {
  return (
    <div>
      <div className="relative flex flex-col gap-y-[1px] bg-blue-900 pb-2 mb-4 min-w-[96px] aspect-square">
        <FlipCard />
        <FlipCard />
        <p className="absolute grid place-content-center text-soft-red font-bold text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {String(number).padStart(2, "0")}
        </p>
      </div>
      <p className="text-center uppercase text-blue-300 tracking-[4px]">
        {title}
      </p>
    </div>
  );
}

function FlipCard() {
  return <div className="h-1/2 rounded-md bg-desat-blue"></div>;
}
