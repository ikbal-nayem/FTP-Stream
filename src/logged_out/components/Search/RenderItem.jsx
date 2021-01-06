import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {image_base_url} from '../../../shared/util';



export default React.memo(({item})=>(
	<div className="d-flex p-0 m-0">
    <div className="mr-2">
      <LazyLoadImage
      	src={`${image_base_url}/w92${item.poster_path}`}
      	alt=""
      	effect="black-and-white"
      	width={50}
      />
    </div>
    <span>{item.title?item.title:item.name}</span>
  </div>
))