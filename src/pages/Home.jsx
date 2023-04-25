import React from "react";
import heroImgFront from "../static/img/hero-front.png";
import heroImgBack from "../static/img/hero-back.png";
import CurrencySlider from "./includes/CurrencySlider";
import Partners from "./includes/Partners";

function Home() {
  return (
    <>
      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 px-5">
          <div className="mx-auto my-auto">
            <h1 className="md:text-5xl text-4xl font-bold text-[#1BD9BF] mb-5">
              Start a new era of encryption{" "}
              <span className="text-white">launch based on Web 3.0</span>
            </h1>
            <p className="text-[#a1abb9] text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur beatae rem ipsum repudiandae! Rem ea odio doloremque.
              Neque, deleniti velit nemo vel impedit facilis! Quaerat, assumenda
              doloremque. Dolor!
            </p>
          </div>
          <div className="relative mx-auto">
            <img
              src={heroImgBack}
              alt="hero section back image"
              className="absolute animate-float"
            />
            <img
              src={heroImgFront}
              alt="hero section front image"
              className="animate-floatreverse"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 py-16">
        <CurrencySlider />
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 pb-16">
        <div className="text-white py-8">
          <div className="flex flex-col items-start lg:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-[#1BD9BF] uppercase tracking-loose">
                Working Process
              </p>
              <p className="md:text-4xl text-3xl font-bold pb-3">Roadmap</p>
              <p className="text-sm md:text-base text-[#a1abb9] mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                debitis voluptates nisi facere quam asperiores officia,
                molestias, explicabo eum praesentium culpa magnam exercitationem
                officiis eveniet minima nesciunt, laborum delectus. Minima?
              </p>
              {/* <a
                href="#"
                className="bg-transparent mr-auto hover:bg-[#1BD9BF] text-[#1BD9BF] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#1BD9BF] hover:border-transparent"
              >
                Explore Now
              </a> */}
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden py-10 sm:px-10 h-full">
                  <div className="absolute h-full border right-1/2 border-dashed border-[#1BD9BF] rounded"></div>
                  <div className="absolute h-full border left-1/2 border-dashed border-[#1BD9BF] rounded"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="md:text-base text-sm text-[#1BD9BF]">
                        First Step
                      </p>
                      <h4 className="mb-3 md:font-bold font-semibold text-sm md:text-2xl">
                        Registration
                      </h4>
                      <p className="text-xs md:text-base leading-snug text-[#a1abb9] text-opacity-100">
                        Enim nostrud magna consequat consequat deserunt Lorem
                        cillum deserunt id fugiat ullamco cupidatat sint.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="md:text-base text-sm text-[#1BD9BF]">
                        Second Step
                      </p>
                      <h4 className="mb-3 md:font-bold font-semibold text-sm md:text-2xl">
                        Participation
                      </h4>
                      <p className="text-xs md:text-base leading-snug text-[#a1abb9] text-opacity-100">
                        Tempor quis eiusmod nisi aliqua nulla labore pariatur
                        cupidatat adipisicing anim. Enim reprehenderit nisi
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="md:text-base text-sm text-[#1BD9BF]">
                        Third Step
                      </p>
                      <h4 className="mb-3 md:font-bold font-semibold text-sm md:text-2xl">
                        Result Declaration
                      </h4>
                      <p className="text-xs md:text-base leading-snug text-[#a1abb9] text-opacity-100">
                        Elit minim voluptate consequat pariatur in cillum
                        voluptate do tempor nulla. Proident ad laborum ex Lorem
                        elit sit.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="md:text-base text-sm text-[#1BD9BF]">
                        Fourth Step
                      </p>
                      <h4 className="mb-3 md:font-bold font-semibold text-sm md:text-2xl">
                        Prize Distribution
                      </h4>
                      <p className="text-xs md:text-base leading-snug text-[#a1abb9] text-opacity-100">
                        Aliqua amet ullamco elit amet excepteur labore
                        adipisicing sit quis. Sit ut quis ullamco labore duis
                        duis eiusmod ex laborum anim proident.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Home;
