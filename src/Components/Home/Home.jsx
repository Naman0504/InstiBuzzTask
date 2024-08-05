// import Slider from "react-slick";
import "./Home.css";
import Collections from "./Collections";
import Services from "./Services";
import StylishBanner from "./StylishBanner";
import Vector from "./Vector";
import Collaboration from "./Collaboration";
import Testimonials from "./Testimonials";
import { useEffect, useState } from "react";

function Home() {
  const coverImgArray = [
    "https://www.instibuzz.com/static/media/avg%20iitian%20pair%20-park-min-min.90abc770714357b75ffa.jpg",
    "https://www.instibuzz.com/static/media/red%20wall%20intense-min-min.1e95db4aa5dc6c598f84.jpg",
    "https://www.instibuzz.com/static/media/trio%202-min-min.8fb833268060d006a783.jpg",
    "https://www.instibuzz.com/static/media/take%20lite%20back-min-min.c8ebb2457c11ae24e685.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % coverImgArray.length);
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, [coverImgArray.length]);

  return (
    <>
      <div className="home-top">
        <div className="home-top-carousal  ">
          <div className="home-carousel-container   ">
            {coverImgArray.map((img, index) => {
              let position = index - activeIndex - 1;
              if (position < -1) position = position + coverImgArray.length;
              return (
                <img
                  key={index}
                  src={img}
                  alt="Models styling InstiBuzz Tees"
                  style={{
                    zIndex: coverImgArray.length - position,
                    transform: `translateX(${100 * position}%)`,
                    transition: `transform 1.5s`,
                  }}
                  className="home-carousel-image "
                />
              );
            })}
          </div>
        </div>
      </div>
      <Collections />
      <Services />
      <StylishBanner />
      <Vector />
      <Collaboration />
      <Testimonials />
    </>
  );
}

export default Home;
