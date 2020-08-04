import React from 'react';
import Cercle from './cercle';

let styleBackground={
  width:'100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: '-1',
}

export default props =>(
	  	<div className={props.classNameFP}>
  				<img src={props.firstPageProps.bg} style={styleBackground}></img>

  				<h1 style={{position:"absolute",top:"40px",left:"30px"}} > {props.firstPageProps.pageTitle}</h1>
				
				<Cercle firstPageProps={props.firstPageProps.bigCercle}/>

				<Cercle firstPageProps={props.firstPageProps.midleCercle}/>

				<Cercle firstPageProps={props.firstPageProps.smallCercle}/>

				<Cercle firstPageProps={props.firstPageProps.lastCercle} />

		 </div>
	)