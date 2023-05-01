import React, { useState } from 'react'
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function PoolCard({ pool }) {
    const [isHovered, setHovered] = useState(false)
    const handleClick = (event) => {
        event.stopPropagation()
        window.open(`/pool-detail:${pool.id}`, '_blank')
    }
  return (
    <div className='bg-[#1E2733] w-max p-2 overflow-hidden rounded-xl cursor-pointer' onClick={handleClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className='overflow-hidden rounded-lg relative'>
            <img src={pool.image} alt={pool.title} className={`rounded-lg w-64 h-48 object-cover lg:w-80 transition-all duration-300 ease-in-out ${isHovered ? "scale-105" : ""}`}/>
            <p className='absolute z-10 top-3 left-3 rounded-full px-2 py-1 drop-shadow-lg text-black font-medium text-sm bg-[#1BD9BF]'>Sale {pool.saleStatus}</p>
        </div>
        <div className='px-2 py-5'>
            <h2 className='font-bold text-xl md:text-2xl pb-1'>{pool.title}</h2>
            <p className='text-[#1BD9BF] font-medium pb-1'>Start in {pool.startDate}</p>
            <div className='flex gap-1 pb-1'>
                {pool.fcfs ? <p className='bg-[#a1abb9] w-max px-3 py-1 drop-shadow-lg rounded-full my-2 text-sm font-medium'>FCFS</p> : null }
                <div className='flex items-center gap-1 bg-[#a1abb9] w-max px-3 py-1 drop-shadow-lg rounded-full my-2 text-sm font-medium'>
                    <img src={pool.blockchainSystem.icon} alt='blocksystem-icon' className='h-4 w-4 object-cover'/>
                    <p>{pool.blockchainSystem.initials}</p>
                </div>
            </div>
            <div className='flex justify-between text-[#a1abb9]'>
                <p>Total Raise</p>
                <p>{pool.totalRaise} USDT</p>
            </div>
            <div className='flex justify-between text-[#a1abb9]'>
                <p>Total Rewards</p>
                <p>{pool.totalRewards}</p>
            </div>
            <div className='flex justify-between text-[#a1abb9]'>
                <p>Rate</p>
                <p>{pool.price}</p>
            </div>
            <div className='flex justify-between text-[#a1abb9]'>
                <p>Deposit</p>
                <p>{pool.depositToken}</p>
            </div>
            <div className='flex w-max ml-auto gap-2 text-lg mt-5 text-[#a1abb9]' onClick={e => e.stopPropagation()}>
                <a href={pool.websiteUrl} target='_blank' className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FiGlobe/></a>
                <a href={pool.telegramUrl} target='_blank' className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaTelegramPlane/></a>
                <a href="/" target='_blank' className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaDiscord/></a>
                <a href={pool.twitterUrl} target='_blank' className="hover:text-[#21eed3] transition-all duration-300 ease-in-out"><FaTwitter/></a>
            </div>
        </div>
    </div>
  )
}
