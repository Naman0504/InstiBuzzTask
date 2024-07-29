import Slider from "react-slick";
import Collections from "./Collections";
import Services from "./Services";
import StylishBanner from "./StylishBanner";
import Vector from "./Vector";
import Collaboration from "./Collaboration";
import Testimonials from "./Testimonials";

function Home() {
  var settings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const coverImgArray = [
    "https://www.instibuzz.com/static/media/red%20wall%20intense-min-min.1e95db4aa5dc6c598f84.jpg",
    "https://www.instibuzz.com/static/media/trio%202-min-min.8fb833268060d006a783.jpg",
    "https://www.instibuzz.com/static/media/take%20lite%20back-min-min.c8ebb2457c11ae24e685.jpg",
    "https://www.instibuzz.com/static/media/avg%20iitian%20pair%20-park-min-min.90abc770714357b75ffa.jpg",
  ];

  return (
    <>
      <Slider {...settings}>
        {coverImgArray.map((img, index) => (
          <div key={index}>
            <div className="relative w-full h-64 md:h-[120vh]">
              {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute px-4 md:px-0 w-full  rounded-lg h-full transition-transform duration-500 ease-in-out">
                  <img
                    src={img}
                    className="object-cover rounded-xl md:rounded-none w-full h-full"
                    alt="Image 1"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

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
