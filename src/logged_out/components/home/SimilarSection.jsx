import React from "react";
import MovieCard from '../card/MovieCard';
import axios from '../../../shared/util';



const SimilarSection = ({match})=>{
  const [list_items, setListItems] = React.useState([])

  React.useEffect(()=>{
    axios.get(`/movie/${match.params.id}/similar`, {params:{page: 1}})
      .then(resp => setListItems(resp.data.results))
  }, [match.params])


  return (
    <div className="p-3">
      <h4>Similar Movies</h4>
      <div className="row">
        {list_items.map((item) => (
          <div key={item.id} className="col">
            <MovieCard item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}


export default React.memo(SimilarSection);
