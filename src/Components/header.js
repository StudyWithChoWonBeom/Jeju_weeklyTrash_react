
import React, {useState} from "react";
import styled, { isStyledComponent } from "styled-components";
import dummy from "../DB/trashdata.json"

function Header (props) {
const data = dummy.data

    const [open, setState] = useState("sideBar")
    const mouseClick = ()=> {
        setState("sideBar-on");}
    const mouseOver = ()=>setState("sideBar-on")
    const mouseOut = ()=>setState("sideBar")



    return (
        <>
            <div>
                <header className = "title">
                <div className="sideBar-content">
                    <button className="sideBarButton" onClick={mouseClick}></button>
                </div>
                <div className={open} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                    {props.children}
                </div>
                <h1 className="title-contents">
                    제주 쓰레기 분리수거
                </h1>
                <div className = "title-today">
                    오늘은 {dummy.data[(new Date).getDay()].dayKr} 입니다.
                </div>
            </header>
            </div>
        </>
    )
}

export default Header