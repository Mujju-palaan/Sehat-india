"use client";
import React from "react";
// import './swiper.css'
import HomePlansCard from '../../../component/planscard/HomePlansCard'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const SwiperPlan = () => { 
  return (
    <div >
      
      <div className="container">
        <Swiper 
        // install Swiper modules
        breakpoints={{
          0: {
            // width: 400,
            slidesPerView: 1,
            centeredSlides: true
          },
          400: {
            // width: 400,
            slidesPerView: 1,
          },
          639: {
            // width: 639,
            slidesPerView: 2,
          },
          865: {
            // width: 865,
            slidesPerView: 3,
          },
          1000: {
            // width: 1000,
            slidesPerView: 3,
          },
          1500: {
            // width: 1500,
            slidesPerView: 4,
          },
          1700: {
            // width: 1700,
            slidesPerView: 3,
          },
        }}
        scrollbar={{ draggable: true }}
        //   autoplay={{
        //     delay: 1000,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        //   }}
          spaceBetween={30}
          style={{ overflow: "hidden"}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"3"}
          watchOverflow={"none"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 30,
            modifier: 1,
            watchOverflow: "visible",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide style={{marginLeft:'2.5rem'}}>
          <HomePlansCard 
        title="Weekly Diet Plan"
        content={`Transform Your Life with Our Personalized Weight Loss Program.`}
        Images="/plan1.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="Grocery Delivery Service"
        content={`Transform Your Life with Our Personalized Weight Loss Program.`}
        Images="./plan2.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="AI Recipe Maker"
        content={`Transform Your Life with Our Personalized Weight Loss Program.`}
        Images="./plan3.png"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="Virtual Workout Trainer"
        content={`Transform Your Life with Our Personalized Weight Loss Program.`}
        Images="./plan4.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="Access to Ebooks/podcasts"
        content={`Transform Your Life with Our Personalized Weight Loss Program.`}
        Images="./plan5.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="Virtual AI Therapy"
        content={`Transform Your Life with Our Personalized Weight Loss Program.`}
        Images="./plan6.jpg"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          <SwiperSlide>
          <HomePlansCard 
        title="Health Tracking Devices"
        content={`Transform Your Life with Our Personalized Weight Loss Program.`}
        Images="./plan7.webp"
        link="WeightLossPrograms"
      />
          </SwiperSlide>
          
          {/* ***********Slider dots******************** */}

          <div className="slider-controler" style={{ paddingTop: "4rem" }}>
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>

          {/* ***********Slider arrows******************** */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

          
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperPlan;

