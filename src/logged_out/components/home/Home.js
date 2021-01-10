import React from "react";
import NewSection from "./NewSection";
import PopularSection from "./PopularSection";


class Home extends React.PureComponent {
	render(){
		return (
			<div className="app-wrapper">
				<NewSection />
				<PopularSection />
			</div>
		)
	}
}

export default Home;
