import React from 'react'
import classes from './WriteRecommendation.css'
import {FcOk} from 'react-icons/fc'
import {GiCancel} from 'react-icons/gi'
import recommendPicture from '../../../../../resources/images/ProfilePageImg/reccomend.jpg'

const writeRecommendation = (props) => (
        <div className={classes.Column}>
            <img src={recommendPicture} alt="Yummy"/>
            <textarea maxLength={200} type="text" className={classes.TextBigger}/>
            <div>
                {/*icons button*/}
                <FcOk size="3em" onClick={props.clicked} style={{marginRight: "20px"}}/>
                <GiCancel color="red" size="3em" onClick={props.clickedCancel}/>
            </div>
        </div>
)

export default writeRecommendation