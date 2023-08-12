import { useState } from "react";

import DirectionButton from "./DirectionButton";
import CarouselSlider from "./Slider";
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
    <>
      <CarouselSlider
        numItems={numItems}
        imagesFolderName={imagesFolderName}
        currentImageIndex={currentImageIndex}
        nextButton={<DirectionButton direction="next" onClick={handleNext} />}
        prevButton={
          <DirectionButton direction="previous" onClick={handlePrevious} />
        }
      />
      <Thumbnails
        imagesFolderName={imagesFolderName}
        numItems={numItems}
        currentImageIndex={currentImageIndex}
        onThumbnailClick={onThumbnailClick}
      />
    </>
  );
}
