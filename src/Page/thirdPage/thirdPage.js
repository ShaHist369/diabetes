import React from 'react';
import First from './thirdPageFirst';
import Second from './thirdPageSecond';
import Third from './thirdPageThird';

let link ="https://i.ibb.co/RhDJkVL/more-copy-3.png";
let styleBackground={
  width:'100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: '-1',
}
let styleBackgroundHidden={
  width:'100vw',
  height: '100vh',
  position: 'fixed',
  left: '1024px',
  zIndex: '-1',
}



export default props =>(
	  	<div className={props.classNameEl} style={props.styleTop}>

	  		        <First firstClass={props.firstClass} />
	  		        <Second secondClass={props.secondClass} />
	  		        <Third thirdClass={props.thirdClass} />



		 </div>
	)