import { useState } from "react";

import useLightboxEffects from "../../hooks/useLightboxEffects";
import { viewTransitionWrapper } from "../../utils";
import LightboxCarousel from "../lightbox/LightboxCarousel";
import DirectionButton from "./DirectionButton";
import CarouselSlider from "./Slider";
import Thumbnails from "./Thumbnails";

export default function ProductCarousel({ imagesFolderName, numItems }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { showLightbox, setShowLightbox } = useLightboxEffects();

  return (
    <>
      <CarouselSlider
        numItems={numItems}
        imagesFolderName={imagesFolderName}
        currentImageIndex={currentImageIndex}
        onImageClick={handleToggleLightbox}
      >
        <DirectionButton
          direction="next"
          onClick={handleNext}
          className="md:hidden"
        />
        <DirectionButton
          direction="previous"
          onClick={handlePrevious}
          className="md:hidden"
        />
      </CarouselSlider>
      <Thumbnails
        imagesFolderName={imagesFolderName}
        numItems={numItems}
        currentImageIndex={currentImageIndex}
        onThumbnailClick={onThumbnailClick}
      />
      {showLightbox && (
        <LightboxCarousel
          initIndex={currentImageIndex}
          numItems={numItems}
          imagesFolderName={imagesFolderName}
          onClose={handleToggleLightbox}
        />
      )}
    </>
  );

  function handleNext() {
    setCurrentImageIndex((currentImageIndex + 1) % numItems);
  }

  function handlePrevious() {
    setCurrentImageIndex((currentImageIndex - 1 + numItems) % numItems);
  }

  function onThumbnailClick(index) {
    setCurrentImageIndex(index);
  }

  function handleToggleLightbox() {
    const query = window.matchMedia("(min-width: 1024px)");
    if (!query.matches) return;

    viewTransitionWrapper(function viewTransition() {
      setShowLightbox(!showLightbox);
    });
  }
}
