import React, { useContext } from "react";
import { ProfileContext } from "../App";


const Home = () => {

    const {userName} = useContext(ProfileContext)
    
    return (
        <div>
            <h2>HOME page. - user name is {userName}</h2>
        </div>
    )
};

export default Home;