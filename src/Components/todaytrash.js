import React, {useState} from "react";
import dummy from "../DB/trashdata.json";
import "../App.css";


  function Todaytrash ({date}) {
  const weeklytrash = dummy.data

  // console.log(weeklytrash)
  let whatday = weeklytrash[date].dayKr
  let whattrash = weeklytrash[date].trash

  return (
    <>
      <div className="selectedBox" >
        <ul>
           <h2 className = "selectedDay">{whatday}에 배출할 쓰레기</h2>
           <li className = "selectedTrash">{whattrash}</li>
         </ul>
      </div>
    </>
  )
  }

  export default Todaytrash;