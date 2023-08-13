export default function Thumbnails({
  imagesFolderName,
  numItems,
  currentImageIndex,
  onThumbnailClick,
  className = "",
}) {
  return (
    <ul className={`flex-1 gap-x-4 hidden md:flex ${className}`}>
      {Array.from({ length: numItems }, (_, i) => (
        <li key={i}>
          <button
            aria-label={`Image number ${i + 1}`}
            onClick={function handleClick() {
              onThumbnailClick(i);
            }}
          >
            <img
              src={`/images/${imagesFolderName}/${i + 1}-thumbnail.jpg`}
              alt={`Thumbnail for image number ${i + 1}`} // TODO: Improve a11y
              width={176}
              height={176}
              className={`cursor-pointer rounded-xl ${
                currentImageIndex === i
                  ? "outline-orange-900 outline-4 outline-offset-2 outline opacity-60"
                  : ""
              } `}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
