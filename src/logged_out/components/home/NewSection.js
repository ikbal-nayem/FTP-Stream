import React, { Fragment } from "react";
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SeriesCard from '../card/SeriesCard';
import MovieCard from '../card/MovieCard';
import axios from '../../../shared/util';

SwiperCore.use([Navigation, Autoplay]);


const NewSection = React.memo((props)=>{
  const preview = Math.floor(window.innerWidth/180)
  const [selected, setSelected] = React.useState(0)
  const [list_items, setListItems] = React.useState([])

  React.useEffect(()=>{
    const url = selected === 0 ? '/tv/on_the_air' : '/movie/now_playing'
    axios.get(url, {params:{page: 1}})
      .then(resp => setListItems(resp.data.results))
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
        {list_items.map(item => (
          <SwiperSlide key={item.id}>
            {selected === 0 
              ? <SeriesCard item={item} />
              : <MovieCard item={item}/>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
})


export default NewSection;
