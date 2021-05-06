import { useState } from "react";
import hexa from "../assets/logos/hexa.svg";
import { BsFillPlayFill } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import Programs from "../components/sections/Programs";
import Modal from "../components/sections/Modal";

const Academics = () => {
  const [openFrame, setOpenFrame] = useState(false);

  return (
    <>
      {/* Get your certification */}
      <section id="learn-skill-container" className="px-8 sm:px-12 lg:px-16 xl:px-36">
        <section className="w-full max-w-[1500px] mx-auto">
          <div className="w-full max-w-[1500px]">
            <div className="flex items-center flex-col-reverse md:flex-row justify-center mx-auto md:justify-between w-full max-w-[1500px] md:space-x-10 md:space-y-0">
              <div
                className="flex flex-col mt-12 md:mt-0 items-center justify-center w-full h-[22.5rem] bg-center bg-no-repeat bg-contain space-y-1.5"
                style={{
                  backgroundImage: `url(${hexa})`
                }}
              >
                <div className="relative p-2 cursor-pointer group">
                  <button
                    type="button"
                    className="flex items-center justify-center p-2 space-y-2 bg-white rounded-full group-hover:bg-white focus:outline-none"
                    onClick={() => (openFrame === false ? setOpenFrame(true) : undefined)}
                  >
                    <BsFillPlayFill className="block w-auto h-10 mx-auto text-primary" />
                  </button>
                  <div className="absolute z-[-1] inset-0 transition-all duration-300 ease-in group-hover:scale-110 scale-50 transform bg-yellow-700 group-hover:animate-pulse rounded-full"></div>
                </div>
                <p className="font-semibold text-white">Watch Video</p>
              </div>
              <div className="w-full mx-auto text-center md:text-left">
                <h1 className="text-3xl font-bold md:text-5xl">Get your Certificate with us!</h1>
                <p className="py-10 text-lg font-medium leading-6 text-secondary">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.
                </p>
                <a
                  className="inline-block px-12 py-3 mx-auto text-lg uppercase transition-transform transform border-0 rounded-lg text-primary focus:outline-none"
                  style={{ boxShadow: `-0.5px 7.5px 7.5px 0.01px rgb(0 0 0 / 25%)` }}
                  href="#"
                >
                  KNOW MORE
                </a>
              </div>
            </div>
          </div>
          {/* youtube frame */}
          <div
            className={`fixed ${
              openFrame === true ? `flex` : `hidden`
            } items-center bg-gray-700 bg-opacity-25 justify-center inset-0 z-[25]`}
          >
            <div className="w-[90%] md:w-[75%] h-3/5 lg:w-1/2 xl:w-2/5">
              <iframe
                src="https://www.youtube.com/embed/IBaAwlsZzew"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <button
              type="button"
              className="absolute p-3 bg-white rounded-full focus:outline-none top-6 right-6"
              onClick={() => (openFrame !== false ? setOpenFrame(false) : setOpenFrame(true))}
            >
              <HiX className="w-auto h-7" />
            </button>
          </div>
        </section>
      </section>

      {/* Course Info */}
      <section className="px-8 py-12 bg-gray-100 sm:px-12 lg:px-16 xl:px-36">
        <div className="flex flex-col items-center justify-around space-y-10 md:space-y-0 md:flex-row">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="font-bold tracking-wide">Total Students</h3>
            <span className="text-6xl font-bold text-primary">300</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="font-bold tracking-wide">Total Courses</h3>
            <span className="text-6xl font-bold text-primary">6</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="font-bold tracking-wide">Satisfactory rate</h3>
            <span className="text-6xl font-bold text-primary">96%</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="font-bold tracking-wide">Pro Instructors</h3>
            <span className="text-6xl font-bold text-primary">12</span>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal />

      {/* Programs */}
      <div className="py-8 bg-gray-100">
        <Programs />
      </div>
    </>
  );
};

export default Academics;
