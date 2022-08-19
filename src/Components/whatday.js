import dummy from '../DB/trashdata.json'
import React, {useState} from 'react'

function Whatday () {
    let today = (new Date).getDay()
    const weeklytrash = dummy.data
    let whatday = weeklytrash[today].dayKr
    console.log(whatday)
    return (
        <div className="today-date">{whatday}</div>
    )


}

export default Whatday;