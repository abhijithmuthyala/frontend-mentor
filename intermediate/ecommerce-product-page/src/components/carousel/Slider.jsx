export default function CarouselSlider({
  numItems,
  imagesFolderName,
  currentImageIndex,
  nextButton,
  prevButton,
}) {
  return (
    <div className="relative overflow-hidden md:rounded-2xl">
      <ul className="flex overflow-x-hidden max-h-[calc(200px+27vw)]" draggable>
        {Array.from({ length: numItems }, (_, i) => (
          <li key={i} className="basis-full shrink-0">
            <img
              src={`/images/${imagesFolderName}/${i + 1}.jpg`}
              // TODO: Improve a11y
              alt="Sneakers"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
              className="h-full transition-transform duration-300 object-cover object-center"
              width={1000}
              height={1000}
            />
          </li>
        ))}
      </ul>
      {nextButton}
      {prevButton}
    </div>
  );
}
