import { useState } from "react";

import DirectionButton from "./DirectionButton";
import Thumbnails from "./Thumbnails";

export default function ProductCarousel({ imagesFolderName, numItems }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleNext() {
    setCurrentImageIndex((currentImageIndex + 1) % numItems);
  }

  function handlePrevious() {
    setCurrentImageIndex((currentImageIndex - 1 + numItems) % numItems);
  }

  function onThumbnailClick(index) {
    setCurrentImageIndex(index);
  }

  return (
    <div className="self-start flex flex-col md:gap-y-8 md:px-8 lg:px-14">
      <div className="relative overflow-hidden md:rounded-2xl">
        <ul
          className="flex overflow-x-hidden max-h-[calc(200px+27vw)]"
          draggable
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
                className="h-full transition-transform duration-300 object-cover object-center"
                width={1000}
                height={1000}
              />
            </li>
          ))}
        </ul>
        <DirectionButton direction="next" onClick={handleNext} />
        <DirectionButton direction="previous" onClick={handlePrevious} />
      </div>
      <Thumbnails
        imagesFolderName={imagesFolderName}
        numItems={numItems}
        currentImageIndex={currentImageIndex}
        onThumbnailClick={onThumbnailClick}
      />
    </div>
  );
}
