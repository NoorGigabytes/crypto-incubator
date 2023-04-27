import React from "react";
import aboutImg from "../static/img/about.png";
import { Tilt } from "react-tilt";
import { TbBrandStackshare } from "react-icons/tb";
import {
  MdOutlineSecurity,
  MdOutlineSwapCalls,
  MdOutlinePersonAddAlt,
} from "react-icons/md";
import { GoProject } from "react-icons/go";
import { AiOutlineUnlock } from "react-icons/ai";
import Partners from "./includes/Partners";

function About() {
  const cardsContent = [
    {
      title: "Advantage 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare, massa at auctor malesuada, eros est suscipit ex, vitae consequat felis metus sed lorem.",
      icon: <TbBrandStackshare className="text-4xl text-[#1BD9BF] mx-auto" />,
    },
    {
      title: "Advantage 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare, massa at auctor malesuada, eros est suscipit ex, vitae consequat felis metus sed lorem.",
      icon: <AiOutlineUnlock className="text-4xl text-[#1BD9BF] mx-auto" />,
    },
    {
      title: "Advantage 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare, massa at auctor malesuada, eros est suscipit ex, vitae consequat felis metus sed lorem.",
      icon: <GoProject className="text-4xl text-[#1BD9BF] mx-auto" />,
    },
    {
      title: "Advantage 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare, massa at auctor malesuada, eros est suscipit ex, vitae consequat felis metus sed lorem.",
      icon: <MdOutlineSwapCalls className="text-4xl text-[#1BD9BF] mx-auto" />,
    },
    {
      title: "Advantage 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare, massa at auctor malesuada, eros est suscipit ex, vitae consequat felis metus sed lorem.",
      icon: (
        <MdOutlinePersonAddAlt className="text-4xl text-[#1BD9BF] mx-auto" />
      ),
    },
    {
      title: "Advantage 6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare, massa at auctor malesuada, eros est suscipit ex, vitae consequat felis metus sed lorem.",
      icon: <MdOutlineSecurity className="text-4xl text-[#1BD9BF] mx-auto" />,
    },
  ];

  return (
    <>
      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 px-5 overflow-hidden">
          <div className="mx-auto">
            <img
              src={aboutImg}
              alt="about section image"
              className="animate-rotate"
            />
          </div>
          <div className="mx-auto my-auto">
            <h1 className="md:text-5xl text-3xl font-bold text-[#1BD9BF] mb-5">
              COMPANY is a public token launchpad{" "}
              <span className="text-white">
                serving for crypto investors & projects
              </span>
            </h1>
            <p className="text-[#a1abb9] text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur beatae rem ipsum repudiandae! Rem ea odio doloremque.
              Neque, deleniti velit nemo vel impedit facilis! Quaerat, assumenda
              doloremque. Dolor!
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h1 className="md:text-4xl text-3xl text-center font-bold pb-12">
          Our Advantages
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 content-center gap-5">
          {cardsContent.map((card, index) => (
            <div key={index} className="p-2">
              <Tilt
                className=" shadow-lg rounded-lg border-[#1BD9BF] px-3 py-5 bg-[#1E2733]"
                options={{
                  max: 15,
                  scale: 1.05,
                  speed: 400,
                  glare: true,
                  "max-glare": 0.3,
                }}
              >
                {card.icon}
                <h3 className="text-2xl text-[#a1abb9] font-bold mb-4 text-center mt-3">
                  {card.title}
                </h3>
                <p className="text-[#1BD9BF] text-center">{card.text}</p>
              </Tilt>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h1 className="md:text-4xl text-3xl text-center font-bold pb-12">
          Our Partners
        </h1>
        <Partners />
      </section>
    </>
  );
}

export default About;
