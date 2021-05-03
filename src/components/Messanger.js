import { useState } from "react";
import { ChatAlt2Icon, XIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

const Messanger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* open button */}
      <button
        type="button"
        className="fixed z-10 w-auto h-auto p-3 text-white rounded-full shadow-xl bg-primary bottom-2 right-2 focus:outline-none md:m-6 xl:m-10"
        onClick={() => {
          open === false ? setOpen(true) : setOpen(false);
        }}
      >
        <Transition
          show={!open}
          enter="ease-in duration-500"
          enterFrom="opacity-0 transform translate-x-3"
          enterTo="opacity-100 transform translate-x-0"
          leave="ease-out duration-400"
          leaveFrom="opacity-100 transform translate-x-0"
          leaveTo="opacity-0  transform -translate-x-4"
        >
          <ChatAlt2Icon className="w-auto h-8 text-current" />
        </Transition>
        <Transition
          show={open}
          enter="ease-in duration-500"
          enterFrom="opacity-0 transform translate-x-3"
          enterTo="opacity-100 transform translate-x-0"
          leave="ease-out duration-400"
          leaveFrom="opacity-100 transform translate-x-0"
          leaveTo="opacity-0  transform -translate-x-4"
        >
          <XIcon className="w-auto h-8 text-current" />
        </Transition>
      </button>

      {/* Card */}
      <div
        className={`fixed z-10 transform ${
          open === false ? `translate-y-[32rem] opacity-0` : `translate-y-0 opacity-100`
        } transition-all duration-300 ease-linear overflow-hidden bg-white rounded-br-none shadow-2xl right-4 h-[28rem] w-80 rounded-2xl md:bottom-24 lg:bottom-32 bottom-20 md:right-12 lg:right-16 xl:right-[4.8rem]`}
      >
        <div className="p-3 text-center text-white bg-primary">
          <h3 className="text-lg font-semibold">Send Message</h3>
          <p className="text-left">
            Please fill out the form we will get back to you as soon as posible.
          </p>
        </div>
        <form action="#" method="post" className="w-full p-3 mt-4 space-y-5 text-base rounded-lg">
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name-input"
              autoComplete="off"
              className="flex w-full p-2 placeholder-gray-300 transition-colors border rounded-lg text-normal focus:border-primary focus:outline-none"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="email-input"
              autoComplete="off"
              className="flex w-full p-2 placeholder-gray-300 transition-colors border rounded-lg text-normal focus:border-primary focus:outline-none"
            />
          </div>
          <div className="">
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              id="message-input"
              autoComplete="off"
              className="flex w-full p-2 placeholder-gray-300 transition-colors border rounded-lg h-3/5 text-normal focus:border-primary focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="block w-full py-2 mx-auto text-lg text-center border-0 rounded-lg bg-primary text-gray-50 active:bg-primary focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Messanger;
