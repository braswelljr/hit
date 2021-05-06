import { useState, createRef, useEffect } from "react";
import heroImg1 from "../assets/images/institute.png";
import heroImg2 from "../assets/images/academics-bg.png";
import heroImg3 from "../assets/images/night-banner.png";
import partners from "../assets/images/partners.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel";

const Header = () => {
  const [slides, setSlides] = useState(0);
  const pusher = createRef();

  const heroSlides = [
    {
      image: heroImg1,
      topic: `Learn with us everywhere anytime`,
      body: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
      image: heroImg2,
      topic: `Get your certification with us`,
      body: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
      image: heroImg3,
      topic: `Learn with us everywhere anytime`,
      body: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    }
  ];

  // function pushNext() {
  //   let l = slides;
  //   if (l == heroSlides.length - 1) {
  //     l = -1;
  //   }
  //   l = l + 1;
  //   setSlides(l);
  // }
  // function pushPrevious() {
  //   let l = slides;
  //   if (l < 1) {
  //     l = heroSlides.length;
  //   }
  //   l = l - 1;
  //   setSlides(l);
  // }

  return (
    <>
      <Carousel interval={3000} autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {heroSlides.map((slide, i) => (
          <section
            key={i}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
            className="h-[80vh] w-full object-cover bg-cover relative bg-no-repeat -mt-8 bg-current animate-slide top-0 inset-x-0 px-8 font-bold text-white bg-center flex transition-all duration-300 ease-in"
          >
            <div className="flex flex-grow relative text-left mx-auto max-w-[1100px] my-0">
              <div className="w-[62%] absolute inset-x-0 top-1/4">
                <h1
                  className={``}
                  style={{ fontSize: `clamp(1.7em, 8vw, 3.8em)`, lineHeight: `1.3` }}
                >
                  {slide.topic}
                </h1>
                <p style={{ fontSize: `1.2em` }} className="mt-10 font-normal">
                  {slide.body}{" "}
                </p>
              </div>
            </div>
          </section>
        ))}
      </Carousel>
      {/* Partners section */}
      <div className="relative flex items-center justify-center w-full">
        <img className="w-[90%] -mt-32 md:w-3/5" src={partners} alt="partners" />
      </div>
    </>
  );
};

export default Header;
