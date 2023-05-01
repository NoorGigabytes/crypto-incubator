import React, { useState } from "react";
import { useParams } from "react-router-dom";
import poolList from "../static/json/pools.json";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function PoolDetail() {
  const { id } = useParams();
  const pool = poolList.find((pool) => pool.id == id.replace(":", ""));
  const [deposit, setDeposit] = useState("");
  const [APTOSWallet, setAPTOSWallet] = useState("");
  const [terms, setTerms] = useState(false);

  return (
    <section className="container mx-auto max-w-screen-xl px-6 lg:pt-16 pt-12 pb-16">
      <div className="flex justify-between flex-wrap gap-x-8 mb-5 items-center">
        <div>
          <div>
            <h2 className="mb-5 md:text-3xl text-2xl font-bold">
              {pool.title}
            </h2>
            <div className="flex items-center flex-wrap justify-between gap-4">
              <div className="flex items-center gap-1 bg-[#a1abb9] w-max px-3 py-1 drop-shadow-lg rounded-full text-sm font-medium">
                <img
                  src={pool.blockchainSystem.icon}
                  alt="blocksystem-icon"
                  className="h-4 w-4 object-cover"
                />
                <p>{pool.blockchainSystem.initials}</p>
              </div>
              <div className="flex w-max gap-2 text-xl text-[#a1abb9]">
                <a
                  href={pool.websiteUrl}
                  target="_blank"
                  className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"
                >
                  <FiGlobe />
                </a>
                <a
                  href={pool.telegramUrl}
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
                  href={pool.twitterUrl}
                  target="_blank"
                  className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full flex justify-end gap-2">
            <button
              disabled
              className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-2 md:px-4 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]"
            >
              Register Whitelist
            </button>
            <button
              disabled
              className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-2 md:px-4 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]"
            >
              View Whitelist
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="lg:col-span-2">
          <div className="">
            <div className="flex flex-wrap lg:justify-start items-start gap-3 mb-8">
              <div className="w-full">
                <img
                  src={pool.image}
                  alt={pool.image}
                  className="w-full h-auto object-cover rounded-xl lg:mr-8"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-2">Project Details</h2>
            <h2 className="text-[#a1abb9] mb-4">{pool.projectDescription}</h2>
            <h2 className="text-[#a1abb9]">Vesting Period:</h2>
            <h2 className="font-medium mb-4">{pool.vestingPeriod}</h2>
            <h2 className="text-[#a1abb9]">Distribution:</h2>
            <h2 className="font-medium mb-4">{pool.distributionMethod}</h2>
          </div>
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl mb-8 break-words">
            <h2 className="text-lg font-bold mb-2">Token Details</h2>
            <h2 className="text-[#a1abb9] mb-2">
              Token:{" "}
              <span className="text-[#1BD9BF]">{pool.tokenDetail.token}</span>
            </h2>
            <h2 className="text-[#a1abb9] mb-2">
              Contract:{" "}
              <span className="text-[#1BD9BF]">
                {pool.tokenDetail.contract}
              </span>
            </h2>
            <h2 className="text-[#a1abb9] mb-2">
              Chain:{" "}
              <span className="text-[#1BD9BF]">{pool.tokenDetail.chain}</span>
            </h2>
            <h2 className="text-[#a1abb9] mb-2">
              Total Supply:{" "}
              <span className="text-[#1BD9BF]">
                {pool.tokenDetail.totalSupply}
              </span>
            </h2>
            <h2 className="text-[#a1abb9] mb-2">
              Initial Supply:{" "}
              <span className="text-[#1BD9BF]">
                {pool.tokenDetail.initialSupply}
              </span>
            </h2>
            <h2 className="text-[#a1abb9] mb-2">
              Initial MarketCap:{" "}
              <span className="text-[#1BD9BF]">
                {pool.tokenDetail.initialMarketcap}
              </span>
            </h2>
            <h2 className="text-[#a1abb9] mb-2">
              Token Listing:{" "}
              <span className="text-[#1BD9BF]">
                {pool.tokenDetail.tokenListing}
              </span>
            </h2>
          </div>
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-2">Your USDT Deposited</h2>
              <h2 className="text-lg font-bold mb-2 text-[#1BD9BF]">0.00</h2>
            </div>
            <div className="w-full">
              <h4 className="text-[#a1abb9] text-right font-semibold">
                Your wallet balance: <span className="text-[#1BD9BF]">0</span>
              </h4>
            </div>
            <form
              className="my-5"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form Submitted!");
              }}
            >
              <div className="relative">
                <input
                  className="px-4 py-4 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                {deposit !== "" && (
                  <span
                    className="absolute text-red-400 right-2 top-5 cursor-pointer"
                    onClick={() => setDeposit(0)}
                  >
                    <RxCross2 />
                  </span>
                )}
                <p className="absolute text-xs top-1 right-2">USDT</p>
              </div>
              <div className="w-full flex justify-end">
                <button className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-8 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]">
                  Approve
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl">
            <h2 className="text-lg font-bold mb-2">Sale Details</h2>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Total Rewards</p>
              <p>${pool.totalRewards}</p>
            </div>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Deposit Token</p>
              <p>{pool.depositToken}</p>
            </div>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Total {pool.depositToken} Deposit</p>
              <p>{pool.totalDeposit}</p>
            </div>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Price</p>
              <p>{pool.price}</p>
            </div>
            <div className="flex justify-between text-[#a1abb9]">
              <p>Max Deposit</p>
              <p>{pool.maxDeposit}</p>
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
                    {pool.startDate}
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
                    {pool.endDate}
                  </h3>
                </li>
              </ol>
            </div>
            <div className="mb-1 text-[#a1abb9]">Swap progress</div>
            <div className="w-full h-6 bg-[#0B0E13] rounded-full dark:bg-gray-700">
              <div
                className="h-6 bg-[#1BD9BF] rounded-full"
                style={{ width: pool.swapProgress }}
              >
                <p className="ml-2 font-bold text-[#0d917f]">
                  {pool.swapProgress}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl">
            <h2 className="text-md font-semibold mb-2">Your Wallet Address</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form Submitted!");
              }}
            >
              <div className="relative">
                <input
                  className="px-4 py-2 mb-3 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                  type="text"
                  placeholder="Your APTOS Wallet"
                  value={APTOSWallet}
                  onChange={(e) => setAPTOSWallet(e.target.value)}
                />
                {APTOSWallet !== "" && (
                  <span
                    className="absolute text-red-400 right-2 top-3 cursor-pointer"
                    onClick={() => setAPTOSWallet("")}
                  >
                    <RxCross2 />
                  </span>
                )}
              </div>
              <div className="flex items-start">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value={terms}
                  onClick={() => setTerms(!terms)}
                  className="w-4 h-4 mt-1 text-[#1BD9BF] bg-[#a1abb9] rounded focus:ring-0"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-2 text-sm font-medium text-[#a1abb9] dark:text-gray-300"
                >
                  "I confirm a valid APTOS address. I understand that giving a
                  wrong wallet can result in fund loss."
                </label>
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-8 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]"
                  disabled={!terms}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="bg-[#1E2733] py-5 px-5 rounded-xl">
            <h2 className="text-md font-semibold mb-2">Claim Token</h2>
            <div className="mb-3">
              <input
                className="px-4 py-1 mb-3 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                type="text"
                placeholder="Total Allocation"
                value=""
              />
              <input
                className="px-4 py-1 mb-3 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                type="text"
                placeholder="Total Claimed to Date"
                value=""
              />
              <input
                className="px-4 py-1 mb-3 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                type="text"
                placeholder="Claimable Now"
                value=""
              />
              <input
                className="px-4 py-1 mb-3 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                type="text"
                placeholder="Unvested"
                value=""
              />
              <input
                className="px-4 py-1 mb-3 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                type="text"
                placeholder="Next Unlock Date"
                value=""
              />
              <input
                className="px-4 py-1 mb-3 rounded-lg w-full bg-[#1E2733] drop-shadow-lg focus:outline-none focus:ring-0 focus:border-[#1BD9BF]"
                type="text"
                placeholder="Next Unlock Amount"
                value=""
              />
            </div>
            <div className="flex justify-center gap-5 text-center ">
              <div className="flex flex-col">
                <span className="text-4xl">
                  <span className="text-[#1BD9BF]">00</span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="text-4xl">
                  <span className="text-[#1BD9BF]">00</span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="text-4xl">
                  <span className="text-[#1BD9BF]">00</span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="text-4xl">
                  <span className="text-[#1BD9BF]">00</span>
                </span>
                sec
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <button
                disabled
                className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-4 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]"
              >
                Claim
              </button>
              <button
                disabled
                className="bg-[#1BD9BF] text-[#1E2733] font-medium text-sm px-4 py-2 mt-3 rounded-full disabled:bg-[#a1abb9]"
              >
                Refund
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
