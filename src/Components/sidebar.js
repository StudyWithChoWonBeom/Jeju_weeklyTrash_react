import React, {useState} from "react";
import dummy from "../DB/trashdata.json";
import paperbin from "../image/paperbin.png"




function Sidebar({handleDate}){
    const todaydate = (new Date).getDay()
    const weeklytrash = dummy.data;
  


return (
    // <div>
        <nav id="Sidebar" className="side flex justify-center space-x-4 items-center text-white bg-sky-900 min-w-fit max-w-fit mx-auto p-1 rounded-lg">

          {/* <div className = "chooseDay font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 justify-center"
            onClick={()=>handleDate(todaydate)}>오늘
            <br></br>Today

          </div> */}
          {weeklytrash.map((item,idx) => (
            <div className = "chooseDay font-medium p-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 items-center align-items-center justify-center text-white"  key={item.id} id={item.id}
                onClick={()=>handleDate(idx)}>
                {item.dayKr}
                 {/* <br></br>  */}
                 {/* {item.day} */}
                 <img className="items-center justify-items-center" alt="#" src={paperbin}/> {/* 이미지 state에 따라서 다르게 넣기 */}

            </div>
          ))}

      </nav>  
    // {/* </div> */}


)



}

export default Sidebar;