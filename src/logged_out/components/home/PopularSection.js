import React from "react";
import SeriesCard from '../card/SeriesCard';
import MovieCard from '../card/MovieCard';
import axios from '../../../shared/util';



const PopularSection = (props)=>{
  const [selected, setSelected] = React.useState(0)
  const [list_items, setListItems] = React.useState([])

  React.useEffect(()=>{
    const url = selected === 0 ? '/tv/popular' : '/movie/popular'
    axios.get(url, {params:{page: 1}})
      .then(resp => setListItems(resp.data.results))
  }, [selected])

  return (
    <div className="mt-5">
      <div className="d-flex">
        <h6 className="mx-3 text-white">Popular</h6>
        <span className={`tab mx-2 ${selected===0?'text-white border-bottom border-secondary':'text-muted'}`}
              onClick={()=>setSelected(0)}
        >
          TV Series</span>
        <span className={`tab mx-2 ${selected===1?'text-white border-bottom border-secondary':'text-muted'}`}
              onClick={()=>setSelected(1)}
        >
          Movies</span>
      </div>
      <div className="row">
        {list_items.map((item, i) => (
          <div className="col" data-aos="zoom-in-up" data-aos-delay={i*20}>
            {selected === 0 
              ? <SeriesCard item={item} />
              : <MovieCard item={item}/>
            }
          </div>
        ))}
      </div>
    </div>
  );
}


export default React.memo(PopularSection);
