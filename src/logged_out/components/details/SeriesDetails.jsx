import React from 'react';
import axios from '../../../shared/util';
import {image_base_url} from '../../../shared/util';
import './style.css';


const SeriseDetail = ({match})=>{
	const [details, setDetails] = React.useState({})
	const [loading, setLoading] = React.useState(true)
	const is_mobile = window.innerWidth < 400

	React.useEffect(()=>{
		axios.get(`/tv/${match.params.id}`)
			.then(resp => setDetails(resp.data))
			.finally(()=> setLoading(false))
	}, [match.params])

	console.log(details)

	return(
		<div className="card bg-dark text-light mt-5 detail-header">
			<img className="backdrop" src={`${image_base_url}/w1920_and_h800_multi_faces${details.backdrop_path}`} alt='.' />
			<div className="card-img-overlay p-md-5 p-2">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-12">
						<div className="d-flex justify-content-center">
							<img className="poster" src={`${image_base_url}/${is_mobile?'w185':'w342'}${details.poster_path}`} alt="." />
						</div>
					</div>
					<div className="col d-flex align-items-center">
						<div>
							<h3 className="font-weight-bold">{details.original_name} &nbsp; <i>({details.first_air_date && details.first_air_date.split('-')[0]})</i></h3>
							<span>Rating</span><br/>
							<span>Gener</span><br/>
							<span>Number of season : {details.number_of_seasons}</span><br/>
							<span>People likes</span><br/>
							<span>Actors</span><br/>
							<p>{details.overview}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default React.memo(SeriseDetail);