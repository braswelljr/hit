import React from "react";
import Header from "../../components/Header";
import hitb from "../../assets/logos/HITB.png";
import coreV from "../../assets/images/df.png";
import inlinepartners from "../../assets/logos/inline-partners.png";
import nab from "../../assets/logos/nab.png";

const About = () => {
  const members = [
    {
      name: `Okoli Dubem`,
      title: `Board Chairman`
    },
    {
      name: `Esther Yiadom`,
      title: `CEO`
    },
    {
      name: `El Chapo Ortingez Gonzales`,
      title: `Dean of Students`
    }
  ];
  return (
    <>
      <div className="space-y-16">
        {/* Header */}
        <Header slideN={3} />

        {/* learn a skill */}
        <section className="sm:px-12 lg:px-16 xl:px-36">
          <div className="flex flex-col items-center justify-center w-full mx-auto md:flex-row md:justify-between md:space-x-10">
            <div className="px-8 mx-auto text-center md:order-1 md:text-left lg:w-3/5 md:w-1/2">
              <h1 className="text-5xl font-bold">About Us!</h1>
              <p className="pt-5 text-xl font-medium leading-7 text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati molestias
                animi tenetur sequi excepturi magnam quisquam iure expedita natus consequuntur
                assumenda cupiditate ex facilis illum facere voluptate veritatis quod soluta sunt
                blanditiis dolore, officiis possimus? Error, odit suscipit libero sint facilis sunt
                ut voluptas harum incidunt aliquam dolorum ex.
              </p>
            </div>
            <div className="flex items-center justify-around w-full h-full p-16 lg:w-2/5 md:w-1/2">
              <img src={hitb} alt="about logo" className="w-4/6 h-auto mx-auto" />
            </div>
          </div>
        </section>

        {/* Accreditors */}
        <section className="px-8 py-10 bg-gray-200 sm:px-12 lg:px-16 xl:px-36">
          <div className="flex items-center justify-around bg-white md:px-10">
            <div className="p-8 mx-auto text-center md:text-left lg:w-3/5 md:w-2/3">
              <h1 className="text-5xl font-bold">Accreditors</h1>
              <p className="pt-5 text-xl font-medium leading-7 text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut consequatur
                incidunt illum officiis autem sunt repellat nobis, fuga blanditiis, perferendis
                beatae distinctio error provident. In quae nemo tempore deserunt.
              </p>
            </div>
            <div className="items-center justify-around hidden w-full h-full p-16 md:flex lg:w-2/5 md:w-1/3">
              <img src={nab} alt="about logo" className="w-5/6 h-auto mx-auto" />
            </div>
          </div>
        </section>

        {/* core values */}
        <section className="sm:px-12 lg:px-16 xl:px-36">
          <div className="flex flex-col items-center justify-center w-full mx-auto md:flex-row md:justify-between md:space-x-10">
            <div className="px-8 mx-auto text-center md:order-1 md:text-left lg:w-3/5 md:w-1/2">
              <h1 className="text-5xl font-bold">Core Values</h1>
              <p className="pt-5 text-xl font-medium leading-7 text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae obcaecati molestias
                animi tenetur sequi excepturi magnam quisquam iure expedita natus consequuntur
                assumenda cupiditate ex facilis illum facere voluptate veritatis quod soluta sunt
                blanditiis dolore, officiis possimus? Error, odit suscipit libero sint facilis sunt
                ut voluptas harum incidunt aliquam dolorum ex.
              </p>
            </div>
            <div className="flex items-center justify-around w-full h-full p-16 lg:w-2/5 md:w-1/2">
              <img src={coreV} alt="about logo" className="w-5/6 h-auto mx-auto" />
            </div>
          </div>
        </section>

        {/* Academic Board */}
        <section className="p-8 space-y-10 bg-gray-200 sm:px-12 lg:px-16 xl:px-28">
          <div className="flex items-center justify-center text-3xl font-bold md:text-5xl">
            <h1 className="block mx-auto">Academic Board</h1>
          </div>
          <div className="flex items-center justify-center text-2xl font-medium leading-8 text-secondary">
            Academics
          </div>
          <div
            className="grid items-center justify-center w-full gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 17rem))"
            }}
          >
            {members.map((n, i) => (
              <div
                key={i}
                className="block w-full overflow-hidden rounded-md cursor-pointer hover:shadow-xl h-80"
              >
                <div className="w-full bg-gray-300 h-3/5"></div>
                <div className="w-full p-5 space-y-2 text-center text-white bg-secondary h-2/5">
                  <h3 href="#" className="text-lg font-medium">
                    {n.name}
                  </h3>
                  <h3 className="font-normal">{n.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="p-8 space-y-10 sm:px-12 lg:px-16 xl:px-28">
          <h1 className="block text-5xl font-bold text-center">Partners</h1>
          <div className="w-full px-8">
            <img src={inlinepartners} alt="partners" className="w-full h-auto" />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
