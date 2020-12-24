import React from 'react';
import SeriseCard from '../card/SeriesCard';

export default (props)=>{
	return(
		<div className="app-wrapper">
			<div className="row">
				<div className="col-lg-3 col-md-4">
					<div className="w-100 d-flex justify-content-center">
						<SeriseCard/>
					</div>
				</div>
				<div className="col">
					<h3>Serise Name</h3>
					<span>Rating</span><br/>
					<span>Gener</span><br/>
					<span>Number of season</span><br/>
					<span>People likes</span><br/>
					<span>Actors</span><br/>
					<p>The Series big big big discription</p>
				</div>
			</div>
		</div>
	)
}