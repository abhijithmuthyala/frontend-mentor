import { useState } from "react";
import DirectionButton from "./DirectionButton";

export default function ProductCarousel({ imagesFolderName, numItems }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleNext() {
    setCurrentImageIndex((currentImageIndex + 1) % numItems);
  }

  function handlePrevious() {
    setCurrentImageIndex((currentImageIndex - 1 + numItems) % numItems);
  }

  return (
    <div className="relative">
      <ul className="flex overflow-x-hidden mb-4">
        {Array.from({ length: numItems }, (_, i) => (
          <img
            src={`/images/${imagesFolderName}/${i + 1}.jpg`}
            alt=""
            key={i}
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          />
        ))}
      </ul>
      <DirectionButton direction="next" onClick={handleNext} />
      <DirectionButton direction="previous" onClick={handlePrevious} />
    </div>
  );
}
