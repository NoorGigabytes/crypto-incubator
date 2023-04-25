import React, { useState } from "react";
import { FaTelegramPlane, FaDiscord, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div className="text-[#a1abb9] md:container mx-auto pb-14 pt-32 px-5">
      <div className="mb-10 flex flex-wrap justify-around gap-16">
        <div className="w-min">
          <h1 className="font-bold uppercase text-3xl text-[#1BD9BF] pb-5">
            CompanyLogo
          </h1>
          <p className="pb-5">
            COMPANY is a crypto incubator serving for Web3.0, building on
            Binance Smart Chain.
          </p>
        </div>
        <div>
            <h3 className="text-white font-medium pb-3 text-lg">Important Links</h3>
            <ul className="">
                <li className="pb-1 hover:text-[#21eed3] transition-all duration-300 ease-in-out">
                    <Link to="/">Homepage</Link>
                </li>
                <li className="pb-1 hover:text-[#21eed3] transition-all duration-300 ease-in-out">
                    <Link to="/about">About</Link>
                </li>
                <li className="pb-1 hover:text-[#21eed3] transition-all duration-300 ease-in-out">
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li className="pb-1 hover:text-[#21eed3] transition-all duration-300 ease-in-out">
                    <Link to="/">Private Policy</Link>
                </li>
            </ul>
        </div>
        <div className="my-auto">
          <form onSubmit={handleSubmit}>
            <div>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="py-2 px-3 focus:outline-none rounded-l-full sm:text-base text-sm"/>
              <button type="submit" className="bg-[#1BD9BF] text-black font-medium py-2 px-3 rounded-r-full sm:text-base text-sm">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-[#53585f] pt-5 flex flex-wrap gap-x-12 gap-y-4 items-center justify-between">
        <div className="mx-auto sm:m-0"><p>©2023 Company. All rights reserved.</p></div>
        <div className="text-3xl flex items-center gap-4 mx-auto sm:m-0 text-[#1BD9BF]">
            <a href="/" className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaTelegramPlane/></a>
            <a href="/" className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaDiscord/></a>
            <a href="/" className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaFacebook/></a>
            <a href="/" className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaInstagram/></a>
            <a href="/" className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaTwitter/></a>
        </div>
      </div>
    </div>
  );
}
