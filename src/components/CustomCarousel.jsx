import "react-multi-carousel/lib/styles.css";
import styles from "./CustomCarousel.module.css";

import Carousel from "react-multi-carousel";
import ReactPlayer from "react-player";

function CustomCarousel({ outfitVideos, outfitImages }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel showDots className={styles.carousel} responsive={responsive}>
      {outfitImages.map((img, i) => (
        <img className={styles.image} key={i} src={img.imageMediumSource} />
      ))}

      {outfitVideos[0] && (
        <ReactPlayer
          className={styles.video}
          url={outfitVideos[0].imageMediumSource}
          width="100%"
          playing={true}
          // onError={handleError}
          controls={true}
        />
      )}
    </Carousel>
  );
}

export default CustomCarousel;
