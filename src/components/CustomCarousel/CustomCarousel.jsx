import "react-multi-carousel/lib/styles.css";
import styles from "./CustomCarousel.module.css";

import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";

function CustomCarousel({ outfitVideos, outfitImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const slidesCount = outfitImages.length + outfitVideos.length - 1;

  useEffect(() => {
    const track = trackRef.current;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  function handlePrev() {
    if (currentIndex === 0) return;
    setCurrentIndex((state) => state - 1);
  }

  function handleNext() {
    if (currentIndex === slidesCount) return;
    setCurrentIndex((state) => state + 1);
  }

  return (
    <div className={styles.carousel}>
      <div ref={trackRef} className={styles.carouselTrack}>
        {outfitImages.map((img, i) => (
          <div key={i} className={styles.carouselSlide}>
            <img className={styles.image} key={i} src={img.imageMediumSource} />
          </div>
        ))}
        {outfitVideos.map((video) => {
          console.log(video);
          return (
            outfitVideos[0] && (
              <div key={video.id} className={styles.carouselSlide}>
                <ReactPlayer
                  className={styles.video}
                  url={outfitVideos[0].imageMediumSource}
                  width="100%"
                  playing={false}
                  // onError={handleError}
                  controls={true}
                />
              </div>
            )
          );
        })}
      </div>
      <button
        onClick={handlePrev}
        className={`${styles.carouselBtn} ${styles.prev}`}
      >
        &larr;
      </button>

      <button
        onClick={handleNext}
        className={`${styles.carouselBtn} ${styles.next}`}
      >
        &rarr;
      </button>
    </div>
  );
}

export default CustomCarousel;
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };
// return (
//   <Carousel showDots className={styles.carousel} responsive={responsive}>
//     {outfitImages.map((img, i) => (
//       <img className={styles.image} key={i} src={img.imageMediumSource} />
//     ))}
//     {outfitVideos[0] && (
//       <ReactPlayer
//         className={styles.video}
//         url={outfitVideos[0].imageMediumSource}
//         width="100%"
//         playing={false}
//         // onError={handleError}
//         controls={true}
//       />
//     )}
//   </Carousel>
// );
