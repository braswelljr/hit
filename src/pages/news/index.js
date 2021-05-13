import React from "react";
import headImg from "../assets/images/news-banner.png";
import news1 from "../assets/images/otn1.png";
import news2 from "../assets/images/otn1.png";
import news3 from "../assets/images/otn1.png";
import goldenRetriever from "../assets/images/golden-retriever.png";

const News = () => {
  const news = [
    {
      storyImg: news1,
      storyLine: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, suscipit in? Earum fugiat veritatis, aperiam voluptas eaque.`
    },
    {
      storyImg: news2,
      storyLine: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, suscipit in? Earum fugiat veritatis, aperiam voluptas eaque.`
    },
    {
      storyImg: news3,
      storyLine: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, suscipit in? Earum fugiat veritatis, aperiam voluptas eaque.`
    }
  ];

  return (
    <>
      {/* header */}
      <section className="h-[50vh] w-full">
        <img src={headImg} alt="News Header" className="object-cover object-center w-auto h-full" />
      </section>

      {/* News and events */}
      <section className="p-8 sm:px-12 lg:px-16 xl:px-36">
        <h1 className="text-3xl font-bold text-center md:text-5xl">News and Events</h1>
        <div className="flex justify-around mt-5 space-x-4 items-top">
          <section className="w-full space-y-4 md:w-3/5">
            <img src={goldenRetriever} alt="slepping dog" className="w-full h-auto" />
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur molestiae eum amet
              nisi praesentium incidunt consequatur ipsum minus. Ad tempore, maiores alias iusto
              quos nulla expedita repellendus illum laboriosam consequuntur odit tempora saepe. Iste
              vero consequatur temporibus nulla accusantium unde officia nihil necessitatibus
              reiciendis assumenda exercitationem aperiam culpa debitis, cupiditate dolor sunt
              consectetur illo soluta minus quod nostrum porro quia. Earum natus a ducimus. Sed
              maiores ducimus voluptatum. Quia vero aperiam natus, optio sed iste distinctio
              dignissimos error nihil laborum doloribus dolore cumque adipisci repellendus officiis
              quam ad deserunt deleniti repudiandae dicta sint. Voluptatibus esse quas, harum
              debitis, vitae obcaecati, quis quia voluptas asperiores numquam dolorem similique
              recusandae quibusdam ea ratione iste et dicta quaerat soluta eos deleniti corrupti
              ipsam vel! Eligendi quo molestias in repellat quae velit dolore magnam quam quidem,
              porro ullam ipsum error unde ad sapiente quod explicabo omnis dignissimos id neque.
              Consequatur harum molestiae veritatis iusto aliquid temporibus rem modi voluptate
              dolore. Optio, veniam! Distinctio ipsam mollitia et repudiandae quo eos fugit qui
              eveniet, quidem doloremque vero tempora quod consequatur possimus ex officiis iusto
              quaerat ducimus, adipisci quos beatae ratione id? Dolor iure velit fuga fugit eius
              nostrum aperiam officiis illo! Ad quod maxime officia facilis.
            </p>
          </section>
          <section className="flex-col items-center justify-around hidden w-2/5 space-y-5 md:flex">
            {news.map((n, i) => (
              <div
                key={i}
                className="flex flex-col justify-between w-full max-w-xs space-y-2 overflow-hidden shadow-md rounded-b-2xl drop-shadow-xl rounded-t-[3rem] border cursor-pointer transition-all transform hover:-translate-y-0.5"
              >
                <img
                  src={n.storyImg}
                  alt=""
                  className="object-center rounded-t-[3rem] w-full truncate"
                />
                <div className="p-4">{n.storyLine}</div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default News;
