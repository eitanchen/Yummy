import React from 'react'
import {IoPersonAddSharp , IoPersonRemoveSharp} from 'react-icons/io5'
import {FcPlus} from 'react-icons/fc'
import classes from './Buttons.css'

const buttons = () => (
    <div>
        <IoPersonAddSharp color={"forestgreen"} size={"2em"} padding={"10px"}/>
        <IoPersonRemoveSharp color={"crimson"} size={"2em"}/>
        <p>
            <FcPlus size={"2em"}/>
            <span/>  <strong>Recommend</strong>
        </p>
    </div>
)

export default buttons