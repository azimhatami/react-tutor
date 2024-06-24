import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import ChangeProfile from "../Components/ChangeProfile";
import { ProfileContext } from "../App";


const Profile = (props) => {
    const {name} = useParams();

    const {userName} = useContext(ProfileContext)

    return (
        <div>
            {/* This is Profile page of {name} */}
            <p>This is profile page. - user name is {userName}</p>
            <ChangeProfile/>
        </div>
    )
};

export default Profile;