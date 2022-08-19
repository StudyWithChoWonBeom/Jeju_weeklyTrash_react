
import React, {useState} from "react";
import dummy from "../DB/trashdata.json"

function Head (props) {
const data = dummy.data

    return (
        <>
            <div>
              <header className = "title">
                <button className="sideBarButton">
                    {props.children}
                </button>
                
                <h1 className="title-contents">
                    제주 쓰레기 분리수거
                </h1>
                <div className = "titleToday">
                    오늘은 {dummy.data[(new Date).getDay()].dayKr} 입니다.
                </div>
            </header>
                <hr></hr>
            </div>
        </>
    )
}

export default Head;