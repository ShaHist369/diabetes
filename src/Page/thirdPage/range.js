import React from 'react';

export default props =>(
			<div className={'input-range'}>
				<input id={'years'} type={'range'} min={"1998"} max={"2016"} onChange={this.handleChange}/>
			</div>
	)