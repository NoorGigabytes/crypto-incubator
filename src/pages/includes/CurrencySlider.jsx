import React, { useRef } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import apt from "../../static/img/currencies/apt.png"
import arb from "../../static/img/currencies/arb.png"
import bsc from "../../static/img/currencies/bsc.png"
import cad from "../../static/img/currencies/cad.png"
import enu from "../../static/img/currencies/enu.png"
import eth from "../../static/img/currencies/eth.png"
import okc from "../../static/img/currencies/okc.png"
import opt from "../../static/img/currencies/opt.png"
import sha from "../../static/img/currencies/sha.png"
import sol from "../../static/img/currencies/sol.png"
import zks from "../../static/img/currencies/zks.png"

export default function CurrencySlider() {
    const sliderRef = useRef(null)
    const images = [
        apt, arb, bsc, cad, enu, eth, okc, opt, sha, sol, zks
    ]

    const handleDragStart = (e) => {
        e.preventDefault();
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        touchMove: true,
        centerPadding: "10px",
      }
  return (
    <div
      className="relative"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="my-auto focus:outline-none">
            <img className="w-44 mx-1 h-auto transition-all ease-out duration-300 delay-200" src={image} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
