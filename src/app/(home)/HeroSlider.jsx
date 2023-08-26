"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper";
import mainSlider from "@/data/mainSlider";
import SingleHeroSlider from "./SingleHeroSlider";

const HeroSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
        slidesPerView={1}
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleHeroSlider slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
