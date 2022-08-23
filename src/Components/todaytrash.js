import React, {useState} from "react";
import dummy from "../DB/trashdata.json";



  function Todaytrash ({date,mouseOut}) {
  const weeklytrash = dummy.data
  

  // console.log(weeklytrash)
  let whatday = weeklytrash[date].dayKr
  let whattrash = weeklytrash[date].trash
  // const howtotrash = dummy.howto.filter( function(elements, index, array) {
  //   if (array.id = "2, 6") {
  //     // console.log(array.id)
  //     // console.log(elements.value)
  //     // console.log(elements.value.toString())
  //     // console.log(typeof(elements.value))
  //     // console.log(elements.value.toString())
  //     // console.log(typeof(elements.value.toString()))
  //     console.log(Object.getOwnPropertyDescriptor(JSON.stringify(elements.value)))
  //     return
  //   }

  // }
    

  //  )

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