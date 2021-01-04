import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {image_base_url} from '../../../shared/util';


export default React.memo(({episode})=>(
	<div className="mb-3 text-center" style={{minWidth: 120, maxWidth: 130}}>
		<div className="card bg-dark text-white mb-1">
			<LazyLoadImage
				className="card-img w-100 bg-primary"
				src={`${image_base_url}/w185${episode.still_path}`}
				alt="."
			/>
		</div>
		<span className="text-secondary">{episode.name}</span>
	</div>
))