import React from 'react';
import NotFound from '../image/404.svg';

export default React.memo(()=>(
	<div className="app-wrapper">
		<div className="text-center">
			<img width="40%" src={NotFound} alt="..."/>
			<h3 className="mt-5 text-white">Oops...!<br/>Page Not Found</h3>
		</div>
	</div>
))