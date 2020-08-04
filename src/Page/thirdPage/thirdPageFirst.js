import React from 'react'


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
let styleImg={
  width:'100vw',
  height: '60vh',
}

let linkImg = "https://i.ibb.co/MZ69vR7/image.png";
export default props =>(
	  	<div className={props.firstClass}>
  				<img src={link} style={styleBackground}></img>

 
  				<h1>звенья патогенеза сд2</h1>
  				  <h1>{props.valueRange}</h1>

  				<img src={linkImg} style={styleImg}></img>
		 </div>
	)