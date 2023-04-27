import React from "react";
import heroImgFront from "../static/img/hero-front.png";
import heroImgBack from "../static/img/hero-back.png";
import connectImg from "../static/img/connect.png";
import chartImg from "../static/img/line-chart.png";
import rocketImg from "../static/img/rocket.png";
import tier1Img from "../static/img/tier-1.png";
import tier2Img from "../static/img/tier-2.png";
import tier3Img from "../static/img/tier-3.png";
import tier4Img from "../static/img/tier-4.png";
import tokenomicsImg from "../static/img/tokenomics.png";
import CurrencySlider from "./includes/CurrencySlider";
import Partners from "./includes/Partners";

function Home() {
  const tierList = [
    {
      id: 1,
      package: 'basic',
      stakingRequirements: '300',
      allocation: 'Lottery (100 Among all)',
      minStaking: '0',
      poolWeight: '05',
      img: tier1Img,
    },
    {
      id: 2,
      package: 'standard',
      stakingRequirements: '500',
      allocation: 'Lottery (50% Among all)',
      minStaking: '7',
      poolWeight: '10',
      img: tier2Img,
    },
    {
      id: 3,
      package: 'premium',
      stakingRequirements: '10,000',
      allocation: 'Guaranteed',
      minStaking: '30',
      poolWeight: '15',
      img: tier3Img,
    },
    {
      id: 4,
      package: 'delux',
      stakingRequirements: '20,000',
      allocation: 'Guaranteed',
      minStaking: '60',
      poolWeight: '25',
      img: tier4Img,
    },
  ]
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
      
      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h1 className="mb-12 md:text-4xl text-3xl text-center font-bold pb-12">
          The Booster for the Crypto World
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="relative bg-[#1E2733] px-5 py-10 lg:p-10 text-center rounded-full hover:scale-105 transition-all duration-300 ease-in-out max-w-sm">
            <div className="absolute top-4 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-[#1E2733] p-5 rounded-full hover:scale-105 hover:shadow-xl">
              <img src={connectImg} alt="connect" className="w-10 lg:w-12"/>
            </div>
            <h3 className="mt-3 lg:mt-2 text-lg font-semibold">Multi-type Sale Pools</h3>
            <p className="text-[#a1abb9]">support both token & NFT sale pools with multiple methods</p>
          </div>
          <div className="relative bg-[#1E2733] px-5 py-10 lg:p-10 text-center rounded-full hover:scale-105 transition-all duration-300 ease-in-out max-w-sm">
            <div className="absolute top-4 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-[#1E2733] p-5 rounded-full hover:scale-105 hover:shadow-xl">
              <img src={chartImg} alt="chart icon" className="w-10 lg:w-12"/>
            </div>
            <h3 className="mt-3 lg:mt-2 text-lg font-semibold">NFT tier</h3>
            <p className="text-[#a1abb9]">support NFT avatar and build the tier system on NFTs</p>
          </div>
          <div className="relative bg-[#1E2733] px-5 py-10 lg:p-10 text-center rounded-full hover:scale-105 transition-all duration-300 ease-in-out max-w-sm">
            <div className="absolute top-4 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-[#1E2733] p-5 rounded-full hover:scale-105 hover:shadow-xl">
              <img src={rocketImg} alt="rocket icon" className="w-10 lg:w-12"/>
            </div>
            <h3 className="mt-3 lg:mt-2 text-lg font-semibold">Web3 Incubator</h3>
            <p className="text-[#a1abb9]">support both token & NFT sale pools with multiple methods</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
        <h1 className="md:text-4xl text-3xl text-center font-bold pb-12">
          Tokenomics
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 content-center gap-16">
          <div className="grid grid-cols-2 my-auto">
            <div className="flex flex-col gap-6 w-max mx-auto">
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Total Supply</p>
                  <p>15,000,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Public Sale</p>
                  <p>$0.24</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Farming Pool</p>
                  <p>27.3%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-yellow-700 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Staking</p>
                  <p>15.3%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Ecosystem</p>
                  <p>7.5%</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-max mx-auto">
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Advisor</p>
                  <p>7.03%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-green-700 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Private Sale</p>
                  <p>23.45%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Liquiduty</p>
                  <p>13.3%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-pink-800 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Marketing</p>
                  <p>7.3%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-[#1E2733] px-3 py-1 rounded transition-all duration-300 ease-in-out">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div>
                  <p className="text-[#a1abb9]">Team</p>
                  <p>5.5%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-[#1E2733] rounded-lg">
            <h2 className="text-lg font-bold">Sale Proceed Allocation</h2>
            <img src={tokenomicsImg} alt="tokenomics"/>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-screen-xl px-6 pb-16">
        <div className="relative text-white py-8">
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
        <h1 className="md:text-4xl text-3xl text-center font-bold pb-16">
          Tier Categories
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {tierList.map(tier => (<div key={tier.id} className="bg-[#1E2733] py-10 lg:py-10 text-center rounded lg:hover:-translate-y-6 transition-all duration-300 ease-in-out w-72">
            <div className="border-b border-[rgba(255,255,255,0.2)] px-2">
              <h3 className="mb-3 mt-2 text-xl font-semibold">Tier {tier.id}</h3>
              <img src={tier.img} alt="tier 1 crystal" className="xl:h-[10rem] h-[6rem] w-auto mx-auto"/>
              <h3 className="my-3 mt-2 text-lg font-bold text-[#1BD9BF] uppercase">{tier.package}</h3>
            </div>
            <div className="border-b border-[rgba(255,255,255,0.1)] px-8 py-3">
              <p className="text-[#a1abb9]">Staking Requirements</p>
              <h3 className="font-semibold">{tier.stakingRequirements} BUSD</h3>
            </div>
            <div className="border-b border-[rgba(255,255,255,0.1)] px-8 py-3">
              <p className="text-[#a1abb9]">Allocation Type</p>
              <h3 className="font-semibold">{tier.allocation}</h3>
            </div>
            <div className="border-b border-[rgba(255,255,255,0.1)] px-8 py-3">
              <p className="text-[#a1abb9]">Minimum Staking</p>
              <h3 className="font-semibold">{tier.minStaking} Days</h3>
            </div>
            <div className="px-8 py-3 mb-8">
              <p className="text-[#a1abb9]">Pool Weight</p>
              <h3 className="font-semibold">{tier.poolWeight}</h3>
            </div>
            <button type="button" className="text-black font-medium hover:bg-[#21eed3] bg-[#1BD9BF] py-2 px-3 rounded transition-all duration-300 ease-in-out">Select Plan</button>
          </div>))}
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
