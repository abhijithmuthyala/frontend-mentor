import { useEffect, useRef, useState } from "react";

import DirectionButton from "../carousel/DirectionButton";
import CarouselSlider from "../carousel/Slider";
import Thumbnails from "../carousel/Thumbnails";

export default function LightboxCarousel({
  initIndex,
  numItems,
  imagesFolderName,
  onClose,
}) {
  const [index, setIndex] = useState(initIndex);
  const dialogRef = useRef(null);

  useEffect(function dialogEffect() {
    dialogRef.current?.showModal();

    return function dialogEffectCleanup() {
      dialogRef.current?.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onKeyDown={handleEscape}
      onClickCapture={handleClickOutside}
      className="fixed z-50 top-0 left-0 grid gap-y-8 place-content-center w-screen max-w-full min-h-screen m-0 bg-black bg-opacity-50"
    >
      <div className="max-w-[560px] flex flex-col gap-y-6">
        <CarouselSlider
          numItems={numItems}
          imagesFolderName={imagesFolderName}
          currentImageIndex={index}
          clickable={false}
        >
          <DirectionButton
            direction="next"
            onClick={handleNext}
            className="w-14 h-14"
          />
          <DirectionButton
            direction="previous"
            onClick={handlePrevious}
            className="w-14 h-14"
          />
        </CarouselSlider>
        <Thumbnails
          imagesFolderName={imagesFolderName}
          numItems={numItems}
          currentImageIndex={index}
          onThumbnailClick={onThumbnailClick}
          className="px-12 gap-x-10"
        />
      </div>
      <button
        aria-label="Close Modal"
        onClick={handleCloseDialog}
        className="-order-1 w-5 h-5 justify-self-end bg-[url('/images/icon-close.svg')] bg-cover brightness-0 invert"
      ></button>
    </dialog>
  );

  function handleNext() {
    setIndex((index + 1) % numItems);
  }

  function handlePrevious() {
    setIndex((index - 1 + numItems) % numItems);
  }

  function onThumbnailClick(index) {
    setIndex(index);
  }

  function handleCloseDialog() {
    dialogRef.current.close();
    onClose();
  }

  function handleEscape(e) {
    if (e.key !== "Escape") return;
    handleCloseDialog();
  }

  function handleClickOutside(e) {
    if (e.target !== dialogRef.current) return;
    handleCloseDialog();
  }
}
