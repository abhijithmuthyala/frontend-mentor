export default function Thumbnails({
  imagesFolderName,
  numItems,
  currentImageIndex,
}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(36px,_64px))] justify-between max-w-xs mx-auto">
      {Array.from({ length: numItems }, (_, i) => (
        <li key={i}>
          <img
            src={`/images/${imagesFolderName}/${i + 1}-thumbnail.jpg`}
            alt=""
            width={176}
            height={176}
            className={`cursor-pointer rounded-xl ${
              currentImageIndex === i
                ? "outline-orange-900 outline-3 outline-offset-2 outline opacity-60"
                : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
