import React from "react";
import { LightBulbIcon, TrendingUpIcon, PresentationChartLineIcon } from "@heroicons/react/solid";
import learnSkill from "../assets/images/learn3.png";
import Programs from "../components/sections/Programs";
import GetStarted from "../components/sections/GetStarted";
import { programs } from "../components/data/programs";

const Index = () => {
  const mantra = [
    {
      topic: `Innovation`,
      body: `We aim to foster a practical skilled generation that is able to articulate problems and develop sustainable and effective future proof ideas.`,
      icon: <LightBulbIcon className={`h-10 w-auto text-primary`} />
    },
    {
      topic: `Emerging Technology`,
      body: `Our course syllabus is designed to develop awareness, competence and confidence in understanding and using relevant modern technologies to solve societal problems.`,
      icon: <TrendingUpIcon className={`h-10 w-auto text-primary`} />
    },
    {
      topic: `Hands on Practicality`,
      body: `Experiments, practical investigations and actual realization of relevant topics and their impact in real life is always encouraged across board.`,
      icon: <PresentationChartLineIcon className={`h-10 w-auto text-primary`} />
    }
  ];

  const news = [
    {
      topic: `COVID-19 Storms KNUST.`,
      name: `UI/UX Designs`
    },
    {
      topic: `The HIVE wins best hive of the year.`,
      name: `UI/UX Designs`
    },
    {
      topic: `Agritech Innovation wins.`,
      name: `UI/UX Designs`
    }
  ];

  return (
    <>
      {/* our mantra */}
      <section className="w-full pb-6 space-y-8 text-gray-700 lg:px-16 xl:px-28">
        <div className="flex items-center justify-center text-3xl font-bold md:text-5xl">
          <h1 className="block mx-auto">Our mantra</h1>
        </div>
        <div className="flex flex-col items-start justify-around space-y-12 md:flex-row md:space-y-0">
          {mantra.map((mant, i) => (
            <div key={i} className="flex flex-col justify-center w-3/5 mx-auto space-y-4 md:w-3/12">
              <div className="inline-flex justify-center px-auto">{mant.icon}</div>
              <h4 className={`text-2xl md:text-3xl font-bold text-center`}>{mant.topic}</h4>
              <p className={`text-center`}>{mant.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* learn a skill */}
      <section id="learn-skill-container" className="px-8 bg-gray-100 sm:px-12 lg:px-16 xl:px-36">
        <section className="w-full max-w-[1500px] mx-auto">
          <div className="w-full max-w-[1500px] py-16 md:py-20">
            <div className="flex items-center flex-col md:flex-row justify-center mx-auto md:justify-between w-full max-w-[1500px] md:space-x-10 space-y-12 md:space-y-0">
              <div className="text-center md:text-left w-[80%] mx-auto">
                <h1 className="text-3xl font-bold md:text-5xl">
                  Learn a skill and earn a <span className="text-primary">living!</span>
                </h1>
                <p className="py-10 text-xl font-medium leading-7 text-secondary">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.
                </p>
                <a
                  className="inline-block px-12 py-3 mx-auto text-lg uppercase transition-transform transform border-0 rounded-lg bg-primary text-gray-50 focus:outline-none"
                  href="#"
                >
                  ENROLL
                </a>
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src={learnSkill}
                  alt="student-learning"
                  className="object-cover w-full h-auto mx-auto md:w-full sm:w-4/6 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* our programs */}
      <Programs content={programs} />

      {/* Hive News */}
      <section className="px-8 py-10 space-y-10 bg-gray-100 sm:px-12 lg:px-16 xl:px-28">
        <div className="flex items-center justify-center text-3xl font-bold md:text-5xl">
          <h1 className="block mx-auto">Hive Institute News</h1>
        </div>
        <div className="flex items-center justify-center text-2xl font-medium leading-8 text-secondary">
          News Today
        </div>
        <div
          className="grid items-center justify-center w-full gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 17rem))"
          }}
        >
          {news.map((n, i) => (
            <div
              key={i}
              className="block w-full overflow-hidden rounded-md cursor-pointer hover:shadow-xl h-72"
            >
              <div className="w-full bg-gray-300 h-1/2"></div>
              <div className="w-full p-3 space-y-4 text-white bg-secondary h-1/2">
                <a href="#" className="text-lg font-semibold">
                  {n.topic}
                </a>
                <h3 className="font-medium">{n.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get started today */}
      <GetStarted />
    </>
  );
};

export default Index;
