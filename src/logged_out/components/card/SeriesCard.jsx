import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import './style.css';
import {image_base_url} from '../../../shared/util';


const SeriesCard = React.memo(({item})=>{
  return(
    item ?
      <Link to={`/tv-series/${item.id}`}>
        <div style={{minWidth: '140px', maxWidth: '200px'}}>
          <div className="card overflow-hidden">
            <div className="card-image img-card series-card">
              <LazyLoadImage
                width="100%"
                src={`${image_base_url}/w185${item.poster_path}`}
                alt="."
                effect="black-and-white"
              />
              <div className="img-body">
                <div className="rating-box">{item.vote_average}</div>
                <h6>{item.name} ({item.first_air_date && item.first_air_date.split('-')[0]})</h6>
              </div>
            </div>
          </div>
        </div>
      </Link>

    : <div style={{minWidth: '140px', maxWidth: '200px'}}>
        <div className="card overflow-hidden">
          <div className="card-image img-card">
            <Skeleton variant="rect" width="100%" height={228} animation="wave" />
            <div className="img-body">
              <h6>Name</h6>
              <span>(From-To)</span>
            </div>
          </div>
        </div>
      </div>
  )
})

export default SeriesCard;