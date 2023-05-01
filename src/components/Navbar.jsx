import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Dialog, Transition } from "@headlessui/react";
import networkList from "../static/json/networks.json";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletDialog, setWalletDialog] = useState(false);
  const [terms, setTerms] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(networkList[0]);

  function closeModal() {
    setWalletDialog(false);
  }

  function openModal() {
    setWalletDialog(true);
    setMenuOpen(false);
  }

  function handleNetworkSelect(network) {
    setSelectedNetwork(network);
  }
  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-20 px-4 sm:h-28 bg-transparent bg-opacity-20 backdrop-blur-sm">
      <Transition appear show={walletDialog} as={Fragment}>
        <Dialog as="div" className="relative z-[20000]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md sm:max-w-lg md:max-w-xl transform overflow-hidden rounded-2xl bg-[#1E2733] text-[#a1abb9] p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mb-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent text-sm font-medium hover:bg-[#6f7680] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <IoMdClose />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    Connect Wallet
                  </Dialog.Title>

                  <div className="mt-2 overflow-y-auto">
                    <div className="flex items-center p-1 mb-2">
                      <input
                        id="link-checkbox"
                        type="checkbox"
                        value={terms}
                        onClick={() => setTerms(!terms)}
                        className="w-4 h-4 text-[#1BD9BF] bg-[#a1abb9] rounded focus:ring-0"
                      />
                      <label
                        htmlFor="link-checkbox"
                        className="ml-2 text-sm font-medium text-[#a1abb9] dark:text-gray-300"
                      >
                        I agree to{" "}
                        <span className="text-[#1BD9BF]">
                          <a href="/terms-and-conditions">
                            Terms and Conditions
                          </a>
                        </span>{" "}
                        and{" "}
                        <span className="text-[#1BD9BF]">
                          <a>Private Policy</a>
                        </span>
                      </label>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Choose Network</h3>
                      <div className="w-max mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-2 gap-2 justify-center content-center">
                        {networkList.map((network) => (
                          <fieldset
                            key={network.id}
                            className={`py-2 px-1 cursor-pointer hover:bg-[#55585c] disabled:opacity-50 w-28 rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-300 ease-in-out ${selectedNetwork.id === network.id ? 'bg-[#55585c]' : ''}`}
                            disabled={!terms}
                            onClick={() => {
                              if (!terms) {
                                return;
                              }
                              handleNetworkSelect(network)
                            }}
                          >
                            <div className="flex flex-col items-center justify-center">
                              <img src={network.image} alt={network.title} className="w-12 h-12"/>
                              <p className="text-center">{network.title}</p>
                            </div>
                          </fieldset>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Choose Wallet</h3>
                      <div className="w-max mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-2 gap-2 justify-center content-center">
                        {selectedNetwork.wallets.map((wallet) => (
                          <fieldset
                            key={wallet.title}
                            className="p-2 cursor-pointer hover:bg-[#55585c] disabled:opacity-50 w-28 rounded-xl flex flex-col items-center justify-center gap-1"
                            disabled={!terms}
                            // onClick={() => {
                            //   if (!terms) {
                            //     return;
                            //   }
                            //   handleNetworkSelect(wallet)
                            // }}
                          >
                            <img src={wallet.image} />
                            <p>{wallet.title}</p>
                          </fieldset>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-bold uppercase text-lg text-[#1BD9BF]">
          <a href="/">CompanyLogo</a>
        </h1>
        <div className="md:visible invisible md:inline hidden border-2 border-[#1BD9BF] rounded-full px-6 py-4">
          <ul className="flex items-center space-x-10 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                    : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                    : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nfts"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                    : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                }
              >
                NFTs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pools"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                    : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                }
              >
                Pools
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:visible invisible md:inline hidden">
          <button
            type="button"
            onClick={openModal}
            className="px-4 py-2 font-semibold rounded-full text-black bg-[#1BD9BF] hover:bg-[#21eed3] transition-all duration-300 ease-in-out"
          >
            Connect Wallet
          </button>
        </div>
        <div className="md:hidden md:invisible visible">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="font-semibold text-4xl text-[#1BD9BF] hover:text-[#21eed3] transition-all duration-300 ease-in-out"
          >
            <CgMenuMotion />
          </button>
        </div>
      </nav>
      {
        <div
          className={`md:hidden md:invisible visible transition-width duration-300 ease-in-out bg-gray-800 fixed top-0 right-0 z-50 p-5 h-screen shadow-xl ${
            menuOpen ? "w-80 visible opacity-100" : "w-0 invisible opacity-0"
          }`}
        >
          <div className="flex flex-col items-end">
            <button
              type="button"
              className="font-semibold text-4xl text-[#1BD9BF] hover:text-[#21eed3] transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              <CgClose />
            </button>
            <ul className="flex flex-col items-start font-medium text-xl mr-auto ml-5 gap-y-4 mt-5">
              <li onClick={() => setMenuOpen(false)}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                      : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                      : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <NavLink
                  to="/nfts"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                      : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                  }
                >
                  NFTs
                </NavLink>
              </li>
              <li onClick={() => setMenuOpen(false)}>
                <NavLink
                  to="/pools"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1BD9BF] transition-all duration-300 ease-in-out"
                      : "hover:text-gray-100 transition-all duration-300 ease-in-out"
                  }
                >
                  Pools
                </NavLink>
              </li>
            </ul>
            <div className="mr-auto mt-5 ml-4">
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 font-semibold rounded-full text-black bg-[#1BD9BF] hover:bg-[#21eed3] transition-all duration-300 ease-in-out"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Navbar;
