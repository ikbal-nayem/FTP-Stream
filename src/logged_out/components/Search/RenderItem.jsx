import React from 'react';
import {Link} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {image_base_url} from '../../../shared/util';



export default React.memo(({item})=>(
	<Link to={item.media_type === 'tv'?`/tv-series/${item.id}`:`/movie/${item.id}`} className="text-decoration-none text-dark">
		<div className="d-flex p-0 m-0">
	    <div className="mr-2">
	      <LazyLoadImage
	      	src={`${image_base_url}/w92${item.poster_path}`}
	      	alt=""
	      	effect="black-and-white"
	      	width={50}
	      />
	    </div>
	    <div>
		    <span>{item.title?item.title:item.name}</span><br/>
		    <i>({item.media_type === 'tv'?`${item.first_air_date && item.first_air_date.split('-')[0]}`:`${item.release_date && item.release_date.split('-')[0]}`})</i>
	  	</div>
	  </div>
  </Link>
))