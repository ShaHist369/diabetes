import React from 'react'

let ice={
'ancor':'https://i.ibb.co/F5cYXM5/ice-copy-2.png'};


//styles

let styleBackground={
  width:'100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: '-1',
}

let styleIce={
  width:'300px'
}

//  	<img src={ice.ancor} style={styleIce} ></img>
export default props => (
  <div>
  	<img src={props.bg} style={styleBackground}></img>

  </div>

)