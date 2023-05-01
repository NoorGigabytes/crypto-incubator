import React, { useState } from "react";
import { useParams } from "react-router-dom";
import nftList from "../static/json/nfts.json";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import InventoryCard from "./includes/InventoryCard";
import { RxCross2 } from "react-icons/rx";

export default function NFTDetail() {
  const { id } = useParams();
  const nft = nftList.find((nft) => nft.id == id.replace(":", ""));
  const [selectedItem, setSelectedItem] = useState(nft.inventory[0]);
  const [itemAmount, setItemAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (value) => {
    setSelectedItem(nft.inventory[value]);
    setIsOpen(false);
  };

  return (
    <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
      <div className="mb-8">
        <div className="w-full flex justify-center sm:justify-end gap-2">
          <button disabled className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-2 md:px-4 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]">
            Register Whitelist
          </button>
          <button disabled className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-2 md:px-4 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]">
            View Whitelist
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap lg:justify-start items-start gap-3 mb-8">
            <div className="">
              <img
                src={nft.image}
                alt={nft.image}
                className="w-80 h-80 object-cover rounded-xl lg:mr-8"
              />
            </div>
            <div className="">
              <div>
                <h2 className="mb-5 md:text-3xl text-2xl font-bold">
                  {nft.title}
                </h2>
                <div className="flex items-center flex-wrap justify-between">
                  <div className="flex items-center gap-1 bg-[#a1abb9] w-max px-3 py-1 drop-shadow-lg rounded-full text-sm font-medium">
                    <img
                      src={nft.blockchainSystem.icon}
                      alt="blocksystem-icon"
                      className="h-4 w-4 object-cover"
                    />
                    <p>{nft.blockchainSystem.initials}</p>
                  </div>
                  <div className="flex w-max gap-2 text-xl text-[#a1abb9]">
                    <a
                      href={nft.websiteUrl}
                      target="_blank"
                      className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"
                    >
                      <FiGlobe />
                    </a>
                    <a
                      href={nft.telegramUrl}
                      target="_blank"
                      className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"
                    >
                      <FaTelegramPlane />
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"
                    >
                      <FaDiscord />
                    </a>
                    <a
                      href={nft.twitterUrl}
                      target="_blank"
                      className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[#a1abb9] font-semibold mt-5">Cost</h4>
                <h3 className="text-[#1BD9BF] font-bold text-2xl">
                  {Math.round(Number(selectedItem.price) * itemAmount)} USDT
                </h3>
              </div>

              <div>
                <div className="relative inline-block w-full">
                  <div
                    onClick={toggleDropdown}
                    className="py-2 w-full cursor-pointer"
                  >
                    <InventoryCard item={selectedItem} showMax={true} />
                    <IoIosArrowDown
                      className={`absolute right-2 top-1/2 text-lg ml-2 transition-all duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute z-10 w-full rounded-md shadow-lg">
                      {nft.inventory.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => handleSelectOption(i)}
                          className="py-1 cursor-pointer"
                        >
                          <InventoryCard item={item} showMax={true} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-[#a1abb9] font-semibold">
                  Your wallet balance: <span className="text-[#1BD9BF]">0</span>
                </h4>
              </div>
              <div>
                <div className="relative">
                  <input
                    className="px-4 py-4 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                    type="number"
                    value={itemAmount}
                    onChange={(e) => setItemAmount(e.target.value)}
                    pattern="[0-9]*"
                    inputMode="numeric"
                  />
                  {itemAmount > 0 && (
                    <span
                      className="absolute text-red-400 right-2 top-5 cursor-pointer"
                      onClick={() => setItemAmount(0)}
                    >
                      <RxCross2 />
                    </span>
                  )}
                  <p className="absolute text-xs top-1 right-2">USDT</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl">
            <h2 className="text-lg font-bold mb-2">Project Details</h2>
            <h2 className="text-[#a1abb9] mb-4">{nft.projectDetail}</h2>
            <h2 className="text-[#a1abb9]">Vesting Period:</h2>
            <h2 className="font-medium mb-4">{nft.vestingPeriod}</h2>
            <h2 className="text-[#a1abb9]">Distribution:</h2>
            <h2 className="font-medium mb-4">{nft.distributionMethod}</h2>
            <h2 className="text-lg font-bold mb-4">Inventory</h2>
            <div className="flex flex-wrap gap-x-5">
              {nft.inventory.map((item, i) => (
                <InventoryCard key={i} item={item} showMax={false} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl">
            <h2 className="text-lg font-bold mb-2">Sale Details</h2>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Hard Cap</p>
              <p>${nft.totalRaise}</p>
            </div>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Deposit Token</p>
              <p>{nft.depositToken}</p>
            </div>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Total {nft.depositToken} Deposit</p>
              <p>{nft.totalDeposit}</p>
            </div>
            <div className="ml-5 mt-5">
              <ol className="relative border-l-2 border-[#1BD9BF]">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-[#1BD9BF] rounded-full -left-3 ring-4 ring-[#1BD9BF]">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-[#1E2733]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 ml-2 font-semibold text-sm text-[#a1abb9]">
                    Opens
                  </h3>
                  <h3 className="mb-1 ml-2 font-semibold lg:text-base text-sm text-[#1BD9BF]">
                    {nft.startDate}
                  </h3>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-[#1BD9BF] rounded-full -left-3 bottom-0 ring-4 ring-[#1BD9BF]">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-[#1E2733]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="mb-1 ml-2 font-semibold text-sm text-[#a1abb9]">
                    Closes
                  </h3>
                  <h3 className="mb-1 ml-2 font-semibold lg:text-base text-sm text-[#1BD9BF]">
                    {nft.endDate}
                  </h3>
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl flex justify-between">
            <h2 className="text-md font-semibold mb-2">Your Deposited</h2>
            <h2 className="text-md font-semibold text-[#1BD9BF] mb-2">
              0 USDT
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
