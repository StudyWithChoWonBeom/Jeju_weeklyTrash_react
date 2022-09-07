import React, {useState} from "react";
import dummy from "../DB/trashdata.json";



  function Todaytrash ({date,mouseOut}) {
  const weeklytrash = dummy.data
  

  // console.log(weeklytrash)
  let whatday = weeklytrash[date].dayKr
  let whattrash = weeklytrash[date].trash
  const plz = dummy.howto.filter((item,index,array)=>{return array[0]})
  console.log(plz[0])
  
  



  return (
      <div className="selectedBox" onClick={mouseOut} >
          <h2 className = "selectedDay">
            {whatday}에 배출할 재활용 쓰레기
          </h2>
          <div className = "selectedTrash">
            {whattrash}
          </div>
          {/* <div className = "howto">
            {howtotrash}
          </div> */}
      </div>
  )
  }

  export default Todaytrash;