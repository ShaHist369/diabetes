import React, { Component } from 'react';
import './App.css';
import Bg from './Page/Page';
import FirstPage from './Page/firstPage/firstPage';
import SecondPage from './Page/secondPage/secondPage';
import ThirdPage from './Page/thirdPage/thirdPage';



class App extends Component {



  state = {
    bigCercle:{
          target:"Цель по HbA1c",
          size:{
              position: "absolute",
              top: "38vh",
              left: "53vw",
              width:'100px',
              height:'100px',
          },
          FC:{
              animation: 'cercles1 2s ease-in-out 1s infinite',
          },
          SC:{
              animation: 'cercles1 2s ease-in-out 0s infinite',
          }

    },
    midleCercle:{

          target:"Гипогликемия",
          size:{
              position: "absolute",
              top: "58vh",
              left: "18vw",
            width:'50px',
            height:'50px',
          },
          FC:{
              animation: 'cercles2 2s ease-in-out 1s infinite',
          },
          SC:{
              animation: 'cercles2 2s ease-in-out 0s infinite',
          }

    },
    smallCercle:{

          target:"Осложненния СД",
          size:{
            position: "absolute",
            top: "73vh",
            left: "46vw",
            width:'45px',
            height:'45px',
          },
          FC:{
              animation: 'cercles3 2s ease-in-out 1s infinite',
          },
          SC:{
              animation: 'cercles3 2s ease-in-out 0s infinite',
          }

    },
    lastCercle:{

          target:"СС риски",
          size:{
            position: "absolute",
            top: "70vh",
            left: "90vw",
            width:'45px',
            height:'45px',
          },
          FC:{
              animation: 'cercles3 2s ease-in-out 1s infinite',
          },
          SC:{
              animation: 'cercles3 2s ease-in-out 0s infinite',
          }

    },

    bgNumber: 'https://i.ibb.co/rcvtmcC/more-copy.png',
    pageTitle: 'Всегда ли цели терапии на поверхности?',
    moveDelta: null,
    positionFirstTouch: null,
//    scrollDown: null,


    numberCurrentPage: 1,
    numberNewPage: false,
    newPage: null,
    swype: false,

    classOldPage: "",
    classNewPage: "",
    styleCurrentPage:{
        position:'absolute',
        top:'0px'
    },
    styleTopNewPage:{
        position:'absolute',
        top:'1366px'
        },
    styleTopOldPage:{
        position:'absolute',
        top:'0px'
    },
    value: 1998,
    checkPoint:2004
  }

handleChange=(event)=>{
   let oldCheckPoint;
  if((this.state.value === 2004)||(this.state.value === 2010)||(this.state.value === 2016)){
  oldCheckPoint = this.state.value;
}
  this.setState({
    checkPoint: oldCheckPoint,
    value: event.target.value
  })
}

  handleTouchStart = (e) =>{
//    console.log("start")
      this.setState({
          positionFirstTouch: e.touches[0].pageY
      })
  }

  handleTouchMove= (e) =>{

//        console.log("process");
          if (this.state.positionFirstTouch) {
            let DeltaLocal;
            let positionCurrent = e.touches[0].pageY;
            DeltaLocal = positionCurrent - this.state.positionFirstTouch;

                    this.setState({
                        moveDelta: DeltaLocal
                    })

          }
  }

  handleTouchEnd= (e) =>{

      if(this.state.moveDelta === null){

        return}
      else{
                let newPage; 
                
          if(this.state.moveDelta<0){ 

               newPage = this.state.numberCurrentPage + 1;
              console.log(newPage); 
                this.setState({
                  numberNewPage: newPage
                })

                setTimeout(()=>{
                    setTimeout(()=>{
                      this.setState({
                        numberNewPage: false
                      })
                      newPage = null;},1);
                    this.setState({
                      numberCurrentPage: newPage,
                      classOldPage:"",
                      classNewPage:"",
                      styleCurrentPage:{
                                    position:'absolute',
                                    top:'0px'
                          },
                      newPage: null                  
                }) },1000);

//                console.log('changePageDown');


                this.setState({
                    swype: "up",
                    event: null,
                    moveDelta: null,
                    numberNewPage: newPage,
                    classOldPage:"changeCurrentPageUp",
                    classNewPage:"changeNewPageUp",
                    styleTopNewPage:{
                        position:'absolute',
                        top:'0px'
                    }
                })

           }
           else{   

 //               console.log('changePageUp');

               newPage = this.state.numberCurrentPage - 1;
              console.log(newPage); 
                this.setState({
                  numberNewPage: newPage
                })




                setTimeout(()=>{


                    setTimeout(()=>{
                      this.setState({
                        numberNewPage: false
                      })
                      newPage = null;},1);
                    
                    this.setState({
                      numberCurrentPage: newPage,
                      classOldPage:"",
                      classNewPage:"",
                      styleCurrentPage:{
                                    position:'absolute',
                                    top:'0px'
                          },
                      newPage: null                  
                }) },1000);


                this.setState({
                  swype: "down",
                  event: null,
                  moveDelta: null,
                  numberNewPage: newPage,
                  classOldPage:"changeCurrentPageDown",
                  classNewPage:"changeNewPageDown",
                  styleTopNewPage:{
                      position:'absolute',
                      top:'1366px'
          }

                })

            }
      }
  }

  // replacePage = () =>{
  //   let newPage = this.state.newPage;
  //   this.setState({
  //     currentPage: newPage,
  //     classOldPage:"",
  //     classNewPage:"",
  //     styleCurrentPage:{
  //                   position:'absolute',
  //                   top:'0px'
  //         },
  //     newPage: null
  //   })
  // }



  render() {


  let firstPageProps = {
    pageTitle: this.state.pageTitle,
    bigCercle: this.state.bigCercle,
    midleCercle: this.state.midleCercle,
    smallCercle: this.state.smallCercle,
    lastCercle: this.state.lastCercle,
    bg: this.state.bgNumber
  }
    let message;

switch (this.state.swype) {
  case false:
//    console.log('stay here');
    break;
  case "up":
    message = 'down';
//    console.log(message);
    this.setState({
        swype: false
    });
    break;
  case "down":
    message = 'up';
//    console.log(message);
    this.setState({
        swype: false
    })
    break;
}
let firstClass;
let secondClass;
let thirdClass;

if(this.state.value > 2010){
      firstClass = 'onCenter';
    secondClass = 'onRight';
    thirdClass = 'onRight';


}else{
  if(this.state.value > 2004){
    firstClass = 'onLeft';
    secondClass = 'onCenter';
    thirdClass = 'onRight';
  }else{

    firstClass = 'onLeft';
    secondClass = 'onLeft';
    thirdClass = 'onCenter';

  }
}




let classInput;
let curPage;
switch (this.state.numberCurrentPage) {
  case 1:
  curPage = () =>{
      return(
        <FirstPage classNameFP={this.state.classOldPage} firstPageProps={firstPageProps}/>
        )
  }
    break;
  case 2:
  curPage = () =>{
      return(
            <SecondPage classNameEl={this.state.classOldPage} styleTop={this.state.styleCurrentPage}/>
      )
  };
    break;
  case 3:
  curPage = () =>{
      return(
          <ThirdPage firstClass={firstClass} secondClass={secondClass} thirdClass={thirdClass} classNameEl={this.state.classOldPage} styleTop={this.state.styleCurrentPage} valueRange={this.state.value}/>
      )
  }
    break;
}

let newClassOldTPBg;
let newClassNewTPBg;
if(this.state.value > this.state.checkPoint){
    newClassOldTPBg = "slideBgRight";
    newClassNewTPBg = "slideBgLeft";
}else{
    newClassOldTPBg = "slideBgLeft";
    newClassNewTPBg = "slideBgRight";
}
let nPage;

switch (this.state.numberNewPage) {
    case false:
  nPage = () =>{
      return(
        null
        )
  }
    break;
  case 1:

  nPage = () =>{
      return(
        <FirstPage classNameFP={this.state.classNewPage} firstPageProps={firstPageProps}/>
        );
}
    break;
  case 2:

  nPage = () =>{
      return(
            <SecondPage classNameEl={this.state.classNewPage} styleTop={this.state.styleNewPage}/>
        );
}
    break;
  case 3:
  nPage = () =>{
           return(
              <ThirdPage newClassNewTPBg={newClassNewTPBg} newClassOldTPBg={newClassOldTPBg} classNameEl={this.state.classNewPage} styleTop={this.state.styleNewPage} valueRange={this.state.value}/>
               )
             }
  break;

}



let isThirdPage;
if(this.state.numberCurrentPage === 3){
  isThirdPage = true
}else{
  isThirdPage =false
}




    return (
    <div> 
      <div onTouchEnd={this.handleTouchEnd} onTouchMove={this.handleTouchMove} onTouchStart={this.handleTouchStart} >
            
            {curPage()}
            {nPage()} 
             
      </div>
      {isThirdPage ? 
      <div className={'input-range'}>
        <h1>{this.state.value}</h1>
        <input id={'years'} type={'range'} min={"1998"} max={"2016"} value={this.state.value} onChange={this.handleChange}/>
      </div> : null}
    </div>
    );
  }
}

export default App;
