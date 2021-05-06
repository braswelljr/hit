import { useState } from "react";
import person1 from "../../assets/images/ama.png";
import person2 from "../../assets/images/boy.png";
import quotes from "../../assets/logos/quotes.svg";
import testimonial from "../../assets/logos/testimonial-bg.svg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Modal = () => {
  const [person, setPerson] = useState(0);

  const persons = [
    {
      image: person1,
      qoute: `I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.`,
      name: `Bernardo Acheampong`,
      role: `UX Engineer`
    },
    {
      image: person2,
      qoute: `If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.`,
      name: `Bernardo Acheampong`,
      role: `Junior Frontend Developer`
    }
  ];
  function pushNext() {
    let l = person;
    if (l == persons.length - 1) {
      l = -1;
    }
    l = l + 1;
    setPerson(l);
  }
  function pushPrevious() {
    let l = person;
    if (l < 1) {
      l = persons.length;
    }
    l = l - 1;
    setPerson(l);
  }

  return (
    <section className="px-8 py-12 sm:px-12 lg:px-16 xl:px-36">
      {/* <Transition
          show={!open}
          enter="ease-in duration-500"
          enterFrom="opacity-0 transform translate-x-3"
          enterTo="opacity-100 transform translate-x-0"
          leave="ease-out duration-400"
          leaveFrom="opacity-100 transform translate-x-0"
          leaveTo="opacity-0  transform -translate-x-4"
        >
        <div className=""></div>
        </Transition> */}
      {persons.map((p, i) => {
        if (i === person) {
          return (
            <div key={i} className="">
              <div className="relative flex flex-col-reverse items-center justify-around p-8 text-center md:space-x-3 md:flex-row md:text-left">
                <div
                  className="w-full h-full p-5 mt-8 space-y-3 text-xl bg-top bg-no-repeat md:w-1/2 lg:w-3/5 md:mt-0 md:ml-7"
                  style={{ backgroundImage: `url(${quotes})`, backgroundSize: `6rem` }}
                >
                  <p className="">"{p.qoute}"</p>
                  <h3 className="font-bold">{p.name}</h3>
                  <h4 className="font-bold text-gray-500">{p.role}</h4>
                </div>
                <div
                  className="flex items-center justify-around w-full h-full p-16 bg-center bg-no-repeat bg-contain lg:w-2/5 md:w-1/2"
                  style={{ backgroundImage: `url(${testimonial})`, backgroundSize: "100% 100%" }}
                >
                  <img src={p.image} alt={p.name} className="w-full h-auto mx-auto rounded-xl" />
                </div>

                {/* switch buttons button */}
                <button
                  type="button"
                  className="absolute left-0 p-2 border rounded-full shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                  onClick={() => pushPrevious()}
                >
                  <HiChevronLeft className="w-auto h-10 text-current" />
                </button>
                <button
                  type="button"
                  className="absolute right-0 p-2 border rounded-full shadow-md focus:outline-none hover:bg-secondary hover:text-white"
                  onClick={() => pushNext()}
                >
                  <HiChevronRight className="w-auto h-10 text-current" />
                </button>
              </div>

              {/*  */}
              <div className="flex items-center justify-center">
                <div className="flex items-center w-auto mx-auto space-x-3">
                  {persons.map((x, j) => {
                    return (
                      <button
                        type="button"
                        key={j}
                        className={`w-3 h-3 rounded-full focus:outline-none ${
                          i === j ? `bg-primary` : `bg-secondary`
                        }`}
                        onClick={() => setPerson(j)}
                      >
                        {" "}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default Modal;
