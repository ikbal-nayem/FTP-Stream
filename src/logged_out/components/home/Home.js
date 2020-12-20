import React from "react";
import NewSection from "./NewSection";
import TopSection from "./TopSection";


const Home = React.memo(()=>{

  return (
    <div className="app-wrapper">
      <NewSection />
      <TopSection />
    </div>
  );
})

export default Home;
