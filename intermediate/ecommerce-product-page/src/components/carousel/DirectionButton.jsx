const icons = {
  previous: "bg-[url(/images/icon-previous.svg)]",
  next: "bg-[url(/images/icon-next.svg)]",
};

export default function DirectionButton({ direction, onClick, className }) {
  const edge = direction === "previous" ? "left-4" : "right-4";

  return (
    <button
      aria-label={direction + " image"}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${edge} flex items-center justify-center w-10 h-10 rounded-full  bg-white shadow-blue-400 shadow-xl ${className} focus:outline-orange-900 focus:outline-[16px] focus:outline-offset-4`}
    >
      <span
        className={`w-[30%] aspect-[12/14] inline-block ${icons[direction]} bg-contain bg-no-repeat bg-center`}
      ></span>
    </button>
  );
}
