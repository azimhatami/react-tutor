import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const {name} = useParams();

    return (
        <div>
            This is Profile page of {name}
        </div>
    )
};

export default Profile;