import heroImg1 from "../assets/images/institute.png";
import heroImg2 from "../assets/images/academics-bg.png";
import heroImg3 from "../assets/images/night-banner.png";
import { Carousel } from "react-responsive-carousel";
import knustimg from "../assets/logos/knust.png";
import khimg from "../assets/logos/kh2.png";
import cotvetimg from "../assets/logos/COTVET.png";
import waziimg from "../assets/logos/wazi.png";

const Header = () => {
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

  return (
    <>
      <Carousel
        interval={10000}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
      >
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
        <div className="flex items-center justify-around w-[90%] md:w-3/5 -mt-32 mx-auto p-2 bg-white shadow-xl rounded-xl">
          <img src={waziimg} alt="headliner" className="w-20 md:w-40" />
          <img src={cotvetimg} alt="headliner" className="w-12" />
          <img src={khimg} alt="headliner" className="w-20 md:w-40" />
          <img src={knustimg} alt="headliner" className="w-12 md:w-16" />
        </div>
      </div>
    </>
  );
};

export default Header;
