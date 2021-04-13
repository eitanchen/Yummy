import React from "react";
import classes from './ProfilePicture.css'
import ProfilePicture from '../../../../resources/images/ProfilePageImg/ProfilePage.jpeg'


const profilePicture = () => {
    return <div className={classes.ProfilePicture}>
        <img src={ProfilePicture} alt="Yummy"/>
    </div>
};

export default profilePicture;
