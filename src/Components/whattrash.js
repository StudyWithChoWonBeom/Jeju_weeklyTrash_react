import dummy from '../DB/trashdata.json'
import React, {useState} from 'react'

function Whattrash () {
    const weeklytrash = dummy.data
    let date = (new Date).getDay()
    let whattrash = weeklytrash[date].trash
    console.log(whattrash)

    return (
        <>{whattrash}</>
    )

}

export default Whattrash;