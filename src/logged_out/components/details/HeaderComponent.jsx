import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Backdrop from '@material-ui/core/Backdrop';
import ReactPlayer from 'react-player/lazy'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios, {image_base_url} from '../../../shared/util';

const is_mobile = window.innerWidth < 400


const VideoModal = React.memo(({trailer_open, handleClose, video_key})=>{

	return(
		<Dialog
			open={trailer_open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      scroll='paper'
      fullWidth={true}
      maxWidth="md"
		>
			<ReactPlayer width='100%' url={`https://www.youtube.com/watch?v=${video_key}`} />
		</Dialog>
	)
})


export default React.memo(({details, movie})=>{
	const [trailer_open, setTrailerOpen] = React.useState(false)
	const [video_key, setVideoKey] = React.useState('')

	React.useEffect(()=>{
		axios.get(`/movie/${details.id}/videos`)
			.then(resp => setVideoKey(resp.data.results[0].key))
	}, [details.id])

	const handleClose = ()=> setTrailerOpen(false);

	return(
		<React.Fragment>
			<div className="card-img-overlay p-md-5 p-2">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-12">
						<div className="d-flex justify-content-center">
							<LazyLoadImage
								src={`${image_base_url}/${is_mobile?'w185':'w342'}${details.poster_path}`}
								alt="."
								className="poster"
								effect="black-and-white"
							/>
						</div>
					</div>
					<div className="col d-flex align-items-center">
						<div>
							<div className="mb-3">
								<div className="d-flex">
									<h1 className="font-weight-bold mb-0">{movie ? details.title : details.name}</h1> &emsp;
									{movie ?
										<i className="h5">({details.release_date && details.release_date.split('-')[0]})</i> :
										<i className="h5">({details.first_air_date && details.first_air_date.split('-')[0]}-{details.last_air_date && details.last_air_date.split('-')[0]})</i>
									}
								</div>
								<div className="d-flex">
									<span>
										{details.genres && details.genres.map(val=>val.name).join(', ')}
									</span> &emsp;
									<span className={`badge d-flex align-items-center ${details.in_production?'bg-warning text-dark':'bg-success'}`}>
										{details.status}
									</span>
								</div>
							</div>
							<div className="d-flex mb-3">
								<div className="details-rating-box">
									<CircularProgressbar
										value={details.vote_average*10}
										text={details.vote_average}
										styles={{
											path: {stroke: 'var(--bs-primary)'},
											text: {fill: 'var(--bs-primary)', fontSize: 30}
										}}
									/>
								</div>
								<div className="trailer-button" onClick={()=>setTrailerOpen(true)}>
									<PlayArrowRoundedIcon/> &nbsp; <span>Play Trailer</span>
								</div>
								<VideoModal trailer_open={trailer_open} handleClose={handleClose} video_key={video_key} />
							</div>
							{movie ?
								<p>{details.tagline}</p> :
								<p>{details.number_of_seasons} Seasons and {details.number_of_episodes} Episodes</p>
							}
							<div className="my-3">
								<h4 className="font-weight-bold">Overview</h4>
								<p>{details.overview}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
})