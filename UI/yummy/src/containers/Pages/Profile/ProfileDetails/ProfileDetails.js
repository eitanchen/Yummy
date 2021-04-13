import React from "react";
import classes from './ProfileDetails.css'
import BookPicture from "../../../../resources/images/ProfilePageImg/profile-page-book.png"

const profileDetails = (props) => {
    return (
        <div className={classes.BookDetails}>
            <div className={classes.Details}>
                <p><strong>Specialty:</strong> {props.Specialty} </p>
                <p><strong>Number of Recipes:</strong> {props.num} </p>
            </div>
            <div>
                <h1>other details</h1>
            </div>
        </div>
    )
};

export default profileDetails;
