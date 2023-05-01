import React from "react";

export default function InventoryCard({ item, showMax }) {
  return (
    <div className={`border py-3 pl-4 pr-4 sm:pr-16 mb-2 rounded-lg w-auto transition-all duration-300 ease-in-out ${showMax ? "hover:border-[#1BD9BF] bg-[#0B0E13]" : ""}`}>
      <div className="flex gap-5">
        <img
          src="https://dummyimage.com/32x32/000/fff"
          alt="inventory item icon"
          className="w-14 h-auto"
        />
        <div>
          <h3 className="font-medium text-sm sm:text-base">{item.item}</h3>
          <p className="text-sm sm:text-base">
            {item.Price} USDT | {item.numberLeft}/{item.maxNumber}
          </p>
        </div>
        {showMax && <p className="text-sm sm:text-base">Max: {item.maxNumber}</p>}
      </div>
    </div>
  );
}
