// import React from 'react';
// function scroll(){
// //Change page



// 	let moveDelta = null;

// 	let event = null;

// 	document.addEventListener("touchstart", function (e) {
// 	    event = e;
// 	});
// 	document.addEventListener("touchmove", function (e) {
// 	    if (event) {
// 	        moveDelta = e.touches[0].pageY - event.touches[0].pageY
// 	    }
// 	});
// 	document.addEventListener("touchend", e => {
// 	    event = null;
// 	    changePage(moveDelta);
// 	    moveDelta = null;

// 	});


// 	function changePage(delta){
// 	   if(delta<0){
// 	    changePageDown();
// 	   }
// 	   else{
// 	   changePageUp();}
// 	}

// 	function changePageDown(){

// 	  console.log('changePageDown');

// 	  down = true;
	
// 	}

// 	function changePageUp(){
// 	  console.log('changePageUp');

// 	  down = false;
// 	}
// }
