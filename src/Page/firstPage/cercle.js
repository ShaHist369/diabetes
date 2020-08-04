import React from 'react';



export default props =>(
	<div>
		<h2 className="cercleTitle" style={props.firstPageProps.size}>{props.firstPageProps.target}</h2>
				<div className={'cercle orangeGrad'} style={props.firstPageProps.size}>
					<div className={'cercle firstC orangeGrad'} style={props.firstPageProps.FC}>
						<div className={'cercle secondC orangeGrad'} style={props.firstPageProps.SC}>
						</div>
					</div>
				</div>
				</div>

	) 