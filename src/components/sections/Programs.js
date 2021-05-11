import React from "react";
import Link from "next/link";

const Programs = ({ content }) => {
  return (
    <>
      <section className="px-8 space-y-10 sm:px-12 lg:px-16 xl:px-28">
        <div className="flex items-center justify-center text-3xl font-bold md:text-5xl">
          <h1 className="block mx-auto">Our Programs</h1>
        </div>
        <div
          className="grid items-center justify-center gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 17rem))"
          }}
        >
          {content.map((program, i) => (
            <Link
              key={i}
              href={`/academics/${encodeURIComponent(program.topic.replaceAll(` `, ``))}`}
            >
              <div
                className="object-cover border block hover:shadow-xl cursor-pointer relative mx-auto w-full overflow-hidden transition-all bg-center bg-no-repeat group rounded-xl min-w-[14.5rem] h-72"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${program.image})`
                }}
                href="#"
              >
                <div className="absolute inset-0 z-[0] text-white group-hover:text-gray-700 group-hover:bg-yellow-50 group-hover:bg-opacity-75 h-full transition-all w-full space-y-10">
                  <h3 className="block mt-52 transform group-hover:translate-y-[-12rem] transition-all font-medium mx-4 mb-0 text-3xl">
                    {program.topic}
                  </h3>
                  <p className="block mt-[18rem] transform group-hover:translate-y-[-12rem] transition-all mx-4 mb-0 text-xl">
                    {program.body}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Programs;
