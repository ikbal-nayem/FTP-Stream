import React, { Fragment } from "react";
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SeriesCard from '../card/SeriesCard';



SwiperCore.use([Navigation, Autoplay]);

const NewSection = React.memo((props)=>{
  const [selected, setSelected] = React.useState(0)
  const preview = Math.floor(window.innerWidth/180)

  React.useEffect(()=>{
    console.log(selected)
  }, [selected])

  return (
    <Fragment>
      <div className="d-flex">
        <h6 className="mx-3 text-white">New</h6>
        <span className={`tab mx-2 ${selected===0?'text-white border-bottom border-secondary':'text-muted'}`}
              onClick={()=>setSelected(0)}
        >
          TV Series</span>
        <span className={`tab mx-2 ${selected===1?'text-white border-bottom border-secondary':'text-muted'}`}
              onClick={()=>setSelected(1)}
        >
          Movies</span>
      </div>
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
