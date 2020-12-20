import React from "react";
import SeriesCard from '../card/SeriesCard';



const TopSection = (props)=>{
  const [selected, setSelected] = React.useState(0)

  React.useEffect(()=>{
    console.log(selected)
  }, [selected])

  return (
    <div className="mt-5">
      <div className="d-flex">
        <h6 className="mx-3 text-white">Top</h6>
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
        {[...Array(18).keys()].map((e, i) => (
          <div className="col" data-aos="zoom-in-up" data-aos-delay={i*10}>
            <SeriesCard/>
          </div>
        ))}
      </div>
    </div>
  );
}


export default React.memo(TopSection);
