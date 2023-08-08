import { useState } from "react";

import DirectionButton from "./DirectionButton";
import Thumbnails from "./Thumbnails";

export default function ProductCarousel({
  imagesFolderName,
  numItems,
  showThumbnails = false,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleNext() {
    setCurrentImageIndex((currentImageIndex + 1) % numItems);
  }

  function handlePrevious() {
    setCurrentImageIndex((currentImageIndex - 1 + numItems) % numItems);
  }

  return (
    <>
      <div className="relative max-w-4xl mx-auto">
        <ul className="flex overflow-x-hidden mb-4 max-h-[300px]" draggable>
          {Array.from({ length: numItems }, (_, i) => (
            <li key={i} className="basis-full shrink-0">
              <img
                src={`/images/${imagesFolderName}/${i + 1}.jpg`}
                alt=""
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

      {showThumbnails && (
        <Thumbnails
          imagesFolderName={imagesFolderName}
          numItems={numItems}
          currentImageIndex={currentImageIndex}
        />
      )}
    </>
  );
}
