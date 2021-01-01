import React from 'react';
import {Link} from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import './style.css';
import {image_base_url} from '../../../shared/util';


const SeriesCard = React.memo(({item})=>{
  return(
    item ?
      <Link to={`/tv-series/${item.id}`}>
        <div className="p-2" style={{minWidth: '150px', maxWidth: '220px'}}>
          <div className="card overflow-hidden">
            <div className="card-image img-card">
              <img width="100%" src={`${image_base_url}/w185${item.poster_path}`} alt="..." />
              <div className="img-body">
                <div className="rating-box">{item.vote_average}</div>
                <h6>{item.name} ({item.first_air_date && item.first_air_date.split('-')[0]})</h6>
              </div>
            </div>
          </div>
        </div>
      </Link>

    : <div className="p-2" style={{minWidth: '150px', maxWidth: '220px'}}>
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