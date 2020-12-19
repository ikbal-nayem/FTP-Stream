import React from 'react';
import './style.css';

const SeriesCard = React.memo(()=>(
  <div className="p-2" style={{minWidth: '170px', maxWidth: '220px'}}>
    <div className="card overflow-hidden">
      <div className="card-image img-card">
        <img width="100%" src="https://maxcdn.icons8.com/app/uploads/2019/05/poster-for-movie.png" alt="..." />
        <div className="img-text">
        	<h6>Series name</h6>
        	<span>(From-To)</span>
        </div>
      </div>
    </div>
  </div>
))

export default SeriesCard;