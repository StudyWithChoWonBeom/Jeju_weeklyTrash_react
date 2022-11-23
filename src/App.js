// import '.reset.css';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import React, {useState} from 'react';
import Todaytrash from './Components/todaytrash'
import Header from './Components/header'
import Sidebar from './Components/sidebar';
import Howtotrash from './Components/howtotrash';





function App() {
  const [date, setDate] = useState((new Date).getDay()) ;
  const handleDate = (date)=>{setDate(date)}



 
  

  const [open, setState] = useState("sideBar")
  const mouseClick = ()=> {
      setState("sideBar-on");}
  const mouseOver = ()=>setState("sideBar-on")
  const mouseOut = ()=>setState("sideBar")


  return (
    <>
      {/* <div className='container'> */}
        <Header mouseClick={mouseClick} open={open}/>
        <Sidebar handleDate={handleDate}/>
        <Todaytrash mouseOut={mouseOut} date={date}/>
        {/* <Howtotrash /> */}
      {/* </div> */}
    </>
  );
}


export default App;
