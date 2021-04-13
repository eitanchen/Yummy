import React, {Component, Fragment} from 'react';
import ProfilePicture from "./ProfilePicture/ProfilePicture"
import Name from "./Name/Name"
import Buttons from "./Features/Buttons/Buttons"

import BookDetails from "./ProfileDetails/ProfileDetails"
import classes from './Profile.css'
import Modal from "../../../components/UI/Modal/Modal";
import WriteRecommendation from './Features/WriteRecommendation/WriteRecommendation'

class Profile extends Component {
    state = {
        isVisitWriteComment: false,
        name: "Eitan Chen"
    }

    showWriteComment = () => {
        this.setState({isVisitWriteComment: true});
    }

    closeWriteComment = () => {
        this.setState({isVisitWriteComment: false});
    }

    render(props) {
        return(
            <div className={classes.Profile}>
                <div className={classes.ProfilePicture}>
                    <div className={classes.Cover}>
                        <ProfilePicture/>
                        <div className={classes.Button}>
                            <Buttons/>
                        </div>
                    </div>
                    <div className={classes.Name}>
                        <Name name={this.state.name} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;

// render(props){
//     return (
//         <div className={classes.Profile}>
//             <div className={classes.Cover}>
//                 <div className={classes.Name}>
//                     <Name name={this.state.name} />
//                 </div>
//
//                 <div className={classes.ProfilePicture}>
//                     <ProfilePicture/>
//                 </div>
//                 <Modal show={this.state.isVisitWriteComment} modalClosed={this.closeWriteComment}>
//                     <WriteRecommendation clickedCancel = {this.closeWriteComment}/>
//                 </Modal>
//                 <div className={classes.Button}>
//                     <Button btnType="Follow">Follow Me!</Button>
//                     <Button btnType="Recommend" clicked = {this.showWriteComment}>Add Recommendation</Button>
//                 </div>
//             </div>
//             <div className={classes.Line}></div>
//             <div className={classes.Book}>
//                 <BookDetails
//                     Specialty ="Eitan"
//                     num = "1">
//                 </BookDetails>
//             </div>
//         </div>
//     );
// }