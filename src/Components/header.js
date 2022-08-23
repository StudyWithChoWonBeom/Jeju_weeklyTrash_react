
import React, {useState} from "react";
import styled, { isStyledComponent } from "styled-components";
import dummy from "../DB/trashdata.json"

function Header (props) {
const data = dummy.data
//custom hook 짜기 ㅡㅡ
    return (
        <div>
            <header className = "title">
                {/* <div className="sideBar-content">
                    <button className="sideBarButton" onClick={props.mouseClick}></button>
                </div> */}
                {/* <div className={props.open} >
                    {props.children}
                </div> */}
                <h1 className="title-contents">
                    제주 쓰레기 분리수거
                </h1>
                <div className = "title-today">
                    
                    {/* 오늘은 {dummy.data[(new Date).getDay()].dayKr} 입니다. */}
                </div>
            </header>
        </div>
    )
}

export default Header