import React from "react";
import { programs, courses } from "../../components/data/programs";
import GetStarted from "../../components/sections/GetStarted";
import banner from "../../assets/images/iot-banner.png";
import { HiAcademicCap, HiClock } from "react-icons/hi";

export const getStaticPaths = async () => {
  // fetch programs
  // const res = await fetch(programs);
  // const programmes = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = programs.map(program => ({
    params: {
      program: program.topic.replace(/ /g, ``).toString().toLowerCase()
    }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async context => {
  // const res = await fetch(programs);
  // const programmes = await res.json();

  //fetch item from programs
  const program = programs.find(
    program => program.topic.replace(/ /g, ``).toString().toLowerCase() === context.params.program
  );

  // fetch courses
  const course = courses.filter(
    program => program.course.replace(/ /g, ``).toString().toLowerCase() == context.params.program
  );

  return {
    props: {
      program: program,
      courses: course
    }
  };
};

const Programme = ({ program, courses }) => {
  return (
    <>
      {/* header banner */}
      <section
        style={{ backgroundImage: `url(${banner})` }}
        className="h-[40vh] bg-center bg-cover text-white text-center flex items-center flex-col justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold p-3"
      >
        <div className="uppercase">{program.topic}</div>
        <div className="pt-6 text-base md:text-xl">Learn in demand skills like python</div>
      </section>

      {/* courses */}
      <section className="px-8 py-20 -mt-16 bg-gray-100 sm:px-12 lg:px-16 xl:px-36">
        <div className="flex flex-col items-start justify-between w-full h-full md:space-x-7 space-y-7 md:space-y-0 md:flex-row">
          <div className="w-full bg-white divide-y hover:shadow-lg md:w-1/2 p-7 rounded-xl">
            {/* sub courses */}
            {courses.map((cor, i) => (
              <div key={i} className="space-y-2 py-7">
                <span className="font-semibold tracking-wider text-gray-300">Module</span>
                <h3 className="text-2xl font-semibold">{cor.topic}</h3>
                <p className="">{cor.description}</p>
                <p className="font-medium text-right text-gray-300">
                  Duration : {cor.duration} hours
                </p>
              </div>
            ))}
          </div>

          {/* course details */}
          <div className="w-full py-4 space-y-7 px-7 md:w-1/2">
            <div className="">
              <h2 className="text-3xl font-semibold">Course Description</h2>
              <p className="text-lg font-medium">{program.description}</p>
            </div>
            <div className="">
              <h3 className="text-3xl font-semibold">Course Requirements</h3>
              <ul className="pl-4 text-lg font-medium">
                {program.requirements.map((r, i) => (
                  <li key={i} className="">
                    {i + 1}. {r}.
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <img
                src={program.instructor}
                alt={program.instructorName}
                className="w-auto h-32 mx-auto"
              />
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold">{program.topic} Instructor</h3>
                <h3 className="text-2xl font-semibold">{program.instructorName}</h3>
                <h3 className="text-xl font-semibold text-gray-500">
                  Training lead at Kumasi Hive
                </h3>
                <p className="text-lg font-medium">{program.description}</p>
              </div>

              <div className="pl-4 mt-8 space-y-5">
                <div className="flex justify-start space-x-5 item-start">
                  <HiClock className="block w-auto h-10 text-primary" />
                  <div className="">
                    <h3 className="text-xl font-semibold">Program Length</h3>
                    <p className="">{program.programLength} months</p>
                  </div>
                </div>
                <div className="flex justify-start space-x-5 item-start">
                  <HiAcademicCap className="block w-auto h-10 text-primary" />
                  <div className="">
                    <h3 className="text-xl font-semibold">Career Options</h3>
                    <p className="">{program.careerOptions}</p>
                  </div>
                </div>
                <div className="flex justify-start space-x-5 item-start">
                  <HiAcademicCap className="block w-auto h-10 text-primary" />
                  <div className="">
                    <h3 className="text-xl font-semibold">Program Certification</h3>
                    <p className="capitalize">{program.programCertification}</p>
                  </div>
                </div>
              </div>

              <div className="pl-8 mt-8">
                <button
                  type="submit"
                  className="block px-12 py-3 text-lg uppercase border-0 rounded-lg bg-primary text-gray-50 active:bg-primary focus:outline-none"
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <GetStarted />
    </>
  );
};

export default Programme;
