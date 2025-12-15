"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/HydraCoverFinal3800x3800.jpg", "/BDJeff.png", "/aptt.png"];
function BackgroundSlideshow() {
  const [curImgIdx, setCurImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`curImgIdx = ${curImgIdx}`);
      setCurImgIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [curImgIdx]);
  return (
    <div className="slideshow-container">
      <Image
        key={0}
        src={images.at(curImgIdx)}
        alt={`Background slide ${curImgIdx}`}
        fill // Makes the image fill the parent container
        style={{ objectFit: "cover" }} // Ensures the image covers the entire area
        className={`slideshow-image active`}
      />
    </div>
  );
}

export default BackgroundSlideshow;
