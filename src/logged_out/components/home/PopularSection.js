import React from "react";
import Pagination from '@material-ui/lab/Pagination';
import SeriesCard from '../card/SeriesCard';
import MovieCard from '../card/MovieCard';
import axios from '../../../shared/util';



const PopularSection = (props)=>{
  const [selected, setSelected] = React.useState(0)
  const [total_page_0, setTotalPage0] = React.useState(1)
  const [total_page_1, setTotalPage1] = React.useState(1)
  const [page0, setPage0] = React.useState(1)
  const [page1, setPage1] = React.useState(1)
  const [list_items, setListItems] = React.useState([])

  React.useEffect(()=>{
    const url = selected === 0 ? '/tv/popular' : '/movie/popular'
    const page = selected === 0 ? page0 : page1
    axios.get(url, {params:{page}})
      .then(resp => {
        setListItems(resp.data.results)
        selected === 0 ? setTotalPage0(resp.data.total_pages) : setTotalPage1(resp.data.total_pages)
      })
  }, [selected, page0, page1])


  return (
    <div>
      <div className="p-3 mt-5">
        <div className="d-flex mb-3">
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
          {list_items.map((item) => (
            <div key={item.id} className="col animate__animated animate__zoomIn">
                {selected === 0 
                  ? <SeriesCard item={item}/>
                  : <MovieCard item={item}/>
                }
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
      {selected === 0
        ? <Pagination count={total_page_0} page={page0} color="secondary" onChange={(e, val)=>setPage0(val)} />
        : <Pagination count={total_page_1} page={page1} color="secondary" onChange={(e, val)=>setPage1(val)} />
      }
      </div>

    </div>
  );
}


export default React.memo(PopularSection);
