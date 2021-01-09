import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from '../../../shared/util';
import {image_base_url} from '../../../shared/util';
import './style.css';
import HeaderComponent from './HeaderComponent';
import TVSComponent from './TVSComponent';


const SeriseDetail = ({match})=>{
	const [details, setDetails] = React.useState({})
	const [loading, setLoading] = React.useState(true)

	React.useEffect(()=>{
		axios.get(`/tv/${match.params.id}`)
			.then(resp => setDetails(resp.data))
			.finally(()=> setLoading(false))
	}, [match.params])


	return(
		<React.Fragment>
			<div className="card bg-dark text-light mt-5 detail-header">
				<LazyLoadImage
					src={`${image_base_url}/w1920_and_h800_multi_faces${details.backdrop_path}`}
					alt=""
					className="backdrop"
					effect="black-and-white"
				/>
				<HeaderComponent details={details}/>
			</div>
			<TVSComponent
				id={details.id}
				number_of_seasons={details.number_of_seasons}
			/>
		</React.Fragment>
	)
}

export default React.memo(SeriseDetail);