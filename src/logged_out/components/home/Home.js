import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NewSection from "./NewSection";
import TopSection from "./TopSection";


const Home = (props)=>{
  const { selectHome } = props;

  useEffect(() => {
    selectHome();
  }, [selectHome]);

  return (
    <div className="app-wrapper">
      <NewSection />
      <TopSection />
    </div>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
