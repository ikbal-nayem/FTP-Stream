import React from "react";
import NewSection from "./NewSection";
import PopularSection from "./PopularSection";


const Home = React.memo(()=>{

  return (
    <div className="app-wrapper">
      <NewSection />
      <PopularSection />
    </div>
  );
})

export default Home;
