import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import EpisodeCard from '../card/EpisodeCard';
import {image_base_url} from '../../../shared/util';



export default React.memo(({season})=>(
	<React.Fragment>
		<div className="row">
			<div className="col-md-3 col-12 d-flex justify-content-center" data-aos="fade-up">
				<LazyLoadImage
					src={`${image_base_url}/w185${season.poster_path}`}
				  alt="."
				  className="poster"
				/>
			</div>
			<div className="col">
				<h4 data-aos="zoom-in">{season.name}</h4>
				<p data-aos="zoom-in">{season.air_date}</p>
				<i data-aos="zoom-in-up">{season.overview}</i>
			</div>
		</div>
		<div className="row p-3 mt-4">
			{season.episodes && season.episodes.map((episode, i) => (
				<div key={episode.id} className="col" data-aos="fade-up" data-aos-delay={(i+1)*50}>
					<EpisodeCard episode={episode}/>
				</div>
			))}
		</div>
	</React.Fragment>
))