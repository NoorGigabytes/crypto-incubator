import React, { useEffect, useState } from "react";
import PoolCard from "./includes/PoolCard";
import poolsList from "../static/json/pools.json";
import Pagination from "./includes/Pagination";
import { RxCross2 } from "react-icons/rx";
import nothingImage from "../static/img/nothing-to-show.png";

export default function Pools() {
  const [cards, setCards] = useState(poolsList);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);
  const [activeKey, setActiveKey] = useState("active");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filteredCards = cards.filter((card) => card.saleStatus === activeKey);
    setFilteredCards(filteredCards);

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredCards = filteredCards.filter((card) =>
        card.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredCards(filteredCards);
    }
  }, [searchTerm, activeKey]);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="container mx-auto max-w-screen-xl px-6 lg:pt-24 pt-12 pb-16">
      <div className="flex md:flex-row flex-col gap-x-2 gap-y-5 justify-between items-center">
        <ul className="flex flex-wrap font-medium text-xs sm:text-base gap-x-4">
          <li className="">
            <a
              className={`cursor-pointer ${activeKey === "active" ? "text-[#1BD9BF]" : ""}`}
              onClick={() => {
                setActiveKey("active");
              }}
            >
              Active [{cards.filter((card) => card.saleStatus === "active").length}]
            </a>
          </li>

          <li className="">
            <a
              className={`cursor-pointer ${activeKey === "upcoming" ? "text-[#1BD9BF]" : ""}`}
              onClick={() => setActiveKey("upcoming")}
            >
              Upcoming [{cards.filter((card) => card.saleStatus === "upcoming").length}]
            </a>
          </li>

          <li className="">
            <a
              className={`cursor-pointer ${activeKey === "completed" ? "text-[#1BD9BF]" : ""}`}
              onClick={() => setActiveKey("completed")}
            >
              Completed [{cards.filter((card) => card.saleStatus === "completed").length}]
            </a>
          </li>
        </ul>
        <div className="relative">
          <input
            className="px-4 py-1 rounded-full w-72 bg-[#1E2733] drop-shadow-lg focus:outline-none"
            type="text"
            placeholder="Search by Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <span
              className="absolute text-red-400 right-2 top-2 cursor-pointer"
              onClick={() => setSearchTerm("")}
            >
              <RxCross2 />
            </span>
          )}
        </div>
      </div>
      {filteredCards?.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 my-24">
            {currentCards.map((nft) => (
              <PoolCard key={nft.id} pool={nft} />
            ))}
          </div>
          <Pagination
            postsPerPage={cardsPerPage}
            totalPosts={filteredCards.length}
            paginate={paginate}
          />
        </>
      ) : (
        <div className="flex flex-col items-center my-16 gap-16">
          <p className="text-center text-[#a1abb9] text-xl">Nothing to show</p>
          <img src={nothingImage} alt='falling stocks graph' className="lg:max-w-lg m-w-sm" />
        </div>
      )}
    </section>
  );
}
