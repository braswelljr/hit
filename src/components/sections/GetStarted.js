import React from "react";

const GetStarted = () => {
  return (
    <section className="px-8 py-10 space-y-10 sm:px-12 lg:px-16 xl:px-28">
      <div className="flex items-center justify-center text-3xl font-bold md:text-5xl">
        <h1 className="block mx-auto">Get started today</h1>
      </div>
      <div className="flex items-center justify-center text-2xl font-medium leading-8 text-secondary">
        Join our international community of Innovators.
      </div>
      <form action="#" method="POST" className="w-full space-y-5">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          id="email-input"
          autoComplete="off"
          className="flex w-full px-4 py-2 mx-auto text-lg placeholder-gray-300 transition-colors border rounded-lg focus:border-primary sm:w-3/4 md:w-3/5 lg:w-1/2 focus:outline-none"
        />
        <button
          type="submit"
          className="block px-12 py-3 mx-auto text-lg uppercase border-0 rounded-lg bg-primary text-gray-50 active:bg-primary focus:outline-none"
        >
          Sign up
        </button>
      </form>
    </section>
  );
};

export default GetStarted;
