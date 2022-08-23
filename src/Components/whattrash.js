import dummy from '../DB/trashdata.json'
import React, {useState} from 'react'

function Whattrash ({date}) {
    let wanted_trash = dummy.data[date].trash
    console.log(wanted_trash)

    return (
        <div>
        {wanted_trash}
        </div>
    )

}

export default Whattrash;