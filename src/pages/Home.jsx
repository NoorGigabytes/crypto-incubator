import React from 'react'
import heroImgFront from "../static/img/hero-front.png"
import heroImgBack from "../static/img/hero-back.png"
import CurrencySlider from './includes/CurrencySlider'

function Home() {
  return (
    <>
      <section className='container mx-auto max-w-screen-xl px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 px-5'>
          <div className='mx-auto my-auto'>
            <h1 className='md:text-5xl text-4xl font-bold text-[#1BD9BF] mb-5'>
              Start a new era of encryption <span className='text-white'>launch based on Web 3.0</span>
            </h1>
            <p className='text-[#a1abb9] text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur beatae rem ipsum repudiandae! Rem ea odio doloremque. Neque, deleniti velit nemo vel impedit facilis! Quaerat, assumenda doloremque. Dolor!
            </p>
          </div>
          <div className='relative mx-auto'>
            <img src={heroImgBack} alt='hero section back image' className='absolute animate-float' />
            <img src={heroImgFront} alt='hero section front image' className='animate-floatreverse' />
          </div>
        </div>
      </section>

      <section className='container mx-auto max-w-screen-xl px-6 py-16'>
        <CurrencySlider/>
      </section>

      <section className='container mx-auto max-w-screen-xl px-6 py-16'>
        
      </section>
    </>
  )
}

export default Home
