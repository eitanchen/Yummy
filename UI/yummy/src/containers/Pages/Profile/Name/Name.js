import React from "react";
import classes from './Name.css'

const name = (props) => {
    return (
        <div className={classes.Name}>
            {props.name}
        </div>
    )

};

export default name;
