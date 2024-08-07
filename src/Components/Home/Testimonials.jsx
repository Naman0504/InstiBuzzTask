import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";

function Testimonials() {
  const testimonialCards = [
    {
      id: 1,
      name: "Yash",
      img: "https://s3-alpha-sig.figma.com/img/5350/aede/f3110485be869387363665aa7b3c33bc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ-w919DJnTOOsI58PpQqVDXJAXkRmsQPGQa0dW3uCkBW0miBefry~Y2rBauQX27lEyUl8cVMWVXPeG4k7gJ73PchF8xlq1oqdtS2McMr~fON02UVv3qtonrWsa1Z8i5ZEvHeYd5QmuxpfqGvJEGCjES8of2XmELXuAWVJrMHRvVbhyWvBhiB8bXfS78oA6aM4q6Vq5hLhrr2puxZ8o1h5r0tgScR9FCe8mmbd7-HhzSa4K~McmXFqWPBk5QE6oy9tadZio1SIcigH1qB058znyLn12g48vFkPsE1xzAkFF7amuXDSnyynt0yhSsFB-J6sLP388Xum5V8qRkxSv1eA__",
      comment:
        "Transforming me from a normal t-shirt guy to a fashion lover, this brand has changed the game for me. Thanks to the relatable themes, it makes me feel connected to my college",
    },

    {
      id: 2,
      name: "Dev",
      img: "https://s3-alpha-sig.figma.com/img/5350/aede/f3110485be869387363665aa7b3c33bc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ-w919DJnTOOsI58PpQqVDXJAXkRmsQPGQa0dW3uCkBW0miBefry~Y2rBauQX27lEyUl8cVMWVXPeG4k7gJ73PchF8xlq1oqdtS2McMr~fON02UVv3qtonrWsa1Z8i5ZEvHeYd5QmuxpfqGvJEGCjES8of2XmELXuAWVJrMHRvVbhyWvBhiB8bXfS78oA6aM4q6Vq5hLhrr2puxZ8o1h5r0tgScR9FCe8mmbd7-HhzSa4K~McmXFqWPBk5QE6oy9tadZio1SIcigH1qB058znyLn12g48vFkPsE1xzAkFF7amuXDSnyynt0yhSsFB-J6sLP388Xum5V8qRkxSv1eA__",
      comment:
        "Instibuzz has really impressed me. As the Sports Sec, I needed hundreds of jerseys that looked good, were made well, and fit my budget. I was unsure about finding the right vendor, but Instibuzz came through. They provided everything I needed, customized to my specifications, and made sure it all arrived on time for the Schroeter's trophy event.",
    },
    {
      id: 3,
      name: "AMSA",
      img: "https://s3-alpha-sig.figma.com/img/5350/aede/f3110485be869387363665aa7b3c33bc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ-w919DJnTOOsI58PpQqVDXJAXkRmsQPGQa0dW3uCkBW0miBefry~Y2rBauQX27lEyUl8cVMWVXPeG4k7gJ73PchF8xlq1oqdtS2McMr~fON02UVv3qtonrWsa1Z8i5ZEvHeYd5QmuxpfqGvJEGCjES8of2XmELXuAWVJrMHRvVbhyWvBhiB8bXfS78oA6aM4q6Vq5hLhrr2puxZ8o1h5r0tgScR9FCe8mmbd7-HhzSa4K~McmXFqWPBk5QE6oy9tadZio1SIcigH1qB058znyLn12g48vFkPsE1xzAkFF7amuXDSnyynt0yhSsFB-J6sLP388Xum5V8qRkxSv1eA__",
      comment:
        "Thank you InstiBuzz for the fantastic jerseys for our APL Cricket League. The quality exceeded our expectations, and the service was fantastic. Participants were very happy with the comfort and design of the jerseys. Looking forward to future collaborations!!",
    },

    // {
    //   id: 4,
    //   name: "Becky Nelson",
    //   img: "https://s3-alpha-sig.figma.com/img/5350/aede/f3110485be869387363665aa7b3c33bc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ-w919DJnTOOsI58PpQqVDXJAXkRmsQPGQa0dW3uCkBW0miBefry~Y2rBauQX27lEyUl8cVMWVXPeG4k7gJ73PchF8xlq1oqdtS2McMr~fON02UVv3qtonrWsa1Z8i5ZEvHeYd5QmuxpfqGvJEGCjES8of2XmELXuAWVJrMHRvVbhyWvBhiB8bXfS78oA6aM4q6Vq5hLhrr2puxZ8o1h5r0tgScR9FCe8mmbd7-HhzSa4K~McmXFqWPBk5QE6oy9tadZio1SIcigH1qB058znyLn12g48vFkPsE1xzAkFF7amuXDSnyynt0yhSsFB-J6sLP388Xum5V8qRkxSv1eA__",
    //   comment:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    // },

    // {
    //   id: 5,
    //   name: "Becky Nelson",
    //   img: "https://s3-alpha-sig.figma.com/img/5350/aede/f3110485be869387363665aa7b3c33bc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ-w919DJnTOOsI58PpQqVDXJAXkRmsQPGQa0dW3uCkBW0miBefry~Y2rBauQX27lEyUl8cVMWVXPeG4k7gJ73PchF8xlq1oqdtS2McMr~fON02UVv3qtonrWsa1Z8i5ZEvHeYd5QmuxpfqGvJEGCjES8of2XmELXuAWVJrMHRvVbhyWvBhiB8bXfS78oA6aM4q6Vq5hLhrr2puxZ8o1h5r0tgScR9FCe8mmbd7-HhzSa4K~McmXFqWPBk5QE6oy9tadZio1SIcigH1qB058znyLn12g48vFkPsE1xzAkFF7amuXDSnyynt0yhSsFB-J6sLP388Xum5V8qRkxSv1eA__",
    //   comment:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    // },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: "30px",
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    pauseOnHover: true,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          slidesToScroll: 1,
          // variableWidth: false,
          initialSlide: 3,
          infinite: true,
          // centerPadding: "10px",
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          // centerMode: true,
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          infinite: true,
          centerPadding: "10px",
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          centerMode: true,
          // centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,

          slidesToScroll: 1,
          initialSlide: 3,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className=" hidden sm:hidden md:w-full h-80 my-8  bg-white md:hidden lg:flex items-center justify-center relative ">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 font-Tenor">
            What Our Clients Say
          </h2>
          <p className="text-lg  text-wrap inline font-lato">
            Our Clients send us bunch of smiles with our services <br /> and we
            love them
          </p>
        </div>

        <div className="md:hidden sm:hidden lg:block absolute top-0 left-0 right-0 bottom-0 flex justify-center  items-center">
          <div className=" bg-circleblue h-16 w-16 rounded-full absolute top-12 left-16"></div>
          <div className=" bg-yellow1 h-14 w-14 rounded-full absolute  top-48 left-96"></div>
          <div className=" bg-circlebrown  h-9 w-9 rounded-full absolute  top-36 left-[17.6rem]"></div>
          <div className=" bg-circlegreen h-20 w-20  rounded-full absolute top-48 left-32"></div>
          <div className=" bg-circleorange h-16 w-16 rounded-full absolute top-72 left-[29rem]"></div>
          <div className=" bg-circlegreen h-14 w-14 rounded-full absolute top-[4.2rem] left-[25rem]"></div>

          <div className=" bg-circleorange h-16 w-16 rounded-full absolute top-20 right-16"></div>
          <div className=" bg-circlegreen h-16 w-16 rounded-full absolute top-72 right-[29rem]"></div>
          <div className=" bg-yellow1 h-16 w-16 rounded-full absolute top-16 right-[17rem]"></div>
          <div className=" bg-circleorange h-9 w-9 rounded-full absolute top-[6.5rem] right-[28rem]"></div>
          <div className=" bg-circlebrown h-12 w-12 rounded-full absolute  top-52 right-[20rem]"></div>
          <div className=" bg-circlegreen  h-9 w-9 rounded-full absolute  top-40 right-[13rem]"></div>
          <div className=" bg-circleblue h-[3.3rem] w-[3.3rem]  rounded-full absolute top-52 right-[6.5rem]"></div>
        </div>
      </section>

      <h1 className="mx-6 md:mx-10 font-Tenor justify-start text-xl md:text-2xl font-bold pt-12 pb-4 px-1 border-t-2 border-greyborder lg:hidden ">
        What our Clients Says
      </h1>

      <Slider
        {...settings}
        className="custom-slider-Test my-8   w-full lg:-mt-7"
      >
        {testimonialCards.map((card) => (
          <div
            key={card.id}
            className="px-6 md:px-6   md:h-80 md:w-full h-96 lg:h-96"
          >
            <div className="relative flex flex-col justify-center items-center w-full h-full  lg:w-[23rem]  lg:h-[24rem]  bg-pink1 rounded-lg shadow-md">
              <div className="p-6   flex flex-col justify-center items-center  lg:h-full ">
                <div className=" w-20 h-20 mt-6 p-2 rounded-full bg-yellow2 flex items-center justify-center">
                  <img
                    src={card.img}
                    alt="Image"
                    class="w-full h-full z-50 rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl text-center font-bold mb-2 mt-2 font-Tenor">
                  {card.name}
                </h2>
                <div className="relative flex h-full flex-col items-center mb-4 gap-5">
                  <div className="flex space-x-1 ">
                    <svg
                      className="w-4 h-4 text-blue-950"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 10.425h10.954l-8.867 6.447 3.667 10.424-8.867-6.447-8.866 6.447 3.666-10.424-8.866-6.447h10.953z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-blue-950"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 10.425h10.954l-8.867 6.447 3.667 10.424-8.867-6.447-8.866 6.447 3.666-10.424-8.866-6.447h10.953z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-blue-950"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 10.425h10.954l-8.867 6.447 3.667 10.424-8.867-6.447-8.866 6.447 3.666-10.424-8.866-6.447h10.953z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-blue-950"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 10.425h10.954l-8.867 6.447 3.667 10.424-8.867-6.447-8.866 6.447 3.666-10.424-8.866-6.447h10.953z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-blue-950"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 10.425h10.954l-8.867 6.447 3.667 10.424-8.867-6.447-8.866 6.447 3.666-10.424-8.866-6.447h10.953z" />
                    </svg>
                  </div>
                  <p className=" text-black font-lato   mb-2 text-center text-xs h-auto lg:h-auto  lg:text-xs  font-semibold mt-5 px-1">
                    {card.comment.substring(0, 300) + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <p></p>
    </>
  );
}

export default Testimonials;
