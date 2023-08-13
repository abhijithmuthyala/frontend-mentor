export default function CarouselSlider({
  numItems,
  imagesFolderName,
  currentImageIndex,
  clickable = true,
  onImageClick,
  children,
}) {
  return (
    <div className="relative overflow-hidden md:rounded-2xl">
      <ul
        onClick={onImageClick}
        className="flex overflow-x-hidden max-h-[calc(200px+27vw)] lg:max-h-[initial]"
      >
        {Array.from({ length: numItems }, (_, i) => (
          <li key={i} className="basis-full shrink-0">
            <img
              src={`/images/${imagesFolderName}/${i + 1}.jpg`}
              // TODO: Improve a11y
              alt="Sneakers"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
              className={`h-full transition-transform duration-300 object-cover object-center ${
                clickable ? "lg:cursor-pointer" : ""
              }`}
              width={1000}
              height={1000}
            />
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
