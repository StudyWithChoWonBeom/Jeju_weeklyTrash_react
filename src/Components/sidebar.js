import React, {useState} from "react";
import dummy from "../DB/trashdata.json"



function Sidebar({handleDate}){
    const todaydate = (new Date).getDay()
    const weeklytrash = dummy.data




return (
    <div>
        <div id="Sidebar">
        <ul>
          <li className = "chooseDay"
            onClick={()=>handleDate(todaydate)}>오늘<br></br>Today

          </li>
          {weeklytrash.map((item,idx) => (
            <li className = "chooseDay" key={item.id}
                onClick={()=>handleDate(idx)}>
                {item.dayKr} <br></br>
                {item.day}

            </li>
          ))}
        </ul>
      </div>
    </div>


)



}

export default Sidebar;