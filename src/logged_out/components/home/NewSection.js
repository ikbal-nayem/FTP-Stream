import React, { Fragment } from "react";
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SeriesCard from '../card/SeriesCard';



SwiperCore.use([Navigation, Autoplay]);

const NewSection = React.memo((props)=>{
  const preview = Math.floor(window.innerWidth/180)

  return (
    <Fragment>
      <h6 className="mx-3 text-primary">New TV Series</h6>
      <Swiper
        spaceBetween={20}
        slidesPerView={preview}
        autoplay={{
          delay: 4000,
        }}
        navigation
      >
        {[...Array(20).keys()].map(val => <SwiperSlide><SeriesCard/></SwiperSlide>)}
      </Swiper>
    </Fragment>
  );
})


export default NewSection;
