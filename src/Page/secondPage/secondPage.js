import React from 'react';
import Bg from '../Page';

let styleBackground={
  width:'100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: '-1',
}
let top={
position:'absolute',
  top:'1366px'
}
let imageBg = {
	'ancor': 'https://i.ibb.co/1Jd3YgT/more-copy-2.png' 
}
export default props =>(
	<div className={props.classNameEl} style={props.styleTop}>
			<Bg bg={imageBg.ancor} />
			<h1 style={{width:'100vw',height:'100vh',display:'grid',justifyContent:'center', alignContent:'center'}}> Основа терапии - патогенез СД2 </h1>

	</div>
	)